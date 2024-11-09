'use client';
import React from 'react';
import { Footer, Navbar } from '../../components';

// SVG Components
const CheckIcon = () => (
  <svg 
    className="w-5 h-5 text-blue-500 flex-shrink-0" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 13l4 4L19 7" 
    />
  </svg>
);

const MailIcon = () => (
  <svg 
    className="w-12 h-12 text-blue-500" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const SecurityIcon = () => (
  <svg 
    className="w-5 h-5 text-blue-500" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
    />
  </svg>
);

const CardIcon = () => (
  <svg 
    className="w-5 h-5 text-blue-500" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
    />
  </svg>
);

const PricingTier = ({ title, price, features, isPopular, buttonText, onClick }) => (
  <div className="flex flex-col p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-gray-200/20 hover:border-blue-500/50 transition-all text-white">
    {isPopular && (
      <div className="px-3 py-1 text-sm text-blue-600 bg-blue-100 rounded-full w-fit mb-4">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <div className="mt-4 mb-6">
      <span className="text-4xl font-bold">${price}</span>
      {price !== 'Contact Sales' && <span className="text-gray-400 ml-2">/month</span>}
    </div>
    <ul className="flex-1 space-y-4 mb-6 text-gray-300">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <CheckIcon />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button
      onClick={onClick}
      className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
    >
      {buttonText}
    </button>
  </div>
);

const MainPrice = () => {
  const tiers = [
    {
      title: "Free",
      price: "0",
      features: [
        "Up to 70 transactions monthly",
        "Basic budgeting tools",
        "Expense tracking",
        "Mobile app access",
        "Email support"
      ],
      buttonText: "Get Started",
      onClick: () => window.location.href = "/signup"
    },
    {
      title: "Plus",
      price: "3.49",
      features: [
        "Up to 250 transactions monthly",
        "Advanced budgeting tools",
        "Custom categories",
        "Priority support",
        "Data export"
      ],
      isPopular: true,
      buttonText: "Start Free Trial",
      onClick: () => window.location.href = "/signup"
    },
    {
      title: "Pro",
      price: "8.98",
      features: [
        "Unlimited transactions",
        "AI-powered insights",
        "Plaid integration",
        "Advanced analytics",
        "24/7 priority support"
      ],
      buttonText: "Start Free Trial",
      onClick: () => window.location.href = "/signup"
    },
    {
      title: "Enterprise",
      price: "Contact Sales",
      features: [
        "Custom transaction limits",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantees",
        "Training & onboarding"
      ],
      buttonText: "Contact Sales",
      onClick: () => window.location.href = `mailto:zain@simplybudget.ca`
    }
  ];

  return (
    <section className="py-20 px-4 min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-white font-bold text-lg mb-4">| Pricing Plans</p>
          <h2 className="text-4xl font-bold text-white mb-4">Choose the plan that's right for you</h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Special pricing available for students and educators. We believe in making financial management accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/20 text-white">
          <div className="flex flex-col items-center text-center">
            <MailIcon />
            <h3 className="text-2xl font-bold mb-4">Can't afford a subscription?</h3>
            <p className="text-gray-400 mb-6">
              We're offering free subscriptions for those who can't afford it. Send us an email and we'll help you get started with SimplyBudget Plus, on us.
            </p>
            <button
              onClick={() => window.location.href = `mailto:zain@simplybudget.ca?subject=Subscription Assistance Request`}
              className="py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16 text-white">
          <div className="flex items-center gap-2">
            <CardIcon />
            <span>Secure payments</span>
          </div>
          <div className="flex items-center gap-2">
            <SecurityIcon />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <SecurityIcon />
            <span>Data protection</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <MainPrice />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default PricingPage;