export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LearningOutcome {
  id: string;
  text: string;
}

export interface WorkshopDetailCard {
  id: string;
  label: string;
  value: string;
  iconName: 'Users' | 'Calendar' | 'Globe' | 'IndianRupee' | 'CalendarCheck';
}

export interface TrustBadgeItem {
  id: string;
  text: string;
}

export interface WorkshopData {
  title: string;
  tagline: string;
  description: string;
  ageGroup: string;
  duration: string;
  mode: string;
  fee: string;
  startDate: string;
  seats: string;
  learningOutcomes: LearningOutcome[];
  faqs: FAQItem[];
  details: WorkshopDetailCard[];
  trustBadges: TrustBadgeItem[];
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  childAge?: number;
  workshopTitle: string;
}

export interface EnquiryResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    email: string;
    phone: string;
    childAge?: number;
    workshopTitle: string;
    createdAt: string;
  };
  errors?: Array<{
    field: string;
    message: string;
  }>;
}
