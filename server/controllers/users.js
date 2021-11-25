import Users from "../models/UserModel.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: The auto-generated id of the User
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *         refresh_token:
 *           type: string
 *           description: Refresh_token  of the user
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing API
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../models/UserModel'
 */
export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUsernameById = async (req, res) => {
  try {
    console.log(`Server: getUsernameById ${req.body.id}`);
    const user = await Users.findOne({
      attributes: { include: ["name"] },
      where: {
        id: req.body.id,
      },
    });
    if (user) {
      res.json(user.name);
      return;
    }

    res.status(404).json({ error: "User name not found" });
  } catch (error) {
    console.log(error);
  }
};

// export const Register = async (req, res) => {
//   const { name, email, password, confPassword } = req.body;
//   if (password !== confPassword)
//     return res
//       .status(400)
//       .json({ msg: "Password and Confirm Password does not match" });
//   const salt = await bcrypt.genSalt();
//   const hashPassword = await bcrypt.hash(password, salt);
//   try {
//     await Users.create({
//       name: name,
//       email: email,
//       password: hashPassword,
//     });
//     res.json({ msg: "Register success" });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const Login = async (req, res) => {
//   try {
//     const user = await Users.findAll({
//       where: {
//         email: req.body.email,
//       },
//     });
//     const match = await bcrypt.compare(req.body.password, user[0].password);
//     if (!match) return res.status(400).json({ msg: "Wrong Password" });
//     const userId = user[0].id;
//     const name = user[0].name;
//     const email = user[0].email;
//     const accessToken = jwt.sign(
//       { userId, name, email },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//         expiresIn: "1h",
//       }
//     );
//     const refreshToken = jwt.sign(
//       { userId, name, email },
//       process.env.REFRESH_TOKEN_SECRET,
//       {
//         expiresIn: "1d",
//       }
//     );
//     await Users.update(
//       { refresh_token: refreshToken },
//       {
//         where: {
//           id: userId,
//         },
//       }
//     );
//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//     });
//     res.json({ name, email, accessToken });
//   } catch (error) {
//     res.status(404).json({ msg: "Email not found" });
//   }
// };

// export const Logout = async (req, res) => {
//   const refreshToken = req.cookies.refreshToken;
//   if (!refreshToken) return res.sendStatus(204);
//   const user = await Users.findAll({
//     where: {
//       refresh_token: refreshToken,
//     },
//   });
//   if (!user[0]) return res.sendStatus(204);
//   const userId = user[0].id;
//   await Users.update(
//     { refresh_token: null },
//     {
//       where: {
//         id: userId,
//       },
//     }
//   );
//   res.clearCookie("refreshToken");
//   return res.sendStatus(200);
// };
