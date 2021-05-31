import { Request, Response, NextFunction } from "express"
import User from "../../models/User"
import Transaction from "../../models/Transaction"

export const newTransaction = async (req: Request, res: Response, next: NextFunction) => {
	const {recipient, amount} = req.body
	let transaction: any = new Transaction({recipient, amount})
	transaction = await transaction.save()
    return res.jsend.success(transaction)
}

export const getTransactions = async (req: Request, res: Response, next: NextFunction) => {
	let transactions = await Transaction.find()
		.populate('recipient')
	return res.status(201).send(transactions)
}