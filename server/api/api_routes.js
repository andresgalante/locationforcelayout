'use strict';

var userController = require('./user/user_controllers.js')
  , scanController = require('./scan/scan_controllers.js')
  , locationController = require('./location/location_controllers.js')
  , supportController = require('./support/support_controller.js')
  ;

module.exports = exports = function (router) {
  router.route('/users').get(userController.getAll);
  router.route('/user/:id').get(userController.getUser);

  router.route('/scan/:id').get(scanController.getScan);
  router.route('/scans/:beaconId').get(scanController.getScans);
  router.route('/scans/:beaconId/limit/:limit').get(scanController.getScans);

  router.route('/locations').get(locationController.getAll);
  router.route('/location/:id').get(locationController.getLocation);

  router.route('/support').post(supportController.receiveFeedback);
}
