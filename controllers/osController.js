
var os = require("os");

exports.os_exemple= function(req, res) {
res.json({
  	hostname: os.hostname(),
  	type: os.type(),
  	platform: os.platform(),
  })
};


exports.os_list= function(req, res) {
res.json(
  	os.cpus()
  )
};

exports.os_get= function(req, res) {
	res.json(
		  os.cpus()[req.params.id]
	  )
	};
