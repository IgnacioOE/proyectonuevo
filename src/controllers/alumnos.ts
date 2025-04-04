import alumnos from '../db/alumnos';

class StuController {
    async getStudents() {
        return alumnos;
    }
}

export default StuController;