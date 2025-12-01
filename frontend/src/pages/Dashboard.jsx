import React, { useState, useEffect } from 'react';
import { 
  Bar, 
  Doughnut, 
  Line 
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import {
  TrendingUp,
  TrendingDown,
  Recycle,
  Leaf,
  Zap,
  Truck,
  Activity,
  Clock,
  Calendar,
  Download,
  RefreshCw,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Award,
  Users,
  MapPin,
  BarChart3,
  PieChart,
  Sparkles,
  Plus,
  FileText,
  Map,
  Settings,
  Bell,
  X
} from 'lucide-react';

// Register ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Modal Component
const Modal = ({ isOpen, onClose, title, children, type = 'schedule' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          {type === 'schedule' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input type="text" placeholder="Enter address" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Waste Type</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Household Waste</option>
                  <option>Recyclables</option>
                  <option>Organic</option>
                </select>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 rounded-lg hover:shadow-lg transition-all">
                Schedule Pickup
              </button>
            </div>
          ) : (
            <div>
              <p className="text-gray-600 mb-4">Generating detailed report...</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Collections:</span>
                  <span>45</span>
                </div>
                <div className="flex justify-between">
                  <span>Recycling Success:</span>
                  <span>78%</span>
                </div>
                <div className="flex justify-between">
                  <span>CO₂ Impact:</span>
                  <span>450 kg saved</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  alert('Report downloaded as PDF!');
                  onClose();
                }}
                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [goalProgress, setGoalProgress] = useState(78);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'High recycling rate in Zone A!', type: 'success' },
    { id: 2, message: 'Upcoming pickup in Zone B tomorrow', type: 'info' },
    { id: 3, message: 'Low participation in Zone C', type: 'warning' }
  ]);
  const [recentPickups, setRecentPickups] = useState([
    { id: 1, date: 'Nov 28', address: '123 Green St', type: 'Recyclables', status: 'Completed' },
    { id: 2, date: 'Nov 25', address: '456 Eco Ave', type: 'Organic', status: 'In Progress' },
    { id: 3, date: 'Nov 22', address: '789 Sustain Blvd', type: 'Household', status: 'Scheduled' }
  ]);
  const [selectedZone, setSelectedZone] = useState('All Zones');
  const [routeData, setRouteData] = useState(null);

  // Stats with more info
  const stats = [
    {
      title: "Total Volume",
      value: "1.2K kg",
      change: "+12%",
      positive: true,
      icon: <Recycle className="w-5 h-5" />,
      color: "from-blue-500 to-emerald-500",
      detail: "Avg daily: 40kg"
    },
    {
      title: "Recycle Ratio",
      value: "78%",
      change: "+5%",
      positive: true,
      icon: <Leaf className="w-5 h-5" />,
      color: "from-emerald-500 to-green-500",
      detail: "Target: 85%"
    },
    {
      title: "Carbon Offset",
      value: "450 kg",
      change: "+18%",
      positive: true,
      icon: <Zap className="w-5 h-5" />,
      color: "from-green-500 to-teal-500",
      detail: "Trees saved: 2.5"
    },
    {
      title: "Truck Utilization",
      value: "94%",
      change: "+3%",
      positive: true,
      icon: <Truck className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      detail: "Fuel saved: 15%"
    }
  ];

  // Chart data
  const barData = {
    labels: ['Plastic', 'Paper', 'Organic', 'Glass', 'Metal', 'E-Waste'],
    datasets: [{
      data: [25, 35, 40, 15, 10, 5],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(236, 72, 153, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderRadius: 8,
      borderSkipped: false,
    }]
  };

  const doughnutData = {
    labels: ['Recycled', 'Composted', 'Energy', 'Landfill'],
    datasets: [{
      data: [45, 25, 15, 15],
      backgroundColor: [
        'rgba(16, 185, 129, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderWidth: 2,
      hoverOffset: 4
    }]
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Trend',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Performance'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGoalProgress(prev => Math.min(prev + Math.random() * 1.5, 100));
      // Simulate new alert
      if (Math.random() > 0.7) {
        setAlerts(prev => [...prev, { 
          id: Date.now(), 
          message: `New pickup completed in Zone ${Math.floor(Math.random() * 3) + 1}!`, 
          type: 'success' 
        }]);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSchedulePickup = () => {
    setShowScheduleModal(true);
  };

  const handleViewReport = () => {
    setShowReportModal(true);
  };

  const handleRouteOptimizer = () => {
    setRouteData({
      distance: '45 km',
      time: '2h 15m',
      fuel: '12 L',
      co2: '28 kg'
    });
    alert('Optimized route loaded – check map integration!');
  };

  const handleCloseModal = () => {
    setShowScheduleModal(false);
    setShowReportModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 p-2 md:p-4 lg:p-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-emerald-600 bg-clip-text text-transparent">
              EcoTrack Dashboard
            </h1>
            <p className="text-gray-600 mt-1 text-sm md:text-base">Real-time sustainability metrics & operations</p>
          </div>
          <button 
            onClick={() => setIsRefreshing(!isRefreshing)}
            disabled={isRefreshing}
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-3 py-2 rounded-lg hover:shadow-lg transition-all text-sm"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>Live Update</span>
          </button>
        </div>

        {/* Time Range */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['week', 'month', 'quarter', 'year'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm rounded-full transition-all border ${
                timeRange === range
                  ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white border-transparent shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-300'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>

        {/* Goal Progress */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-emerald-500" />
              Impact Goal
            </h2>
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500" onClick={() => alert('Notifications: 3 new alerts')} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">{Math.round(goalProgress)}%</div>
              <p className="text-gray-600 text-sm">Zero-Waste Target</p>
            </div>
            <div className="w-48 md:w-64 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${goalProgress}%` }}
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Next milestone: 85% by end of {timeRange}</p>
        </div>
      </header>

      {/* Zone Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Zone</label>
        <select 
          value={selectedZone} 
          onChange={(e) => setSelectedZone(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-48"
        >
          <option>All Zones</option>
          <option>Zone A (Downtown)</option>
          <option>Zone B (Suburbs)</option>
          <option>Zone C (Industrial)</option>
        </select>
      </div>

      {/* Alerts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {alerts.slice(-3).map(alert => (
          <div key={alert.id} className={`p-3 rounded-lg text-sm ${
            alert.type === 'success' ? 'bg-emerald-50 border-l-4 border-emerald-400' :
            alert.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400' :
            'bg-blue-50 border-l-4 border-blue-400'
          }`}>
            <div className="flex items-center">
              <AlertCircle className={`w-4 h-4 mr-2 ${alert.type === 'success' ? 'text-emerald-500' : alert.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'}`} />
              <span className="font-medium">{alert.message}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-xs md:text-sm font-medium flex items-center ${
                stat.positive ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {stat.positive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {stat.change} vs last
              </div>
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{stat.title}</h3>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <BarChart3 className="w-4 h-4 mr-2" />
            Material Breakdown
          </h3>
          <div className="h-64 md:h-72">
            <Bar data={barData} options={options} />
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <PieChart className="w-4 h-4 mr-2" />
            Disposal Routes
          </h3>
          <div className="h-64 md:h-72 flex items-center justify-center">
            <Doughnut data={doughnutData} options={options} />
          </div>
        </div>
      </div>

      {/* Recent Pickups Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Recent Pickups
          </h3>
          <button 
            onClick={handleSchedulePickup}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-3 py-2 rounded-lg text-sm hover:shadow-lg transition-all"
          >
            <Plus className="w-3 h-3" />
            <span>New Pickup</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Address</th>
                <th className="text-left py-2">Type</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPickups.map(pickup => (
                <tr key={pickup.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-2">{pickup.date}</td>
                  <td className="py-2">{pickup.address}</td>
                  <td className="py-2">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{pickup.type}</span>
                  </td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      pickup.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                      pickup.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {pickup.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Operations Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trend Analysis
          </h3>
          <div className="h-64 md:h-72">
            <Line data={lineData} options={options} />
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md space-y-4">
          <h3 className="text-lg font-semibold flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            Operations Hub
          </h3>
          <button 
            onClick={handleViewReport}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Generate Report</span>
          </button>
          <button 
            onClick={handleRouteOptimizer}
            className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-lg hover:shadow-lg transition-all"
          >
            <Map className="w-4 h-4" />
            <span>Route Optimizer</span>
          </button>
          <div className={routeData ? 'block' : 'hidden'}>
            <p className="text-xs text-gray-600">Optimized: {routeData?.distance} | {routeData?.time} | Fuel: {routeData?.fuel}</p>
          </div>
          <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all">
            <Settings className="w-4 h-4" />
            <span>System Settings</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={showScheduleModal} 
        onClose={handleCloseModal} 
        title="Schedule New Pickup"
        type="schedule"
      />
      <Modal 
        isOpen={showReportModal} 
        onClose={handleCloseModal} 
        title="Performance Report"
        type="report"
      />

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-md">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <div>Live data sync active • {new Date().toLocaleDateString()}</div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-emerald-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              <span>Secure & Updated</span>
            </div>
            <select 
              onChange={(e) => {
                if (e.target.value) alert(`${e.target.value.toUpperCase()} export initiated!`);
                e.target.value = '';
              }}
              className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Quick Export</option>
              <option value="pdf">PDF Summary</option>
              <option value="csv">CSV Data</option>
              <option value="excel">Excel Analytics</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;