const mongoose=require("mongoose");

const groupSchema= new mongoose.Schema({
    name1: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone1: {
        type: String,
        required: true,
      },
      admNo1: {
        type: String,
        required: true,
      },

      name2: {
        type: String,
        
      },
      phone2: {
        type: String,
        
      },
      admNo2: {
        type: String,
        
      },
      name3: {
        type: String,
        
      },
      phone3: {
        type: String,
        
      },
      admNo3: {
        type: String,
        
      },
      name4: {
        type: String,
        
      },
      phone4: {
        type: String,
        
      },
      admNo4: {
        type: String,
        
      },
      name5: {
        type: String,
        
      },
      phone5: {
        type: String,
        
      },
      admNo5: {
        type: String,
        
      },



})

mongoose.model("group",groupSchema);