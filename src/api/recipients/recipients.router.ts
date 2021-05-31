import {Router} from 'express'
import validate from '../../middlewares/validate'
import {newRecipient, getRecipientByName} from './recipients.controller'
import bodyParser from 'body-parser'

const router: Router = Router({ mergeParams : true })

router.post('/new', newRecipient)
router.get('/list/:name', getRecipientByName)

export default router