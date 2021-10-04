const express = require("express");
const router = express.Router();

const Item = require("../models/item.model");

//POST
router.post("/addItem", async (req, res) => {
  let item = new Item({
    userId: req.body.userId,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    condition: req.body.condition,
    purchasedOn: req.body.purchasedOn,
    image: req.body.image,
    numberOfUsers: req.body.numberOfUsers,
  });
});

//UPDATE
router.put("/updateItem/:id", async (req, res) => {
  let item = await Item.findByIdAndUpdate(
    req.params.id,
    {
      userId: req.body.userId,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      condition: req.body.condition,
      purchasedOn: req.body.purchasedOn,
      image: req.body.image,
      numberOfUsers: req.body.numberOfUsers,
    },
    {
      new: true,
    }
  );
  item = await item.save();
  if (!item) return res.status(500).send("Item cannot be created");
  res.send(item);
});

//DELETE
router.delete("/delItem/:id", async (req, res) => {
  let item = await Item.findOneAndRemove(req.params.id);
  if (!item) return res.status(500).send("Item cannot be found");
  res.send(item);
});

//GET
router.get("/getItems", async (req, res) => {
  let item = await Item.find();
  if (!item) return res.status(500).send("Items not found");
  res.send(item);
});

//GET BY ID
router.get("/getItems/:id", async (req, res) => {
  let item = await Item.findById(req.params.id);
  if (!item) return res.status(500).send("Items not found");
  res.send(item);
});

module.exports = router;
