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
  Calculator,
  PiggyBank,
  TrendingUp,
  Calendar,
  DollarSign,
  Percent,
  ArrowRight
} from 'lucide-react';

const RRSPCalculator = () => {
  const [years, setYears] = useState(20);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [frequency, setFrequency] = useState('monthly');
  const [rateOfReturn, setRateOfReturn] = useState(5);
  const [chartData, setChartData] = useState([]);

  const calculateRRSP = () => {
    const data = [];
    let total = 0;
    const monthlyRate = rateOfReturn / 100 / 12;
    const monthlyContributionAmount = frequency === 'monthly' ? monthlyContribution : monthlyContribution / 12;

    for (let year = 0; year <= years; year++) {
      if (year === 0) {
        data.push({ year: year, savings: 0 });
        continue;
      }

      for (let month = 1; month <= 12; month++) {
        total = (total + monthlyContributionAmount) * (1 + monthlyRate);
      }

      data.push({
        year: year,
        savings: Math.round(total)
      });
    }

    setChartData(data);
  };

  useEffect(() => {
    calculateRRSP();
  }, [years, monthlyContribution, frequency, rateOfReturn]);

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
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-violet-600/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-600/30 to-transparent rounded-full blur-3xl" />
      
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">RRSP Calculator</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Plan your retirement savings and visualize your RRSP growth over time
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div>
              <label className="block text-white/90 mb-2 text-sm">Years until retirement</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 mb-2 text-sm">Contribution amount</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 mb-2 text-sm">Contribution frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500"
              >
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
              </select>
            </div>

            <div>
              <label className="block text-white/90 mb-2 text-sm">Expected rate of return (%)</label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-5 w-5" />
                <input
                  type="number"
                  value={rateOfReturn}
                  onChange={(e) => setRateOfReturn(Number(e.target.value))}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-violet-500"
                />
              </div>
            </div>
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
                    label={{ value: 'Years to Retirement', position: 'bottom', fill: '#ffffff60' }}
                  />
                  <YAxis 
                    stroke="#ffffff60"
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                    label={{ value: 'Total Savings ($)', angle: -90, position: 'left', fill: '#ffffff60' }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f1f2b', border: '1px solid rgba(255,255,255,0.1)' }}
                    labelStyle={{ color: '#ffffff90' }}
                    formatter={(value) => [formatCurrency(value), 'Savings']}
                  />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              {formatCurrency(monthlyContribution * 12)}
            </div>
            <div className="text-white/90 text-lg font-medium">Annual Contribution</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              {chartData.length > 0 ? formatCurrency(chartData[chartData.length - 1].savings) : '$0'}
            </div>
            <div className="text-white/90 text-lg font-medium">Expected Total</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 backdrop-blur-sm">
            <div className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
              {`${rateOfReturn}%`}
            </div>
            <div className="text-white/90 text-lg font-medium">Return Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRSPCalculator;