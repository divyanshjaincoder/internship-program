import React, { useRef, useState } from 'react';
import { X, User, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { toast } from "@/components/ui/sonner";
import confetti from "canvas-confetti";

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnquiryForm = ({ isOpen, onClose }: EnquiryFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showBlurOverlay, setShowBlurOverlay] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_wudy02v',
        'template_m04bem9',
        formRef.current,
        'jU7-APtyJwgUNbupr'
      )
      .then(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });

        setShowBlurOverlay(true); // Show overlay
        setTimeout(() => setShowBlurOverlay(false), 4000); // Hide overlay

        toast.success("🎉 Enrollment Successful", {
          description: "ID and Password will be shared with you shortly!",
          duration: 5000,
          position: "top-center",
          icon: "🚀",
          className:
            "text-white bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-5 rounded-2xl shadow-xl text-lg font-semibold border border-white/20 backdrop-blur-sm",
        });

        formRef.current?.reset();
        onClose();
      })
      .catch((error) => {
        toast.error("Failed to send enquiry.", {
          description: "Please try again later or check your connection.",
          duration: 5000,
          icon: "⚠️",
          className: "border border-red-500 bg-white text-red-900 font-medium",
        });

        console.error("EmailJS error:", error);
      });
  };

  return (
    <>
  {showBlurOverlay && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
    <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md text-center border border-gray-300 animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-2">
        🎉 Enrollment Successful!
      </h2>
      <p className="text-white text-base leading-relaxed">
        Thanks for the Enrollment. <br />
        ID and Password will be shared with you for the Dashboard shortly!
      </p>
    </div>
  </div>
)}



      <div className="fixed inset-0 bg-black backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-scale-in">
          <div className="relative gradient-theme text-white p-6 rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-2">Enrollment Form</h2>
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
                placeholder="Tell us about your Education background"
                className="border-gray-300 focus:border-[#42AAC5] focus:ring-[#42AAC5]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#42AAC5] hover:bg-[#2D98B8] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Submit Form
              </div>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
