'use client';
import React, { useState, useEffect } from 'react';
import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer 
} from 'recharts';
import { 
  Home,
  Calendar,
  DollarSign,
  Percent,
  Clock,
  RefreshCw
} from 'lucide-react';

const MortgageCalculator = () => {
  const [mortgageAmount, setMortgageAmount] = useState(500000);
  const [amortizationYears, setAmortizationYears] = useState(25);
  const [amortizationMonths, setAmortizationMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState('Monthly');
  const [interestRate, setInterestRate] = useState(4.74);
  const [interestType, setInterestType] = useState('Fixed');
  const [interestTermYears, setInterestTermYears] = useState(5);
  const [interestTermMonths, setInterestTermMonths] = useState(0);
  const [activeTab, setActiveTab] = useState('Simple');
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [chartData, setChartData] = useState([]);

  const calculateMortgage = () => {
    // Convert annual interest rate to monthly
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Total number of monthly payments
    const totalMonths = (amortizationYears * 12) + amortizationMonths;
    
    // Calculate monthly payment using mortgage payment formula
    const monthlyPayment = mortgageAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    setMonthlyPayment(monthlyPayment);

    // Calculate amortization schedule for the chart
    let balance = mortgageAmount;
    const data = [];
    
    for (let year = 0; year <= amortizationYears; year++) {
      data.push({
        year: year,
        balance: Math.round(balance),
        paid: Math.round(mortgageAmount - balance)
      });

      for (let month = 0; month < 12; month++) {
        const interestPayment = balance * monthlyInterestRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance = Math.max(0, balance - principalPayment);
      }
    }

    setChartData(data);
  };

  useEffect(() => {
    calculateMortgage();
  }, [mortgageAmount, amortizationYears, amortizationMonths, interestRate]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-[#13131A] overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-600/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-transparent rounded-full blur-3xl" />
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mortgage Payment Calculator</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Quickly See What Your Mortgage Payments Might Look Like
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('Simple')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'Simple'
                ? 'bg-blue-500 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => setActiveTab('Advanced')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'Advanced'
                ? 'bg-blue-500 text-white'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Advanced
          </button>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div>
              <label className="block text-white/90 mb-2 text-sm">Mortgage Amount</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                <input
                  type="number"
                  value={mortgageAmount}
                  onChange={(e) => setMortgageAmount(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 mb-2 text-sm">Amortization Period</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    value={amortizationYears}
                    onChange={(e) => setAmortizationYears(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    {[...Array(31)].map((_, i) => (
                      <option key={i} value={i}>{i} Years</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <select
                    value={amortizationMonths}
                    onChange={(e) => setAmortizationMonths(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i}>{i} Months</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-white/90 mb-2 text-sm">Payment Frequency</label>
              <select
                value={paymentFrequency}
                onChange={(e) => setPaymentFrequency(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Monthly">Monthly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                <option value="Accelerated Bi-Weekly">Accelerated Bi-Weekly</option>
              </select>
            </div>

            <div>
              <label className="block text-white/90 mb-2 text-sm">Interest Rate (%)</label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  step="0.01"
                />
              </div>
            </div>

            {activeTab === 'Advanced' && (
              <>
                <div>
                  <label className="block text-white/90 mb-2 text-sm">Interest Type</label>
                  <select
                    value={interestType}
                    onChange={(e) => setInterestType(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Fixed">Fixed</option>
                    <option value="Variable">Variable</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/90 mb-2 text-sm">Interest Term</label>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={interestTermYears}
                      onChange={(e) => setInterestTermYears(Number(e.target.value))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      {[...Array(11)].map((_, i) => (
                        <option key={i} value={i}>{i} Years</option>
                      ))}
                    </select>
                    <select
                      value={interestTermMonths}
                      onChange={(e) => setInterestTermMonths(Number(e.target.value))}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={i}>{i} Months</option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Chart Panel */}
          <div className="lg:col-span-2 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#ffffff60"
                    label={{ value: 'Years', position: 'bottom', fill: '#ffffff60' }}
                  />
                  <YAxis 
                    stroke="#ffffff60"
                    tickFormatter={(value) => `$${(value/1000)}k`}
                    label={{ value: 'Balance ($)', angle: -90, position: 'left', fill: '#ffffff60' }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f1f2b', border: '1px solid rgba(255,255,255,0.1)' }}
                    labelStyle={{ color: '#ffffff90' }}
                    formatter={(value) => [formatCurrency(value), 'Amount']}
                  />
                  <Line
                    type="monotone"
                    dataKey="balance"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    name="Remaining Balance"
                  />
                  <Line
                    type="monotone"
                    dataKey="paid"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={false}
                    name="Amount Paid"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {formatCurrency(monthlyPayment)}
            </div>
            <div className="text-white/90 text-lg font-medium">Monthly Payment</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {formatCurrency(mortgageAmount)}
            </div>
            <div className="text-white/90 text-lg font-medium">Principal Amount</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {`${interestRate}%`}
            </div>
            <div className="text-white/90 text-lg font-medium">Interest Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;