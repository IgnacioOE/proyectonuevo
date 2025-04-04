import express from 'express';
import StuHandler from '../handlers/alumnos';

const router = express();
const stuHandler = new StuHandler();

router.get('/',stuHandler.getStudent);

export default router;