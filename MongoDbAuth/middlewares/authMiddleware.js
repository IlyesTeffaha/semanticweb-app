const User = require("../model/authModel");
const jwt = require("jsonwebtoken");
const {verify} = require("jsonwebtoken")

// module.exports.checkUser = (req, res, next) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     jwt.verify(
//       token,
//       "kishan sheth super secret key",
//       async (err, decodedToken) => {
//         if (err) {
//           res.json({ status: false });
//           next();
//         } else {
//           const user = await User.findById(decodedToken.id);
//           if (user) res.json({ status: true, user: user.email });
//           else res.json({ status: false });
//           next();
//         }
//       }
//     );
//   } else {
//     res.json({ status: false });
//     next();
//   }
// };



const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
// in case it dosen't even exist
  if (!accessToken) return  next();
// in case it exists and we need to verify the authanticity
  try {
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };