import express from 'express'
const router = express.Router();
import {RoboRegisterInd, RoboRegisterGroup} from './controllers/RoboController.js'
import {MightyRegisterInd, MightyRegisterGroup} from './controllers/MightyController.js'
import {TeslaRegisterInd, TeslaRegisterGroup} from './controllers/TeslaController.js'
import {EventRegister, EventWinner, checkAnswer, addAnswer} from './controllers/ElectroEventController.js'

// ROBO OLYMPICS
router.post('/robo/ind', RoboRegisterInd)
router.post('/robo/group', RoboRegisterGroup)

router.post('/electro/register', EventRegister)
router.post('/electro/winner', EventWinner)
router.post('/electro/check', checkAnswer)
router.post('/electro/add', addAnswer)

router.post('/mighty/ind', MightyRegisterInd)
router.post('/mighty/group', MightyRegisterGroup)

router.post('/tesla/ind', TeslaRegisterInd)
router.post('/tesla/group', TeslaRegisterGroup)

export default router;