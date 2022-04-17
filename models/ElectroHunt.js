import mongoose from 'mongoose'

const ElectroGroupSchema = new mongoose.Schema({
player1:{
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
    zealId: {
        type: String,
        required: true,
    },
},
    player2:{
        name: {
            type: String,
          },
          zealId: {
            type: String,
          },
    },
    player3:{
        name: {
            type: String,
          },
          zealId: {
            type: String,
          },
    },
    player4:{
        name: {
            type: String,
          },
          zealId: {
            type: String,
          },
    },
    player5:{
        name: {
            type: String,
          },
          zealId: {
            type: String,
          },
    },
})

const ElectroUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    zealId: {
        type: String,
        required: true,
    },
    });

export const ElectroUser = mongoose.model("ElectroUser", ElectroUserSchema);
export const ElectroGroup = mongoose.model("ElectroGroup", ElectroGroupSchema);