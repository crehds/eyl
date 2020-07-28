const express = require("express");
const router = express.Router();
const LoginService = require("../../services/login");

const loginService = new LoginService();

router.get("/", async function (req, res, next) {
  // console.log(req);
  
  try {
    const login = await loginService.getLogin();
    res.status(200).json({
      data: login,
      message: "data success",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/TypesOfUsers", async function (req, res, next) {
  try {
    const TypeUsers = await loginService.TypesUsers();
    res.status(200).json({
      data:TypeUsers,
      message: "Type0s of Users listed"
    })
  } catch(error) {
    next(error)
  }
})



module.exports = router;
