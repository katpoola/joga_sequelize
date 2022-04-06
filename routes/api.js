const express = require('express');
const router = express.Router();
const apiArticleController = require('../controllers/api/article');
const apiAuthorController = require('../controllers/api/author');
const apiTagController = require('../controllers/api/tags');

router.get('/article', apiArticleController.getArticle);
router.get('/author', apiAuthorController. getAuthor);
router.get('/tag', apiTagController.getTags);

// export router
module.exports = router;