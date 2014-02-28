'use strict';


var phantom = require('phantom');


phantom.create(function (ph) {
	ph.createPage(function (page) {
		page.setContent("<html><head><title>Blah</title></head><body><h1>Blah</h1></body></html>");
		page.paperSize = {
			format: 'Letter'
		};
		page.viewportSize = { width: 480, height: 800 };
		page.render('custom.pdf', function () {
			console.log('Page Rendered');
			ph.exit();
		});
	});
});