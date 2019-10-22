import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    response: {
      type: String,
    },
    status: {
      type: String,
    },
    request: {
      type: String,
    },
    timeTaken: {
      type: Number,
    },
    deletedAt: {
      type: Date,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);



export default mongoose.model('logs', Schema);
