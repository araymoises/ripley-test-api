import { Request, Response, NextFunction } from "express"
import AccountType from "../../models/AccountType"

export const newAccountType = async (req: Request, res: Response, next: NextFunction) => {
	let accountType: any = new AccountType({name: 'Moises Aray', email: 'araymoises55@gmail.com', password: '123456789'})
	accountType = await accountType.save()
    return res.jsend.success(accountType)
}

export const getAccountTypes = async (req: Request, res: Response, next: NextFunction) => {
	let accountTypes = await AccountType.find()
	return res.status(201).send(accountTypes)
}