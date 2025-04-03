import express from 'express';
import StuHandler from '../handlers/alumnos';

const router = express.Router();
const stuHandler = new StuHandler();

router.get('/',stuHandler.getStudent);