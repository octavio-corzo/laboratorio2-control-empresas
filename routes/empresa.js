//Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { postEmpresa, putEmpresa, getEmpresas } = require('../controllers/empresa');

const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/mostrar', getEmpresas);

router.post('/agregarEmpresa', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
] , postEmpresa);

router.put('/editarEmpresa', [
    validarJWT,

    validarCampos
] , putEmpresa);


module.exports = router;

