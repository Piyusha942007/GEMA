import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const backendEnquirySchema = z.object({
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
      message: 'Please enter a valid 10-digit Indian phone number',
    }),
  childAge: z.preprocess(
    (val) => (val === '' || val === null || val === undefined ? undefined : Number(val)),
    z.number().min(1, 'Age must be positive').max(99, 'Age must be valid').optional()
  ),
  workshopTitle: z.string().default('AI & Robotics Summer Workshop'),
});

export const validateEnquiry = (req: Request, res: Response, next: NextFunction) => {
  const result = backendEnquirySchema.safeParse(req.body);

  if (!result.success) {
    const formattedErrors = result.error.errors.map((err) => ({
      field: err.path.join('.'),
      message: err.message,
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: formattedErrors,
    });
  }

  // Store parsed and sanitised data on request body
  req.body = result.data;
  next();
};
