import mongoose from 'mongoose'

const ElectroEventSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    zealId: {
        type: String,
    },
})

const ElectroAnswerSchema = new mongoose.Schema({
    question: {
        type: String,
    },
    answer: {
        type: String,
    },
    link: {
        type: String,
    },
})

const ElectroWinnerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    year:{
        type:String,
    },
    branch:{
        type:String,
    },
    phone: {
        type: String,
    },
    zealId: {
        type: String,
    },
})

export const ElectroWinner = mongoose.model("ElectroWinner", ElectroWinnerSchema);
export const ElectroEvent = mongoose.model("ElectroEvent", ElectroEventSchema);
export const ElectroAnswer = mongoose.model("ElectroAnswer", ElectroAnswerSchema);
