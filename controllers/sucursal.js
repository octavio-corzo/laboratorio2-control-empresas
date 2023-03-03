const { request, response } = require('express');
const Sucursal = require('../models/sucursal')


// const getProductos = async (req = request, res = response) => {

//     //condiciones del get
//     const query = { estado: true };

//     const listaProducto = await Promise.all([
//         Producto.countDocuments(query),
//         Producto.find(query)
//             //.populate('usuario', 'nombre')
//             .populate('usuario', 'correo')
//             .populate('categoria', 'nombre')
//     ]);

//     res.json({
//         msg: 'get Api - Controlador Usuario',
//         listaProducto
//     });

// }

// const getProductoPorID = async (req = request, res = response) => {

//     const { id } = req.params;
//     const productoById = await Producto.findById(id)
//         //.populate('usuario', 'nombre')
//         .populate('usuario', 'correo')
//         .populate('categoria', 'nombre')


//     res.status(201).json(productoById);

// }

const postSucursal = async (req = request, res = response) => {

    const { estado, empresa, ...body } = req.body;

    const sucursalDB = await Sucursal.findOne({ nombre: body.nombre });

    //validacion si el producto ya existe
    if ( sucursalDB ) {
        return res.status(400).json({
            msg: `La sucursal ${ sucursalDB.nombre }, ya existe en la DB`
        });
    }

    //Generar la data a guardar
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        empresa: req.empresa._id
    }

    const sucursal = await Sucursal( data );

    //Guardar en DB
    await sucursal.save();

    res.status(201).json( sucursal );
   
}

const putProducto = async (req = request, res = response) => {
    const { id } = req.params;

    const { estado, usuario, ...restoData } = req.body;

    if (restoData.nombre) {
        restoData.nombre = restoData.nombre.toUpperCase();
        restoData.usuario = req.usuario._id;
    }

    const productoActualizado = await Producto.findByIdAndUpdate(id, restoData, ({ new: true }));

    res.status(201).json({
        msg: 'Put Controller Producto',
        productoActualizado
    });
}

const deleteProducto = async (req = request, res = response) => {
    
    const {id} = req.params;
    const productoEliminado = await Producto.findByIdAndUpdate(id, {estado: false}, {new: true});
    
    res.json({
        msg: "DELETE",
        productoEliminado
    });
}




module.exports = {
    postSucursal,
    putProducto,
    deleteProducto
}