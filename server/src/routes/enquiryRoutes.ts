import { Router } from 'express';
import { createEnquiry, getHealthStatus } from '../controllers/enquiryController';
import { validateEnquiry } from '../middleware/validateEnquiry';

const router = Router();

// Route for submitting form enquiries
router.post('/enquiry', validateEnquiry, createEnquiry);

// Route for deployment and database health-checks
router.get('/health', getHealthStatus);

export default router;
