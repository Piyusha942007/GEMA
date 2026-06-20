import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, AlertCircle, PhoneCall, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { enquirySchema } from '../../lib/validation';
import type { EnquiryFormValues } from '../../lib/validation';
import { postEnquiry } from '../../lib/api';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';

export const RegistrationForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      childAge: '',
      workshopTitle: 'AI & Robotics Summer Workshop',
    },
  });

  // Monitor visibility of the form section to toggle the sticky bar on mobile
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide sticky bar when form is visible, show when it's not visible
        setShowStickyBar(!entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleScrollToForm = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      const firstInput = document.getElementById('name');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 800);
      }
    }
  };

  const onSubmit = async (values: EnquiryFormValues) => {
    setServerError(null);
    
    // Explicit format matching for API
    const response = await postEnquiry({
      name: values.name,
      email: values.email,
      phone: values.phone,
      childAge: values.childAge ? Number(values.childAge) : undefined,
      workshopTitle: values.workshopTitle,
    });

    if (response.success) {
      setIsSuccess(true);
      toast.success('Enquiry submitted successfully!', {
        description: 'Our team will contact you shortly.',
      });
      reset();
    } else {
      const errorMsg = response.message || 'Validation failed. Please verify your details.';
      setServerError(errorMsg);
      toast.error('Submission failed', {
        description: errorMsg,
      });
    }
  };

  return (
    <>
      <section
        id="enroll-form"
        ref={sectionRef}
        className="py-20 md:py-24 bg-white scroll-mt-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Context/Urgency text side */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 px-3 py-1 bg-brand-50 rounded-full border border-brand-100/60 mb-4">
                Secure Your Spot
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-6 leading-tight">
                Request Program Details & Get Free Consultation
              </h2>
              <p className="text-navy-600 text-base md:text-lg mb-8 leading-relaxed">
                Fill out the quick form to receive the detailed syllabus, robotics kit guide, and scheduled slot choices. A student mentor will call you within 24 hours to answer your queries and verify eligibility.
              </p>

              <div className="flex flex-col gap-5 w-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100/80 border border-orange-200/50 flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-900 text-base">Personal Callback</h4>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      Discuss curriculum options and scheduling details directly with our lead mentors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-accent-violet-light/50 border border-accent-violet/15 flex items-center justify-center text-accent-violet shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-900 text-base">Custom Kit Selection</h4>
                    <p className="text-navy-500 text-sm leading-relaxed">
                      Learn about our recommended micro-controller starter hardware packages based on your child's age.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form card side */}
            <div className="lg:col-span-6">
              <Card hoverLift={false} className="max-w-xl mx-auto relative overflow-hidden">
                {/* Removed gradient top border */}

                {isSuccess ? (
                  <div className="text-center py-10 px-4 flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center text-green-600 mb-6 shadow-md animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-navy-950 mb-3">
                      Enquiry Received!
                    </h3>
                    <p className="text-navy-600 text-base leading-relaxed mb-8 max-w-sm">
                      Thank you! Your information has been recorded. One of our course mentors will connect with you via email or phone call within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSuccess(false)}
                      className="w-full sm:w-auto"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="mb-2">
                      <h3 className="font-display font-bold text-xl md:text-2xl text-navy-950 mb-1">
                        Apply Now
                      </h3>
                      <p className="text-sm text-navy-500">
                        Please enter your details below. Fields marked * are required.
                      </p>
                    </div>

                    {serverError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 text-red-600">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold leading-relaxed">{serverError}</span>
                      </div>
                    )}

                    <Input
                      id="name"
                      label="Parent Name"
                      placeholder="e.g. Rahul Sharma"
                      required
                      error={errors.name?.message}
                      disabled={isSubmitting}
                      {...register('name')}
                    />

                    <Input
                      id="email"
                      label="Email Address"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      required
                      error={errors.email?.message}
                      disabled={isSubmitting}
                      {...register('email')}
                    />

                    <Input
                      id="phone"
                      label="Phone Number"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      required
                      error={errors.phone?.message}
                      disabled={isSubmitting}
                      {...register('phone')}
                    />

                    <Input
                      id="childAge"
                      label="Child's Age (Optional)"
                      type="number"
                      placeholder="e.g. 10"
                      error={errors.childAge?.message}
                      disabled={isSubmitting}
                      {...register('childAge')}
                    />

                    <input type="hidden" {...register('workshopTitle')} />

                    <button
                      type="submit"
                      className="w-full mt-4 h-14 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-colors flex items-center justify-center disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending Enquiry...' : 'Request Details & Callback'}
                    </button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA Bar */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] flex items-center justify-between gap-4 md:hidden">
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
              Limited Seats!
            </span>
            <span className="text-xs font-bold text-navy-800">
              Live Workshop • ₹2,999
            </span>
          </div>
          <button
            onClick={handleScrollToForm}
            className="flex-1 max-w-[180px] h-11 text-xs bg-purple-500 text-white font-bold rounded-full hover:bg-purple-600 transition-colors"
          >
            Enroll Now
          </button>
        </div>
      )}
    </>
  );
};
export default RegistrationForm;
