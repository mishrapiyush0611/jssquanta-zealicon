const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("individual");
const groupUser = mongoose.model("group");
router.get("/", (req, res) => {
  console.log("");
  res.send("hello");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  const { name, email, mobileNumber, AdmNo } = req.body;
  if (!email || !mobileNumber || !name || !AdmNo) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      const user = new User({
        email,
        mobileNumber,
        name,
        AdmNo,
      });

      user
        .save()
        .then((user) => {
          res.json({ message: "saved successfully" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//group api
router.post("/group-register", (req, res) => {
  console.log(req.body);

  const {name1,email,phone1,admNo1,name2,phone2,admNo2,name3,phone3,admNo3,name4,phone4,admNo4,name5,phone5,admNo5} = req.body
  // res.json({ message: req.body });

  if(!email || !phone1 || !name1 ||!admNo1){
     return res.status(422).json({error:"please add all the fields"})
  }
  
  groupUser.findOne({email:email})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }

            const users = new groupUser({name1,email,phone1,admNo1,name2,phone2,admNo2,name3,phone3,admNo3,name4,phone4,admNo4,name5,phone5,admNo5})

            users.save()
            .then(users=>{
                res.json({message:"group user saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
      .catch(err=>{
          console.log(err)
        })
});
router.get("/getAllIndividuals", (req, res) => {
  try {
    User.find({}, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        return  res.status(201).json(data);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
);
router.get("/getAllTeams", (req, res) => {
  try {
    groupUser.find({}, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        return  res.status(201).json(data);
      }
    });
  } catch (e) {
    console.log(e);
  }
}
);

module.exports = router;
