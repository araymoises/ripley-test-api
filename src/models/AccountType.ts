import mongoose from 'mongoose'

const accountTypeSchema = new mongoose.Schema({
    name: {type: String},
    status: {type: Boolean, default: true},
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now},
}, { toJSON: { virtuals: true } })

export default mongoose.model<any>('AccountType', accountTypeSchema, 'accountTypes')