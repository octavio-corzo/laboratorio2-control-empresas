const Role = require('../models/role');
const Empresa = require('../models/empresa');
const Sucursal = require('../models/sucursal');

//Este archivo maneja validaciones personalizadas

const esRoleValido = async( rol = '' ) => {

    const existeRol = await Role.findOne( { rol } );

    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la DB`);
    }

}


const emailExiste = async( correo = '' ) => {

    //Verificamos si el correo ya existe en la DB
    const existeEmail = await Empresa.findOne( { correo } );

    //Si existe (es true) lanzamos excepción
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo } ya existe y esta registrado en la DB`);
    }

}


const existeEmpresaPorId = async(id) => {

    //Verificar si el ID existe
    const existeUser = await Empresa.findById(id);

    if ( !existeUser ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}

const existeSucursalPorId = async(id) => {

    //Verificar si el ID existe
    const existeProducto = await Sucursal.findById(id);

    if ( !existeProducto ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}



module.exports = {
    esRoleValido,
    emailExiste,
    existeEmpresaPorId,
    existeSucursalPorId
}