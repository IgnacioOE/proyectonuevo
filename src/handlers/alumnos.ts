import { Request, Response, NextFunction } from 'express';
import StuController from '../controllers/alumnos';

const stuController = new StuController();

class StuHandler {

    async getStudent(request: Request, response: Response, next: NextFunction) {
        try {
            const students = await stuController.getStudents();
            response.json(students)
        } catch (error) {
            next(error)
        }
    }
}
export default StuHandler;