import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";

export const createProduct = async (req, res) => {
  const { email, name, price, productImgUrl } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      attributes: ["id"],
    });

    console.log(user);
    if (!user.id) {
      return res.status(400).json({
        errors: [
          {
            msg: "Invalid credentials",
          },
        ],
      });
    }

    await Product.create({
      name,
      price: parseFloat(price),
      isSold: false,
      userId: user.id,
      productImgUrl,
    });

    res.json({ msg: "Product created" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ attributes: { exclude: ["id"] } });
    console.log(products[0]);
    res.status(200).json(products);
  } catch (error) {}
};

export const getProductsByUserId = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: { exclude: ["id"] },
      where: {
        userId: req.body.userId,
      },
    });
    res.status(200).json(products);
  } catch (error) {}
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (product) {
      await product.destroy();
      res.status(200).json(product);
    }

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (product) {
      res.status(200).json(product);
    }

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  const { name, price, productImgUrl, isSold } = req.body;
  const id = req.params.id;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });

    if (product) {
      product.name = name;
      product.price = price;
      product.productImgUrl = productImgUrl;
      product.isSold = JSON.parse(isSold);

      product.save();
      res.status(200).json(product);
    }

    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
};
