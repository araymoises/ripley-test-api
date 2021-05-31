import { Router } from 'express'

import transactionsRouter from '../api/transactions/transactions.router'
import recipientsRouter from '../api/recipients/recipients.router'
import AccountTypesRouter from '../api/accountTypes/accountTypes.router'

export default () => {
	const router = Router()
	router.use('/transactions', transactionsRouter)
	router.use('/recipients', recipientsRouter)
	router.use('/accountTypes', AccountTypesRouter)

    return router
};
