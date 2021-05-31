import {Router} from 'express'
import validate from '../../middlewares/validate'
import {getAccountTypes, newAccountType} from './accountTypes.controller'
import bodyParser from 'body-parser'

const router: Router = Router({ mergeParams : true })

router.post('/new', newAccountType)
router.get('/list', getAccountTypes)

export default router