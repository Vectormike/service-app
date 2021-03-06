const express = require('express');
const auth = require('../../middlewares/auth');
const vendorController = require('../../controllers/vendor.controller');

const router = express.Router();

router.route('/').get(auth('vendor'), vendorController.getVendorServices);
router.route('/:vendorId').patch(auth('vendor'), vendorController.updateVendor);

module.exports = router;
