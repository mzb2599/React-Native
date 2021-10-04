const express = require("express");
const router = express.Router();

const User = require("../models/user.model.js");

//POST
router.post("/addUser", async (req, res) => {
  let user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    userName: req.body.userName,
    location: req.body.location,
    items: req.body.items,
    profile: req.body.profile,
  });
  user = await user.save();
  if (!user) return res.status(500).send("User cannot be created");
  res.send(user);
});

//GET
router.get("/getUsers", async (req, res) => {
  let user = await User.find();
  if (!user) return res.status(500).send("User cannot be found");
  res.send(user);
});

//GET BY ID
router.get("/getUser/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) return res.status(500).send("User cannot be found");
  res.send(user);
});

//DELETE
router.delete("/delUser/:id", async (req, res) => {
  let user = await User.findByIdAndRemove(req.params.id);
  if (!user) return res.status(500).send("User cannot be found");
  res.send(user);
});

//UPDATE
router.put("/updateUser/:id", async (req, res) => {
  let user = await User.findByIdAndUpdate(
    req.params.id,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      userName: req.body.userName,
      location: req.body.location,
      items: req.body.items,
      profile: req.body.profile,
    },
    {
      new: true,
    }
  );
  user = await user.save();
  if (!user) return res.status(500).send("User cannot be found");
  res.send(user);
});

module.exports = router;
