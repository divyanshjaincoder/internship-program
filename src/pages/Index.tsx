import React, { useState, useEffect } from 'react';
import { Award, BookOpen, Users, Calendar, MapPin, Phone, Globe, Star, CheckCircle, Clock, Trophy, Zap, Target, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryForm from '@/components/EnquiryForm';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, students: 0, days: 0 });
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const timer = setTimeout(() => {
      setCounters({ projects: 3, students: 10, days: 45 });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const openEnquiryForm = () => {
    setIsEnquiryFormOpen(true);
  };

  const closeEnquiryForm = () => {
    setIsEnquiryFormOpen(false);
  };

  const highlights = [
    {
      icon: Award,
      title: "MCA Certified",
      subtitle: "Government of India Recognition",
      color: "text-amber-500"
    },
    {
      icon: BookOpen,
      title: "Online Classes",
      subtitle: "Interactive Learning Experience",
      color: "text-blue-500"
    },
    {
      icon: Calendar,
      title: "45 Days Program",
      subtitle: "Weekends Only (Sat & Sun)",
      color: "text-green-500"
    },
    {
      icon: Target,
      title: "Real Projects",
      subtitle: "2-3 Industry-Grade Applications",
      color: "text-purple-500"
    },
    {
      icon: Trophy,
      title: "Stipend Program",
      subtitle: "Top 2 Students Rewarded",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Limited Batch",
      subtitle: "Only 10 Students per Batch",
      color: "text-indigo-500"
    }
  ];

  const features = [
    "Government-Recognized Internship Certificate",
    "Portfolio-Ready Real-World Projects",
    "Expert Mentorship from Industry Leaders",
    "Career Guidance and Placement Support",
    "Hands-on MERN Stack Training",
    "Networking with Fellow Developers"
  ];

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-white/70" />
    </div>
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-theme overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0'}`}>
            {/* Logo/Icon */}
            <div className="w-32 h-32 bg-white/20 mx-auto rounded-2xl mb-8 flex items-center justify-center backdrop-blur-sm animate-pulse-glow">
              <BookOpen className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              MCA-Certified
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-2">
                MERN Stack Internship
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Offered by <span className="font-semibold">CodingShaala</span> in association with <span className="font-semibold">Web Bolster Pvt. Ltd.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={openEnquiryForm}
                size="lg" 
                className="bg-white text-[#42AAC5] hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{counters.projects}+</div>
                <div className="text-white/80">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{counters.students}</div>
                <div className="text-white/80">Students Only</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{counters.days}</div>
                <div className="text-white/80">Days Program</div>
              </div>
            </div>
          </div>
        </div>

        <ScrollIndicator />
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Why Join This Internship?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of government recognition, industry expertise, and hands-on learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className={`card-hover border-0 shadow-lg overflow-hidden animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center gradient-accent">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process Section */}
      <section className="py-20 px-6 gradient-accent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-slideInLeft">
            <Zap className="w-16 h-16 text-[#42AAC5] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              Selection Process
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                A comprehensive pre-internship assessment will be conducted to select genuine and skilled learners with prior MERN stack knowledge.
              </p>
              <div className="inline-flex items-center bg-[#42AAC5] text-white px-6 py-3 rounded-xl font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Only Shortlisted Candidates Eligible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification & Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                Certification & Career Growth
              </h2>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#42AAC5] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#42AAC5] to-[#66C2DB] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span>Contact Number : 9630709988 , 9630547773</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5" />
                    <span>Application Portal Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slideInRight">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#42AAC5]/10 to-[#66C2DB]/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-24 h-24 text-[#42AAC5] mx-auto mb-4 animate-float" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Government Certified</h3>
                    <p className="text-gray-600">Official Recognition from MCA, Govt. of India</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-theme">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Clock className="w-16 h-16 mx-auto mb-6 animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Limited Seats Available!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Don't miss this opportunity to kickstart your MERN stack career with government certification
          </p>
          <Button 
            onClick={openEnquiryForm}
            size="lg" 
            className="bg-white text-[#42AAC5] hover:bg-gray-100 text-xl px-12 py-6 rounded-xl font-bold transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            Secure Your Spot Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CodingShaala</h3>
              <p className="text-gray-400">Empowering the next generation of developers through quality education and industry partnerships.</p>
            </div>
           
            <div>
              <h3 className="text-xl font-bold mb-4">Partner</h3>
              <p className="text-gray-400 mb-2">In Association with</p>
              <p className="text-[#42AAC5] font-semibold">Web Bolster Pvt. Ltd.</p>
               <p className="text-[#42AAC5] font-semibold">Call Us :</p>
<a href="tel:+9630709988" className="text-[#42AAC5] font-semibold underline">
  +919630709988
</a>
<br></br>
<a href="tel:+9630709988" className="text-[#42AAC5] font-semibold underline">
  +919630547773
</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2023 CodingShaala | Powered by Web Bolster Pvt. Ltd. | All Rights Reserved</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Enquiry Form Modal */}
      <EnquiryForm isOpen={isEnquiryFormOpen} onClose={closeEnquiryForm} />
    </div>
  );
};

export default Index;
