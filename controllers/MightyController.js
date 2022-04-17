import {MightyUser, MightyGroup} from "../models/MightyManeuver.js"

export const MightyRegisterInd = (req, res) => {
    console.log(req.body);
    const { name, email, mobileNumber, zealId } = req.body;
    if (!email || !mobileNumber || !name || !zealId) {
      return res.status(400).json({ error: "please add all the fields" });
    }
    MightyUser.findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          return res
            .status(422)
            .json({ error: "user already exists with that email" });
        }
        const user = new MightyUser({
          email,
          mobileNumber,
          name,
          zealId,
        });
        user.save().then((user) => {res.json({ message: "saved successfully" });})
          .catch((err) => {console.log(err);});
      })
      .catch((err) => {console.log(err);});
  }
  
  //group api
export const MightyRegisterGroup = (req, res) => {
    console.log(req.body); 
    const {player1} = req.body
    // passing all players value in req.body
    MightyGroup.findOne({email:player1.email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        const users = new MightyGroup(req.body)
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
}