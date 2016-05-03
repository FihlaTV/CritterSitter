let express = require('express');
let router = express.Router();
let path = require('path');

//catch-all to let bookshelf take care of everything
//from / on.
let bookshelfApi=require('bookshelf-api')({
	path: path.join(_final-project, '..','models')
});


router.use('/', bookshelfApi);

module.exports = router;
