import React from 'react';
import { 
  Rocket, 
  Download,
  Phone,
} from 'lucide-react';
import { Footer, Navbar } from '../../components';

// Internal Button Component
const Button = ({ children, size = "default", className = "", href, ...props }) => {
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    sm: "px-3 py-1 text-sm"
  };

  const baseClasses = `inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-violet-500 disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${className}`;

  return href ? (
    <a
      href={href}
      className={baseClasses}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ) : (
    <button
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
};

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-[#13131A] overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-violet-600/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-cyan-600/20 to-transparent rounded-full blur-3xl" />
      
      <Navbar />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-cyan-600/10 border border-white/10 mb-8">
            <Rocket className="h-4 w-4 mr-2 text-violet-400" />
            <span className="text-white/80 text-sm">Coming Early 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            SimplyBudget Beta
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
            SimplyBudget is currently going through a refresh, this brings new features and abilities to the SimplyBudget App. Join the waitlist for early access to the most intuitive personal finance app. Be among the first to experience the future of budgeting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white"
              href="https://waitforit.me/signup/4d485688"
            >
              <Download className="mr-2 h-5 w-5" />
              Join Waitlist
            </Button>
            <div className="flex items-center text-white/60">
              <Phone className="h-5 w-5 mr-2" />
              <span>Mobile apps coming soon</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DownloadPage;