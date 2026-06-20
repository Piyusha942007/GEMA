import type { EnquiryPayload, EnquiryResponse } from '../types/workshop.types';

// Read backend API base url from environment variables
const apiBase = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = import.meta.env.DEV
  ? (apiBase || 'http://localhost:5000')
  : (apiBase && !apiBase.includes('localhost') ? apiBase : '');

/**
 * Submits an enquiry form to the backend API.
 * @param payload The validated form values
 */
export async function postEnquiry(payload: EnquiryPayload): Promise<EnquiryResponse> {
  const url = `${API_BASE_URL}/api/enquiry`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Server returned an error status',
        errors: data.errors || [],
      };
    }

    return {
      success: true,
      message: data.message || 'Enquiry submitted successfully!',
      data: data.data,
    };
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return {
      success: false,
      message: 'Network error. Please check your internet connection and try again.',
    };
  }
}
