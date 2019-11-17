var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(
    [
      {
        done: true,
        title: "Learn React"
      },
      {
        done: true,
        title: "Learn Redux"
      },
      {
        done: false,
        title: "Learn about node"
      }
    ]
  );
});

module.exports = router;
