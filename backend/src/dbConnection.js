import mongoose from 'mongoose';

export default function connectDatabase() {
  try {
    mongoose.connect("mongodb://localhost:27017/share-hooks", { useNewUrlParser: true });
  } catch (error) {
    console.log('MongoDB Connection Error', error);
  }
};