const { register, login,activationmethod, getuser,updateuser, validate} = require("../controllers/authControllers");
const { validateToken } = require("../middlewares/authMiddleware");

const router = require("express").Router();

// router.post("/", validateToken); 
router.post("/register", register);
router.post("/login", login);
router.put("/activateuser/:activationcode",activationmethod);
router.get("/validate",validateToken,validate);
router.get("/getuser/:id",validateToken,getuser);
router.get("/update/:id",updateuser);




module.exports = router;
