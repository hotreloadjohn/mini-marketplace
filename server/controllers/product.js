import Category from "../models/CategoryModel.js";
import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";

export const createProduct = async (req, res) => {
  const {
    email,
    name,
    price,
    productImgUrl,
    condition,
    description,
    category,
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      attributes: ["id"],
    });

    if (!user.id) {
      return res.status(400).json({
        errors: [
          {
            msg: "Invalid credentials",
          },
        ],
      });
    }

    const categoryObj = await Category.findOne({
      where: {
        name: category,
      },
    });
    if (categoryObj.id) {
      await Product.create({
        name,
        price: parseFloat(price),
        isSold: false,
        userId: user.id,
        productImgUrl,
        condition,
        description,
        categoryId: categoryObj.id,
      });
      res.json({ msg: "Product created" });
    } else {
      res.status(400).json({ error: "An error occured" });
    }
  } catch (error) {
    res.status(400).json({ error: "An error occured" });
    console.log(error);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    // const products = await Product.findAll({ attributes: { exclude: ["id"] } });
    const products = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).json(products);
  } catch (error) {}
};

export const getProductsByUserId = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        userId: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
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
    // Might need user id, only owner/admin can delete own product
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
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Category,
          attributes: ["name"],
        },
      ],
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
