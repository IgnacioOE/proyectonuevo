class StuController {
    async getStudents() {
        return [
            { id: 'A0001', name: 'Javier', grade: 93, adeudo: true },
            { id: 'A0292', name: 'Joaquin', grade: 80, adeudo: true },
            { id: 'A0283', name: 'Samuel', grade: 100, adeudo: false },
            { id: 'A0342', name: 'Ximena', grade: 84, adeudo: false },
            { id: 'A0188', name: 'Omar', grade: 50, adeudo: false },
            { id: 'A0665', name: 'Oscar', grade: 65, adeudo: true },
        ]
    }
}

export default StuController;