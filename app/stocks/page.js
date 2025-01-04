'use client';
import React, { useState, useEffect } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';

// Configuration of top stocks to track
const TOP_STOCKS = [
  { symbol: 'NVDA', name: 'NVIDIA' },
  { symbol: 'AAPL', name: 'Apple' },
  { symbol: 'MSFT', name: 'Microsoft' },
  { symbol: 'GOOGL', name: 'Alphabet' },
  { symbol: 'TSLA', name: 'Tesla' },
  { symbol: 'META', name: 'Meta' },
  { symbol: 'AMZN', name: 'Amazon' },
  { symbol: 'NFLX', name: 'Netflix' },
  { symbol: 'INTC', name: 'Intel' },
  { symbol: 'ADBE', name: 'Adobe' }
];

const StockTracker = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Replace this with your actual API key when you get it
  const API_KEY = 'gJGMmtEYcx3WM6LcG6ZOyvXRb6cmw0bs';

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const symbols = TOP_STOCKS.map(stock => stock.symbol).join(',');
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch stock data');
        }
        
        const data = await response.json();

        const enrichedStockData = TOP_STOCKS.map(stock => {
          const stockInfo = data.find(item => item.symbol === stock.symbol) || {};
          
          return {
            ...stock,
            price: stockInfo.price || 0,
            change: stockInfo.change || 0,
            changePercent: stockInfo.changesPercentage || 0,
            logo: `https://financialmodelingprep.com/api/v3/profile/${stock.symbol}?apikey=${API_KEY}`
          };
        });

        // Fetch logos for top stocks
        const logosWithDetails = await Promise.all(
          enrichedStockData.map(async (stock) => {
            try {
              const logoResponse = await fetch(stock.logo);
              const logoData = await logoResponse.json();
              return {
                ...stock,
                logoUrl: logoData[0]?.image || `https://via.placeholder.com/64?text=${stock.symbol}`
              };
            } catch (error) {
              console.error(`Error fetching logo for ${stock.symbol}:`, error);
              return {
                ...stock,
                logoUrl: `https://via.placeholder.com/64?text=${stock.symbol}`
              };
            }
          })
        );

        setStockData(logosWithDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setLoading(false);
      }
    };

    fetchStockData();
    const interval = setInterval(fetchStockData, 60000);
    return () => clearInterval(interval);
  }, [API_KEY]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      // First, search for matching symbols
      const searchResponse = await fetch(
        `https://financialmodelingprep.com/api/v3/search?query=${searchTerm}&limit=5&apikey=${API_KEY}`
      );
      
      if (!searchResponse.ok) {
        throw new Error('Failed to fetch search results');
      }
      
      const symbolData = await searchResponse.json();
      
      // Fetch detailed quote and profile for each symbol
      const detailedResults = await Promise.all(
        symbolData.map(async (stock) => {
          // Fetch quote
          const quoteResponse = await fetch(
            `https://financialmodelingprep.com/api/v3/quote/${stock.symbol}?apikey=${API_KEY}`
          );
          
          // Fetch profile for logo
          const profileResponse = await fetch(
            `https://financialmodelingprep.com/api/v3/profile/${stock.symbol}?apikey=${API_KEY}`
          );
          
          if (!quoteResponse.ok || !profileResponse.ok) {
            throw new Error(`Failed to fetch data for ${stock.symbol}`);
          }
          
          const quoteData = await quoteResponse.json();
          const profileData = await profileResponse.json();
          const quote = quoteData[0] || {};
          const profile = profileData[0] || {};

          return {
            symbol: stock.symbol,
            name: stock.name || profile.companyName,
            logoUrl: profile.image || `https://via.placeholder.com/64?text=${stock.symbol}`,
            price: quote.price || 0,
            change: quote.change || 0,
            changePercent: quote.changesPercentage || 0
          };
        })
      );

      setSearchResults(detailedResults);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleSearch} className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for a stock (e.g., AAPL, GOOGL)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-800 border-2 border-gray-700 text-gray-100 focus:outline-none focus:border-blue-600 transition-all"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </form>

        <h1 className="text-4xl font-bold mb-8 text-gray-100 text-center">Stock Tracker</h1>
        
        {loading ? (
          <div className="text-center text-xl text-gray-500">Loading stocks...</div>
        ) : (
          <>
            {searchResults.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-200">Search Results</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((stock) => (
                    <StockCard key={stock.symbol} stock={stock} />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-200">Featured Stocks</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stockData.map((stock) => (
                  <StockCard key={stock.symbol} stock={stock} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const StockCard = ({ stock }) => (
  <div 
    className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 flex items-center"
  >
    <div className="mr-4">
      <img 
        src={stock.logoUrl || `https://via.placeholder.com/64?text=${stock.symbol}`} 
        alt={`${stock.name} logo`} 
        className="w-16 h-16 rounded-full object-contain border-2 border-gray-700 p-2 bg-gray-900"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/64?text=${stock.symbol}`;
        }}
      />
    </div>

    <div className="flex-grow">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-100">{stock.name}</h2>
          <p className="text-gray-400">{stock.symbol}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-100">${stock.price.toFixed(2)}</p>
          <div className="flex items-center justify-end">
            {stock.change > 0 ? (
              <ChevronUp color="green" className="mr-1" />
            ) : (
              <ChevronDown color="red" className="mr-1" />
            )}
            <span 
              className={`font-medium ${
                stock.change > 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StockTracker;