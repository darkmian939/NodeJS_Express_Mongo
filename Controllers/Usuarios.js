const express = require('express');
const curso = require('../Models/usuario_model');
const joi = require('@hapi/joi');
const ruta = express.Router();

ruta.get('/', (req, res)=> {
    res.json('Respuesta a peticion GET de USUARIOS funcionando correctamente...');
});



module.exports = ruta;