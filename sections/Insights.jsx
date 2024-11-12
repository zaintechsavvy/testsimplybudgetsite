// Suggested code may be subject to a license. Learn more: ~LicenseLog:1708502262.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4109259066.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3670234775.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1243384520.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:573856002.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3012131914.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1017887578.
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Gamepad2,
  Wand2,
  NotebookPen,
  HandCoins,
  Users,
  Trophy,
  Crown
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Budgeting",
    description: "SimplyBudget uses smart algorithms to help you make informed financial choices tailored to your spending habits.",
    gradient: "from-green-600 to-blue-600"
  },
  {
    icon: <NotebookPen className="h-8 w-8" />,
    title: "Personalized Financial Planning",
    description: "Set and track your unique financial goals with SimplyBudget’s customizable budgeting tools.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <HandCoins className="h-8 w-8" />,
    title: "Effortless Money Management",
    description: "Our intuitive design makes budgeting simple and stress-free, keeping you in control of your finances.",
    gradient: "from-indigo-600 to-purple-600"
  }
];

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2511826459.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4033145377.
      <div className="flex justify-center">
        <a href="/second" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View All Features?</a>
      </div>


const stats = [
  {
    value: "2M+",
    label: "Active Players",
    description: "Global Community"
  },
  {
    value: "98%",
    label: "Player Rating",
    description: "Highly Acclaimed"
  },
  {
    value: "150+",
    label: "Unique Features",
    description: "Constant Updates"
  }
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: index * 0.2
        }
      }
    }}
    className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
  >
    <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <div className="text-white">
        {feature.icon}
      </div>
    </div>
    <h3 className="text-xl font-medium mb-3 text-white/90">{feature.title}</h3>
    <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
  </motion.div>
);

const StatCard = ({ stat, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: index * 0.2 + 0.5
        }
      }
    }}
    className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-sm hover:bg-white/5 transition-colors duration-300"
  >
    <div className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
      {stat.value}
    </div>
    <div className="text-white/90 text-lg font-medium">{stat.label}</div>
    <div className="text-white/60 text-sm mt-2">{stat.description}</div>
  </motion.div>
);

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const Insights = () => (
  <section className="py-24 px-6 relative z-10 overflow-hidden">
    {/* Gradient Backgrounds */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-violet-600/30 to-transparent rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/30 to-transparent rounded-full blur-3xl" />
    

    
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center mb-16">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
          className="text-sm text-white font-bold tracking-[4px] uppercase mb-2"
        >
          Features
        </motion.p>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 }
          }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Our Game Changing Features
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <FeatureCard 
            key={feature.title}
            feature={feature}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <a href="/second" className="text-white bg-gradient-to-r from-emerald-500 to-teal-700 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View All Features?</a>
        <a href="/faq" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Still Have Questions?</a>
      </div>

      
    </motion.div>
  </section>
);

export default Insights;