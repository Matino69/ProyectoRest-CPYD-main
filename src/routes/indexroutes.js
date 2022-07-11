const { Router } = requiere('express');
const router = Router();
const middleware = require('../middleware/auth');
const express = require('express');
const app = express();

//auth routes

const {
    login,
    result,
    getJWT,
    saveToken,
} = require('../controllers/globalControllers');

//router.get('/login', login);
//router.get('/result', result);
//router.get('/getjwt', getJWT);
//router.post('/savetoken', saveToken);
//module.exports = router;

//classroomm routes

const {
    getIn,
    getOut,
    attendances,
} = require('../controllers/globalControllers');

//router.post('/getin', auth, getIn);
//router.post('/getout', auth, getOut);
//router.get('/attendances', auth, attendances);

//module.exports = router;

const {loginClient,obtenerAsistencias} = require('../controllers/globalController');

router.get('/grupo-F/login', loginClient);
router.get('/grupo-F/asistencias',middleware.checkToken, obtenerAsistencias);

app.use('/', router);

module.exports = app;