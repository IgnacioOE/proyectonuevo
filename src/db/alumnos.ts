interface Alumno {
    id: string;
    nombre: string;
    calificacion: number;
    adeudo: boolean;
}

const alumnos: Alumno[] = [
    { id: 'A0001', nombre: 'Javier', calificacion: 93, adeudo: true },
    { id: 'A0292', nombre: 'Joaquin', calificacion: 80, adeudo: true },
    { id: 'A0283', nombre: 'Samuel', calificacion: 100, adeudo: false },
    { id: 'A0342', nombre: 'Ximena', calificacion: 84, adeudo: false },
    { id: 'A0188', nombre: 'Omar', calificacion: 50, adeudo: false },
    { id: 'A0665', nombre: 'Oscar', calificacion: 65, adeudo: true },
];

export default alumnos;