import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  childAge?: number;
  workshopTitle: string;
  createdAt: Date;
}

const EnquirySchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Parent name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  childAge: {
    type: Number,
    required: false,
  },
  workshopTitle: {
    type: String,
    required: [true, 'Workshop title is required'],
    default: 'AI & Robotics Summer Workshop',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IEnquiry>('Enquiry', EnquirySchema);
