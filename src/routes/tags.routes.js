const { Router } = require('express')

const TagsController = require('../controllers/tagsController')
const tagsController = new TagsController()

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const TagsRoutes = new Router()

TagsRoutes.get('/:note_id', ensureAuthenticated, tagsController.index)

module.exports = TagsRoutes
