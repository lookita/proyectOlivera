// backend/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarioRutas'));
app.use('/api/proyectos', require('./routes/proyectoRutas'));
app.use('/api/categorias', require('./routes/categRutas'));
app.use('/api/comentarios', require('./routes/comentarioRutas'));
app.use('/api/etiquetas', require('./routes/etiquetaRutas'));
app.use('/api/multimedia', require('./routes/multimediaRutas'));
app.use('/api/notificaciones', require('./routes/notifiRutas'));
app.use('/api/portafolios', require('./routes/portafolioRutas'));
app.use('/api/reportes', require('./routes/reportesRutas'));
app.use('/api/seguimientos-usuarios', require('./routes/seguimiento_usuarioRutas'));
app.use('/api/seguimientos', require('./routes/seguimientoRutas'));
app.use('/api/valoraciones', require('./routes/valoracionRutas'));


module.exports = app;
