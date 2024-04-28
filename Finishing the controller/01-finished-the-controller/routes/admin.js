const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const contactsController=require('../controllers/contact_us');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

router.get('/contactus', contactsController.getContact);

router.post('/contactus',contactsController.postContact);

router.get('/success',contactsController.success);

module.exports = router;
