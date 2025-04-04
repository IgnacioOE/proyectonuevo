import express from 'express';
import router from './src/routes/alumnos';

const app = express();
const PORT = 3000; 

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});