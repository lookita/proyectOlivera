// backend/routes/usuarioRutas.js

const express = require('express');
const router = express.Router(); // <- correctamente escrito

// Definir rutas
router.get('/', (req, res) => {
  res.send('Ruta usuarios funcionando');
});

module.exports = router;
