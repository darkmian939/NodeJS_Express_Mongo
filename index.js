const usuarios = require('./Controllers/Usuarios');
const cursos = require('./Controllers/cursos');



const express = require('express');
const mongoose = require('mongoose');

//conexion ala base de datos mongodb
mongoose.connect('mongodb://localhost:27017/userscoursesdb', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('conectado a MongoDB...'))
.catch(err => console.log('no se pudo conectar con MongoDB..',err));



// middleware
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//end points (recursos)
app.use('/api/usuarios', usuarios);
console.log("paso por usuarios");
app.use('/api/cursos', cursos);

const port =process.env.PORT || 3007;
app.listen(port, () =>{

console.log('Api REST OK, y ejecutandose...');
})