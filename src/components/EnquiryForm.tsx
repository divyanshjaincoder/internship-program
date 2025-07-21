import React, { useRef } from 'react';
import { X, User, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryForm = ({ isOpen, onClose }: EnquiryFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_wudy02v',    
      'template_m04bem9',    
      formRef.current,
      'jU7-APtyJwgUNbupr'       
    )
    .then(() => {
      alert('Thanks for the Enrollment,We will connect with you asap!!');
      formRef.current?.reset();
      onClose();
    })
    .catch((error) => {
      alert('Failed to send enquiry.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in">
        <div className="relative gradient-theme text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold mb-2">Enquiry Form</h2>
          <p className="text-white/90">Tell us about yourself and we'll get back to you!</p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="p-6 space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#42AAC5]" />
              Full Name
            </Label>
            <Input
              id="name"
              name="user_name"
              type="text"
              required
              placeholder="Enter your full name"
              className="border-gray-300 focus:border-[#42AAC5] focus:ring-[#42AAC5]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#42AAC5]" />
              Phone Number
            </Label>
            <Input
              id="phone"
              name="user_phone"
              type="tel"
              required
              placeholder="Enter your phone number"
              className="border-gray-300 focus:border-[#42AAC5] focus:ring-[#42AAC5]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#42AAC5]" />
              Email Address
            </Label>
            <Input
              id="email"
              name="user_email"
              type="email"
              required
              placeholder="Enter your email address"
              className="border-gray-300 focus:border-[#42AAC5] focus:ring-[#42AAC5]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Tell us about your background or any specific questions..."
              className="border-gray-300 focus:border-[#42AAC5] focus:ring-[#42AAC5]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#42AAC5] hover:bg-[#2D98B8] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              Submit Enquiry
            </div>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
