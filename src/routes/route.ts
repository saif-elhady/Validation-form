import express from 'express';
import controller from '../controllers/controller';
import { urlencoded } from "body-parser";


const router = express.Router();

router.get('/', controller.formIndex);
router.post('/', urlencoded, controller.postRegister);
export default router;