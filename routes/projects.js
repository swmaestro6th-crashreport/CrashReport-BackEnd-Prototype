var express = require('express'),
    Project = db.model('Project'),
    crypto = require('crypto'),
    router = express.Router();

router.post('/', function(req, res) {
    if (!req.get('id')) res.json({ code : 101, message : "failed" });
    else {
      new Project({
        id: req.get('id'),
        name: req.body.name,
        appVersion: req.body.appversion,
        apiKey: crypto.randomBytes(10).toString('hex')
      }).save(function (err) {
          if (err) res.json({ code : 100, message : "unknown error" });
          res.json({ code : 200, message : "success" });
      });
    }
});

router.get('/project_id', function (req, res) {
    Project.findById(req.params.project_id, function(err, projects) {
        res.json({ code: 200, projects: projects });
    })
});

module.exports = router;
