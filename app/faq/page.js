'use client';
import { Footer, Navbar } from '../../components';
import React, { useState } from 'react';
import { 
  ChevronDown, 
  Wallet, 
  LineChart, 
  Crown, 
  Bot, 
  Clock, 
  HelpCircle 
} from 'lucide-react';


// FAQ Item Component
const FAQItem = ({ icon, question, answer, isOpen, onClick }) => (
  <div 
    onClick={onClick}
    className={`
      cursor-pointer 
      transition-all 
      duration-300 
      backdrop-blur-lg 
      rounded-2xl
      overflow-hidden
      ${isOpen ? 'bg-white/10' : 'bg-white/5 hover:bg-white/8'}
      mb-6
      border border-white/10
    `}
  >
    <div className="flex items-center gap-4 p-6">
      <div className={`
        p-2 
        rounded-xl 
        ${isOpen ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white'}
        transition-colors 
        duration-300
      `}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className={`
          text-lg 
          font-medium 
          ${isOpen ? 'text-blue-400' : 'text-white'}
          transition-colors 
          duration-300
        `}>
          {question}
        </h3>
        <div className={`
          overflow-hidden 
          transition-all 
          duration-300 
          ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}
        `}>
          <p className="text-white leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
      <ChevronDown 
        className={`
          w-5 
          h-5 
          text-white 
          transition-transform 
          duration-300
          flex-shrink-0
          ${isOpen ? 'rotate-180' : ''}
        `} 
      />
    </div>
  </div>
);

// FAQ Content Component
const FAQContent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: <Wallet className="w-5 h-5" />,
      question: "What is SimplyBudget?",
      answer: "SimplyBudget is an AI-powered personal finance management app designed to help teens track and manage their money with ease, making budgeting simple and accessible."
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      question: "How can SimplyBudget help me manage my finances?",
      answer: "SimplyBudget offers several key features to help manage your finances: automatic transaction categorization, custom budget creation, bill tracking and reminders, manual transaction logging, automatic logo reconization, and AI-powered insights that provide personalized recommendations for saving money and reaching your financial goals."
    },
    {
      icon: <Crown className="w-5 h-5" />,
      question: "What features are available for free and premium users?",
      answer: "Free users get access to basic budgeting tools, transaction tracking, and monthly spending reports. Premium users unlock additional features like custom categories, advanced analytics, investment tracking, credit score monitoring, bill negotiation services, and priority customer support. Premium also removes ads and allows unlimited accounts connection."
    },
    {
      icon: <Bot className="w-5 h-5" />,
      question: "How does AI work within SimplyBudget?",
      answer: "Our AI system analyzes your spending patterns to automatically categorize transactions, predict upcoming expenses, and identify potential savings opportunities. It learns from your habits to provide personalized financial insights and recommendations, helping you make more informed decisions about your money."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      question: "Can I try SimplyBudget for free?",
      answer: "Yes! SimplyBudget offers a free tier that includes essential budgeting and tracking features. You can sign up and start using the platform immediately without any credit card required. If you'd like to access premium features, you can try them free for 30 days before deciding to subscribe."
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      question: "How do I get support or contact SimplyBudget?",
      answer: "We offer multiple support channels: 24/7 in-app chat support, email support at zain@simplybudget.ca, and an extensive knowledge base. Premium users also get access to priority phone support. Our typical response time is under 2 hours during business hours."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r bg-white bg-clip-text text-transparent mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-lg">
          Everything you need to know about SimplyBudget
        </p>
      </div>

      <div>
        {faqs.map((faq, index) => (
          <FAQItem 
            key={index}
            {...faq}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">
          Still have questions? Our support team is here to help.
        </p>
        <button className="
          px-8 
          py-3 
          bg-gradient-to-r 
          from-blue-500 
          to-purple-500 
          rounded-full 
          text-white 
          font-medium 
          hover:opacity-90 
          transition-opacity
          shadow-lg
          shadow-blue-500/20
        ">
          Contact Support
        </button>
      </div>
    </div>
  );
};

// Main FAQ Page Component
const FAQPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <div className="min-h-screen text-white py-16">
        <FAQContent />
      </div>
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default FAQPage;