//Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { deleteEmpresa } = require('../controllers/empresa');
const { postSucursal, deleteSucursal, getSucursalPorID } = require('../controllers/sucursal');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/mostrar', );

router.get(
    "/mostrarSucursalEmpresa", 
    validarJWT,
    validarCampos,
    getSucursalPorID,
);

router.post('/agregarSucursal', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('municipio', 'El nombre es obligatorio').not().isEmpty(),
    check('direccion', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
],postSucursal);

router.delete('/eliminarSucursal/:id', [
    validarJWT,
    validarCampos
],deleteSucursal);


module.exports = router;

