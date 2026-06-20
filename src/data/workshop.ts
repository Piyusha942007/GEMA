import type { WorkshopData } from '../types/workshop.types';

export const WORKSHOP_DATA: WorkshopData = {
  title: 'AI & Robotics Summer Workshop',
  tagline: 'Where curious kids turn ideas into intelligent machines.',
  description:
    'A hands-on, beginner-friendly online program where children aged 8–14 build real robots, write their first lines of code, and create simple AI models — guided live by mentors, one project at a time.',
  ageGroup: '8–14 Years',
  duration: '4 Weeks',
  mode: 'Online (Live)',
  fee: '₹2,999',
  startDate: '15 July 2026',
  seats: 'Limited Seats',
  details: [
    {
      id: 'age',
      label: 'Age Group',
      value: '8–14 Years',
      iconName: 'Users',
    },
    {
      id: 'duration',
      label: 'Duration',
      value: '4 Weeks',
      iconName: 'Calendar',
    },
    {
      id: 'mode',
      label: 'Learning Mode',
      value: 'Online (Live sessions)',
      iconName: 'Globe',
    },
    {
      id: 'fee',
      label: 'Course Fee',
      value: '₹2,999 (Inc. taxes)',
      iconName: 'IndianRupee',
    },
    {
      id: 'start',
      label: 'Start Date',
      value: '15 July 2026',
      iconName: 'CalendarCheck',
    },
  ],
  trustBadges: [
    { id: 'badge-1', text: 'Beginner Friendly' },
    { id: 'badge-2', text: 'Live Interactive Sessions' },
    { id: 'badge-3', text: 'Certificate Included' },
    { id: 'badge-4', text: 'Hands-on Projects' },
  ],
  learningOutcomes: [
    {
      id: 'outcome-1',
      text: 'Assemble their very first working robot from scratch using safe, kid-friendly hardware.',
    },
    {
      id: 'outcome-2',
      text: 'Write real code to make their creations move, flash, and respond to the world around them.',
    },
    {
      id: 'outcome-3',
      text: 'Discover the magic of AI by training a simple machine learning model themselves.',
    },
    {
      id: 'outcome-4',
      text: 'Learn how to break down big problems into smaller, solvable steps (computational thinking).',
    },
    {
      id: 'outcome-5',
      text: 'Build the confidence to stand up and present their work to an audience on Demo Day.',
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'Does my child need any prior coding experience?',
      answer: 'No prior experience is required — the program starts from the basics and builds up gradually.',
    },
    {
      id: 'faq-2',
      question: 'What equipment or kit is needed for the robotics sessions?',
      answer: 'A laptop/desktop with internet access is required; a starter robotics kit (list provided after enrollment) is recommended but optional for the first two weeks.',
    },
    {
      id: 'faq-3',
      question: 'Will my child receive a certificate?',
      answer: 'Yes, a certificate of completion is issued to every child who finishes the capstone project.',
    },
    {
      id: 'faq-4',
      question: 'What happens if we miss a live session?',
      answer: 'Every session is recorded and shared within 24 hours, so missing a class doesn\'t mean falling behind.',
    },
    {
      id: 'faq-5',
      question: 'Is this suitable for a child who has never used a computer for coding before?',
      answer: 'Yes — the first week is fully foundational and paced for absolute beginners.',
    },
  ],
};
