import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
	password: {type: String},
    status: {type: Boolean, default: true},
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now},
}, { toJSON: { virtuals: true } })

export default mongoose.model<any>('User', userSchema, 'users')