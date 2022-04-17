import {RoboRegisterInd, RoboRegisterGroup} from './controllers/RoboController.js'
import {ElectroRegisterInd, ElectroRegisterGroup} from './controllers/ElectroController.js'
import {MightyRegisterInd, MightyRegisterGroup} from './controllers/MightyController.js'
import {TeslaRegisterInd, TeslaRegisterGroup} from './controllers/TeslaController.js'
import express from 'express'
const router = express.Router();

// ROBO OLYMPICS
router.post('/robo/ind', RoboRegisterInd)
router.post('/robo/group', RoboRegisterGroup)

router.post('/electro/ind', ElectroRegisterInd)
router.post('/electro/group', ElectroRegisterGroup)

router.post('/mighty/ind', MightyRegisterInd)
router.post('/mighty/group', MightyRegisterGroup)

router.post('/tesla/ind', TeslaRegisterInd)
router.post('/tesla/group', TeslaRegisterGroup)

export default router;