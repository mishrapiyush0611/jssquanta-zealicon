import {RoboUser, RoboGroup} from "../models/RoboOlympics.js"

export const RoboRegisterInd = (req, res) => {
    console.log(req.body);
    const { name, email, mobileNumber, zealId } = req.body;
    if (!email || !mobileNumber || !name || !zealId) {
      return res.status(400).json({ error: "please add all the fields" });
    }
    RoboUser.findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          return res
            .status(422)
            .json({ error: "user already exists with that email" });
        }
        const user = new RoboUser({
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
export const RoboRegisterGroup = (req, res) => {
    console.log(req.body); 
    const {player1} = req.body
    // passing all players value in req.body
    RoboGroup.findOne({email:player1.email})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        const users = new RoboGroup(req.body)
              users.save()
              .then(users=>{
                  res.status(200).json({message:"group user saved successfully"}, users)
              })
              .catch(err=>{
                  console.log(err)
              })
        })
        .catch(err=>{
            console.log(err)
    })
}