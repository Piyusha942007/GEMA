import { z } from 'zod';

// Zod validation schema for workshop enquiry
export const enquirySchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be less than 50 characters' })
    .trim(),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' })
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .min(1, { message: 'Phone number is required' })
    .regex(/^(?:\+91|91)?[6-9]\d{9}$/, {
      message: 'Please enter a valid 10-digit Indian phone number (optionally starting with +91)',
    }),
  childAge: z.string().optional(),
  workshopTitle: z.string(),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
