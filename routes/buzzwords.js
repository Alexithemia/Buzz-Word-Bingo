const express = require('express');
const router = express.Router();
const buzzwords = require('../buzzwordStorage');

router.route('/')
  .get(function (req, res) {
    res.json(buzzwords.read());
  })
  .post(function (req, res) {
    if (buzzwords.add(req.body)) {
      res.json({ "success": true });
    } else {
      res.json({ "success": false });
    };
  })
  .put(function (req, res) {
    if (buzzwords.update(req.body)) {
      res.json({ "success": true });
    } else {
      res.json({ "success": false });
    };
  })
  .delete(function (req, res) {
    if (buzzwords.deleteWord(req.body)) {
      res.json({ "success": true });
    } else {
      res.json({ "success": false });
    };
  });

module.exports = router;