const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'patita_amiga'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req,res)=>{
    const sqlSelect = "SELECT ani_Id,ani_Especie, ani_Nombre, ani_Raza, ani_Tamanio, ani_Edad, ani_Sexo, ani_Fecha_ingreso, ani_Descripcion, ani_Foto FROM animal;";
    db.query(sqlSelect, (error, result) => {
        if (error)
            throw error;

        console.log(result);
        res.send(result);
    });
});

app.post('/api/insert', (req, res) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const contrasenia = req.body.contrasenia;
    const correo = req.body.correo;
    const telefono = req.body.telefono;


    const sqlInsert =
        "INSERT INTO usuario (usu_Id, usu_Nombre, usu_Apellido, usu_Contrasenia, usu_Correo, usu_Telefono, usu_Foto, usu_Cant_Adopciones, usu_Formulario) VALUES (?,?,?,?,?,?,NULL,0,NULL);";
    var nusuarios, nusuariosString, idTemplate = "usu";

    function contarUsuarios(callback) {
        db.query('SELECT COUNT(*) as cantidad FROM usuario;', (error, results) => {
            if (error)
                throw error;

            console.log(results[0].cantidad);

            return callback(results[0].cantidad);
        });
    }
    contarUsuarios((result) => {
        nusuarios = result+1;

        nusuariosString = nusuarios.toString();
        for (let i = 4; i > nusuariosString.length; i--)
            idTemplate += "0";

        idTemplate += nusuarios;
        const autoId = idTemplate;


        db.query(sqlInsert, [autoId, nombre, apellido, contrasenia, correo, telefono], (error, result) => {
            if (error)
                throw error;

            console.log(result);
        });
    })
});

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});