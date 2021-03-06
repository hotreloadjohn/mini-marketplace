import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Create a User account
 *     tags: [User]
 *     parameters:
 *       - in: body
 *         name: register
 *         description: Register a user account
 *         schema:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *            - confPassword
 *          properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            confPassword:
 *              type: string
 *     responses:
 *       200:
 *         description: Successfully created an  account
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                  type: string
 */
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  //Validate if email already exists
  const user = await User.findAll({
    where: {
      email: req.body.email,
    },
  });

  if (user.length > 0) {
    return res.status(422).json({
      errors: [{ msg: "Email already registered." }],
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
    });
    res.json({ msg: "Register success" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     responses:
 *       401:
 *         description: User login
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../models/UserModel'
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Look for user email in the database
  const user = await User.findAll({
    where: {
      email: req.body.email,
    },
  });

  if (user.length === 0) {
    return res.status(400).json({
      errors: [
        {
          msg: "Wrong username or password.",
        },
      ],
    });
  }

  // Compare hased password with user password to see if they are valid
  let isMatch = await bcrypt.compare(password, user[0].password);

  if (!isMatch) {
    return res.status(401).json({
      errors: [
        {
          msg: "Email or password is invalid",
        },
      ],
    });
  }

  const name = user[0].name;
  const accessToken = jwt.sign(
    { email, name },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "1h",
    }
  );
  const refreshToken = jwt.sign(
    { email, name },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
  await User.update(
    { refresh_token: refreshToken },
    {
      where: {
        id: user[0].id,
      },
    }
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.json({
    accessToken,
    refreshToken,
    user: { userId: user[0].id, name, email },
  });
};

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: User logout
 *     tags: [User]
 *     responses:
 *       401:
 *         description: User logout
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../models/UserModel'
 */
export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await User.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
