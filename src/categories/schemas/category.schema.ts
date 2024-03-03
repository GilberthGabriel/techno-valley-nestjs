import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  },
);

CategorySchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
