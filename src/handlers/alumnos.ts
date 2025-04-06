import { Request, Response, NextFunction } from 'express';
import StuController from '../controllers/alumnos';

const stuController = new StuController();

class StuHandler {

    async getStudent(req: Request, res: Response, next: NextFunction) {
        try {
            const studentStatus = (await stuController.getStudents()).map(alumnos => {
            let message;
            if (alumnos.calificacion >= 90 && !alumnos.adeudo){
                message = 'Te graduaste con honores';
            }
            else if (alumnos.calificacion >= 90 && alumnos.adeudo){
                message = 'Tenias honores, pero tienes un adeudo';
            }
            else if (alumnos.calificacion >= 70 && alumnos.calificacion < 90){
                message = 'Pasaste muy apenas';
            }
            else if (alumnos.calificacion < 70 && !alumnos.adeudo){
                message = 'Como no tienes adeudo, tienes derecho a un examen de recuperacion';
            }
            else if (alumnos.calificacion < 70 && alumnos.adeudo){
                message = 'Expulsado';
            }
            return {
                id: alumnos.id, 
                message
            };
            });
            res.json(studentStatus);
        } catch (error) {
            next(error)
        }
    }
}
export default StuHandler;