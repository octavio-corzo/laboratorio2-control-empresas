//Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { postSucursal } = require('../controllers/sucursal');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/mostrar', );

router.post('/agregarSucursal', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
],postSucursal);


module.exports = router;

