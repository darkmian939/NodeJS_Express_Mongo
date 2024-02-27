const mongoose = require('mongoose');

const usuarioSchemas = new mongoose.Schema({
    email: {
        type:String,
        required:true
    },
    nombre: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    estado: {
        type:Boolean,
        required:true
    },
    Image: {
        type:String,
        required:false
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);