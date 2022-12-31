const User = require("../model/authModel");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken")

const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

const CURRENTSTATUS={
  ACTIVE:'active',
  SUSPENDED:'suspended'

}
const isverified={
  TRUE:true,
  FALSE:false,
}

// const maxAge = 3 * 24 * 60 * 60;
// const createToken = (id) => {
//   return jwt.sign({ id }, "kishan sheth super secret key", {
//     expiresIn: maxAge,
//   });
// };

// const handleErrors = (err) => {
//   let errors = { email: "", password: "" };

//   console.log(err);
//   if (err.message === "incorrect email") {
//     errors.email = "That email is not registered";
//   }

//   if (err.message === "incorrect password") {
//     errors.password = "That password is incorrect";
//   }

//   if (err.code === 11000) {
//     errors.email = "Email is already registered";
//     return errors;
//   }

//   if (err.message.includes("Users validation failed")) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       errors[properties.path] = properties.message;
//     });
//   }

//   return errors;
// };

///////////////////email verification///////////////////
const characters="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let activationcode="";
for(let i=0;i<25;i++){
  activationcode+=characters[Math.floor(Math.random()*characters.length)];

}

 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user:"unitnmail@gmail.com", 
    pass:"uorfesvxsfesejst",
  },
});

const sendConfirmationEmail=(email,activationcode)=>{
transporter.sendMail({
  from:"unitnmail@gmail.com",
  to:email,
  subject:"Confirm your account",
  html:`<h1>Confirmation Email</h1>
  <h2>Hello,</h2>
  <p>In order to activate your account please click on this link </p>
  <a href=http://localhost:3000/confirm/${activationcode}> Click Here ! </a> </div>`,
}).catch((err)=>console.log(err));
};

//////activation method/////////
// router.put('/activateuser/:activationcode',async (req,res)=>{
  module.exports.activationmethod = async (req, res, next) => {
  const activationcode = req.params.activationcode;

  try {
    const user = await User.findOneAndUpdate({ activationcode: activationcode },{ isverified: true },  {new: true} );
    await user.save();
    console.log(user)
    // const user = await User.findOne({ activationcode: activationcode });
  //  await user.put({ isverified: true });
  res.send("updated"+user)
    
  } catch (error) {
  res.json(error)
    
  }

  }
// });

module.exports.register = async (req, res, next) => {
  // try {
  //   const { email, password } = req.body;
  //   const user = await User.create({ email, password });
  //   const token = createToken(user._id);

  //   res.cookie("jwt", token, {
  //     withCredentials: true,
  //     httpOnly: false,
  //     maxAge: maxAge * 1000,
  //   });

  //   res.status(201).json({ user: user._id, created: true });
  // } catch (err) {
  //   console.log(err);
  //   const errors = handleErrors(err);
  //   res.json({ errors, created: false });
  // }
  const { username, password ,email,birthday,address,PostalCode,PhoneNumber,gender,section,scorebac,state,city} = req.body;
  const user = await User.findOne({ email: email });

      if(user){
        res.json({message:"Email already exists"}) }
        else{
  bcrypt.hash(password, 10).then((hash) => {
    console.log(hash)
    User.create({
      username: username,
      password: hash,
      email:email,
      role:ROLE.BASIC,
      birthday:birthday,
      address:address,
      PostalCode:PostalCode,
      PhoneNumber:PhoneNumber,
      currentstatus:CURRENTSTATUS.ACTIVE,
      gender:gender,
      activationcode:activationcode,
      isverified:isverified.FALSE,
      state:state,
      city:city,

  
    })
    res.json({success:"An activation link has been sent to your email address"});  
  });
  sendConfirmationEmail(email,activationcode)
}
};

module.exports.login = async (req, res) => {
  // const { email, password } = req.body;
  // try {
  //   const user = await User.login(email, password);
  //   const token = createToken(user._id);
  //   res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
  //   res.status(200).json({ user: user._id, status: true });
  // } catch (err) {
  //   const errors = handleErrors(err);
  //   res.json({ errors, status: false });
  // }
  const { email, password } = req.body;
  //finds the user with the email written in the body
  

  
    const user = await User.findOne({ email: email });
  
    
    if (!user) {
      res.json({ error: "User Doesn't Exist" });
    } else {
      //returns true if the entered password matches the imported user
    
     await bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Wrong Password " });
        console.log(match)
      }
  else{
    if(user && match && !user.isverified){
      res.json({ error: "Please verify your account via the mail sent to your email address " });
    }else{
      const accesstoken= sign({username:user.username,id:user.id,email:user.email,role:user.role,birthday:user.birthday,gender:user.gender,address:user.address,PostalCode:user.PostalCode,PhoneNumber:user.PhoneNumber,occupation:user.occupation,scorebac:user.scorebac,section:user.section},"importantsecret");
      
      res.json({token:accesstoken,username:user.username,id:user.id,email:user.email,role:user.role,birthday:user.birthday,gender:user.gender,address:user.address,PostalCode:user.PostalCode,PhoneNumber:user.PhoneNumber,occupation:user.occupation,scorebac:user.scorebac,section:user.section,image:user.image});}
    }
    
  
  
  
    });
    }
    

};




module.exports.validate = async (req, res, next) => {
  res.json(req.user);
}


//return single user for the admin
module.exports.getuser = async (req, res, next) => {

  const id = req.params.id;
  try {
  const singleuser = await User.findById(id);
  res.json(singleuser);
    
  } catch (error) {
    console.log(error)
  }
  // const singleuser = await Users.findOne({ where: { role: 'basic' }&&{id:id} });
// console.log(singleuser)


}

module.exports.updateuser = async (req, res, next) => {

  const id = req.params.id;
  // const singleuser = await Users.findOne({ where: { role: 'basic' }&&{id:id} });
  const singleuser = await User.find( { _id:id } );

  res.json(singleuser[0]);


}

