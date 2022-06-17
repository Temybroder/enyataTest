const express = require('express');
const router = express.Router();

const validationHandler = require('../middlewares/validator');
const {createUser, readUser, updateUser, deleteUser} = require('../controllers/userController');

// INDEX ROUTE
router.get('/', (req, res) => {
    res.status(200).json('Enyata test index route')
});

// READ USER ROUTE
router.get('/read_user', validationHandler, readUser);

// CREATE USER ROUTE
router.post('/create_user', validationHandler, createUser);

// UPDATE USER ROUTE
router.put('/update_user', updateUser);

// DELETE USER ROUTE
router.delete('/delete_user', deleteUser);

module.exports = router;