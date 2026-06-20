import { Request, Response } from 'express';
import Enquiry from '../models/Enquiry';
import { checkDBStatus, localEnquiries } from '../config/db';

/**
 * Handles POST /api/enquiry
 * Saves enquiry to MongoDB or falls back to in-memory array storage.
 */
export const createEnquiry = async (req: Request, res: Response) => {
  const { name, email, phone, childAge, workshopTitle } = req.body;

  try {
    const { isInMemory } = checkDBStatus();

    if (isInMemory) {
      // Graceful fallback to in-memory array
      const id = 'mem_' + Math.random().toString(36).substring(2, 11);
      const createdAt = new Date();
      const newEnquiry = {
        id,
        name,
        email,
        phone,
        childAge,
        workshopTitle,
        createdAt,
      };

      localEnquiries.push(newEnquiry);

      return res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully (Stored in-memory)',
        data: newEnquiry,
      });
    }

    // Standard database creation
    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      childAge,
      workshopTitle,
    });

    const savedEnquiry = await newEnquiry.save();

    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: {
        id: savedEnquiry._id,
        name: savedEnquiry.name,
        email: savedEnquiry.email,
        phone: savedEnquiry.phone,
        childAge: savedEnquiry.childAge,
        workshopTitle: savedEnquiry.workshopTitle,
        createdAt: savedEnquiry.createdAt,
      },
    });
  } catch (error) {
    console.error('Error in createEnquiry controller:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong, please try again',
    });
  }
};

/**
 * Handles GET /api/health
 * Returns details about server uptime and database modes.
 */
export const getHealthStatus = (req: Request, res: Response) => {
  const dbStatus = checkDBStatus();
  return res.status(200).json({
    success: true,
    status: 'healthy',
    timestamp: new Date(),
    database: {
      connected: dbStatus.connected,
      inMemoryFallbackMode: dbStatus.isInMemory,
      inMemoryRecordsCount: localEnquiries.length,
    },
  });
};
