import {Router} from 'express'
import validate from '../../middlewares/validate'
import {getTransactions, newTransaction} from './transactions.controller'
import bodyParser from 'body-parser'

const router: Router = Router({ mergeParams : true })

router.post('/new', newTransaction)
router.get('/list', getTransactions)

export default router