import React from 'react';
import { 
  CreditCard, 
  Receipt, 
  MessageSquare, 
  Building,
  PiggyBank,
  LineChart,
  Bell,
  Smartphone,
  Sparkles
} from 'lucide-react';

// Assuming these are your existing components
import { Footer, Navbar } from '../../components';

const HomePage = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Loyalty Cards Management",
      description: "Track all your rewards in one place. Never miss points or cashback opportunities.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Receipt className="h-8 w-8" />,
      title: "Smart Bill Manager",
      description: "Automated bill tracking and reminders. Stay on top of your payments.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "AI Financial Assistant",
      description: "Get personalized financial advice and insights powered by advanced AI.",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Plaid Integration",
      description: "Connect your accounts securely with Plaid for automatic transaction syncing.",
      gradient: "from-orange-600 to-yellow-600"
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Savings Goals",
      description: "Set and track your savings goals with visual progress indicators.",
      gradient: "from-rose-600 to-red-600"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Visualize your spending patterns with intuitive charts and insights.",
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Smart Notifications",
      description: "Customizable alerts for unusual spending and upcoming bills.",
      gradient: "from-fuchsia-600 to-purple-600"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First Design",
      description: "Access your finances on the go with our beautifully designed, mobile-first app.",
      gradient: "from-violet-600 to-indigo-600"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Intuitive and Easy",
      description: "We prioritize a simple and easy-to-navigate workflow for managing your budget.",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#13131A] overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-violet-600/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/30 to-transparent rounded-full blur-3xl" />
      
      <Navbar />

      {/* New Feature Banner */}
      

      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to take control of your finances in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3 text-white/90">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300">
            <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">50K+</div>
            <div className="text-white/90 text-lg font-medium">Active Users</div>
            <div className="text-white/60 text-sm mt-2">Growing community</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300">
            <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">$2M+</div>
            <div className="text-white/90 text-lg font-medium">Money Managed</div>
            <div className="text-white/60 text-sm mt-2">Trusted finances</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300">
            <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">4.9</div>
            <div className="text-white/90 text-lg font-medium">App Rating</div>
            <div className="text-white/60 text-sm mt-2">Highly rated</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;