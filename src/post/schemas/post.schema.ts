import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    content: String,
    externalLink: String,
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
  },
  {
    timestamps: true,
  },
);

PostSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});
