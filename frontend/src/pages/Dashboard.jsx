import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const wasteData = {
    plastic: 25,
    paper: 35,
    glass: 15,
    metal: 10,
    organic: 40,
    electronic: 5
  };

  const barData = {
    labels: ['Plastic', 'Paper', 'Glass', 'Metal', 'Organic', 'Electronic'],
    datasets: [
      {
        label: 'Waste Collected (kg)',
        data: [
          wasteData.plastic,
          wasteData.paper,
          wasteData.glass,
          wasteData.metal,
          wasteData.organic,
          wasteData.electronic
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ['Recycled', 'Composted', 'Landfill', 'Incineration'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          '#2ecc71',
          '#3498db',
          '#e74c3c',
          '#f39c12'
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Waste Management Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="responsive-grid mb-2">
        <div className="card text-center">
          <h3>Total Waste This Month</h3>
          <p style={{ fontSize: '2rem', color: 'var(--primary-color)', fontWeight: 'bold', margin: '0.5rem 0' }}>130 kg</p>
          <p style={{ color: 'var(--text-light)' }}>↓ 15% from last month</p>
        </div>
        
        <div className="card text-center">
          <h3>Recycling Rate</h3>
          <p style={{ fontSize: '2rem', color: 'var(--secondary-color)', fontWeight: 'bold', margin: '0.5rem 0' }}>72%</p>
          <p style={{ color: 'var(--text-light)' }}>↑ 8% improvement</p>
        </div>
        
        <div className="card text-center">
          <h3>Carbon Saved</h3>
          <p style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: 'bold', margin: '0.5rem 0' }}>450 kg</p>
          <p style={{ color: 'var(--text-light)' }}>Equivalent to 10 trees</p>
        </div>
      </div>

      {/* Charts */}
      <div className="responsive-grid">
        <div className="card">
          <h3>Waste by Type</h3>
          <div className="chart-container">
            <Bar data={barData} options={chartOptions} />
          </div>
        </div>
        
        <div className="card">
          <h3>Disposition Methods</h3>
          <div className="chart-container">
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="card mt-2">
        <h3>Recent Activities</h3>
        <div className="flex flex-column gap-1">
          <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <strong>Plastic Collection</strong> - 5kg collected and sent for recycling
          </div>
          <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <strong>Organic Waste</strong> - 10kg composted successfully
          </div>
          <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <strong>E-waste</strong> - 2kg of electronics properly disposed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;