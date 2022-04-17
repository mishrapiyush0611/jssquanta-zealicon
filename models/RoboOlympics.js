import mongoose from 'mongoose';

const RoboGroupSchema = new mongoose.Schema({
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

const RoboUserSchema = new mongoose.Schema({
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

export const RoboUser = mongoose.model("RoboUser", RoboUserSchema);
export const RoboGroup =  mongoose.model("RoboGroup", RoboGroupSchema);
