import mongoose from 'mongoose'

const recipientSchema = new mongoose.Schema({
    name: {type: String},
    rut: {type: String},
    email: {type: String},
	phone: {type: String},
	bank: {type: String},
	accountType: {type: String},
	accountNumber: {type: String},
    status: {type: Boolean, default: true},
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now},
}, { toJSON: { virtuals: true } })

export default mongoose.model<any>('Recipient', recipientSchema, 'recipients')