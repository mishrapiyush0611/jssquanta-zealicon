import {ElectroEvent, ElectroWinner, ElectroAnswer} from "../models/ElectroEvent.js"

export const EventRegister = async (req, res) => {
    console.log(req.body);
    const { name, email, zealId } = req.body;
    if (!email || !name || !zealId) {
      return res.status(400).json({ error: "please add all the fields" });
    }
    const user = new ElectroEvent({name, email, zealId});
    await user.save();
    return res.status(200).json({
        status:"success",
        data:true,
        message:'proceed'
    })
}

export const EventWinner = async (req, res) => {
    console.log(req.body); 
    const { name, email, phone, zealId, year, branch } = req.body
    if (!email || !name || !zealId || !phone) {
        return res.status(400).json({ error: "please add all the fields",
        data:false
    });
    }
    const user = new ElectroWinner({ name, email, phone, zealId, year, branch });
    await user.save();
    return res.status(200).json({
        status:"success",
        data:true
    })
}

export const addAnswer = async (req, res) => {
    console.log(req.body); 
    const {question, answer, link } = req.body
    const user = new ElectroAnswer({ question, answer, link });
    await user.save();
    return res.status(200).json({
        status:"success",
        data:user,
    })
}

export const checkAnswer = async (req,res) =>{
    const { answer, id } = req.body;
    var question = await ElectroAnswer.findById(id);
    if(question.answer === answer){
        return res.status(200).json({ message:"correct answer", data:question.link, success:true });
    }
    else{
        console.log("wrong");
        return res.status(400).json({ message:"wrong answer", success:false });
    }
}