import mongoose from 'mongoose'

require('./Recipient');

const TransactionSchema = new mongoose.Schema({
	recipient: {type: mongoose.Types.ObjectId, ref: 'Recipient', required: true},
    amount: {type: String},
    status: {type: Boolean, default: true},
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now},
}, { toJSON: { virtuals: true } })

export default mongoose.model<any>('Transaction', TransactionSchema, 'transactions')