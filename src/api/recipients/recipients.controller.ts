import { Request, Response, NextFunction } from "express"
import Recipient from "../../models/Recipient"

export const newRecipient = async (req: Request, res: Response, next: NextFunction) => {
	const {name, rut, email, phone, bank, accountType, accountNumber} = req.body;
	let recipient: any = new Recipient({name, rut, email, phone, bank, accountType, accountNumber})
	recipient = await recipient.save()
    return res.jsend.success(recipient)
}

export const getRecipientByName = async (req: Request, res: Response, next: NextFunction) => {
	const {name} = req.params
	let recipients = await Recipient.find({name: {$regex: '.*' + name + '.*', $options: 'i'} })
	return res.status(201).send(recipients)
}