//express
const express = require('express');
const req = require('express/lib/request');
const app = express();
const PORT = 3000; // se puede cambiar


//array
let librosBiblicos = [

    { id: 1, nombre: 'Genesis', autor: 'Moises' },
    { id: 2, nombre: 'Exodo', autor: 'Adan' },
    { id: 3, nombre: 'Juan', autor: 'Pedro' },
    { id: 4, nombre: 'Hechos', autor: 'Juan' },
    { id: 5, nombre: 'Romanos', autor: 'Pablo' },
];

//array
let Nombre = [

    { BIENVENIDO: 'BIENVENIDO' },
    { nombre: 'Gary Rodrigo Mamani', profesion: 'ESTUDIANTE' },
    { nombre: 'David Mamani Alanoca', profesion: 'ESTUDIANTE' },

];
//manejo de JSON
app.use(express.json());
//endpoint
app.get('/libros', (req, resp) => {
    resp.json(librosBiblicos);

});
//endpoint de bienvenida
app.get('/nombre', (req, resp) => {
    resp.json(Nombre);

});

//endpoint de autor
app.get('/libros/:autor', (req, resp) => {
    const autor1 = req.params.autor;
    console.log(autor1)
    const libroencontrado = librosBiblicos.find((libro) => libro.autor === autor1);
    if (libroencontrado) {
        resp.json(libroencontrado);
    } else {
        resp.status(404).json({ mensaje: 'Autor no encontrado' });
    }
});

//endpoint de autor
app.get('/cantidad', (req, resp) => {
    const libroencontrado = librosBiblicos.length;
    if (libroencontrado) {
        resp.json({ 'la cantidad de libros es :': libroencontrado });
    } else {
        resp.status(404).json({ mensaje: 'Autor no encontrado' });
    }
});

app.get('/nombre/:texto', (req, res) => {
    const textoBusqueda = req.params.texto;
    const librosEncontrados = librosBiblicos.filter((libro) => libro.nombre.includes(textoBusqueda));

    if (librosEncontrados.length > 0) {
        res.json(librosEncontrados);
    } else {
        res.status(404).json({ mensaje: 'No se encontraron libros' });
    }
});














//SERIVIDOR
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto http://localhost:" + PORT);
});