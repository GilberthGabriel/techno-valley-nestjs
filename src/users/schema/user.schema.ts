import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
  },
  {
    timestamps: true,
  },
);

// Converte o _id para id
UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
