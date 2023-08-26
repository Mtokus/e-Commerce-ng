const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const upload = require("../services/file.servis");
const response = require("../services/response.servis");

// Ürün Ekleme
router.post("/add", upload.array("image"), async (req, res) => {
  response(res, async () => {
    const { name, stock, price, categories } = req.body;
    const productId = uuidv4();
    let product = new Product({
      _id: productId,
      name: name.toUpperCase(),
      stock: stock,
      price: price,
      categories: categories,
      isActive: true,
      imageUrls: req.files,
      createdDate: new Date(),
    });
    await product.save();
    res.json({ message: "Ürün kaydı başarıyla tamamlandı!" });
  });
});
