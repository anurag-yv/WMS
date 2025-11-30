import React, { useState } from 'react';

const WasteTracker = () => {
  const [wasteEntries, setWasteEntries] = useState([]);
  const [formData, setFormData] = useState({
    wasteType: 'plastic',
    quantity: '',
    unit: 'kg',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const wasteTypes = [
    { value: 'plastic', label: 'Plastic', color: '#FF6384' },
    { value: 'paper', label: 'Paper', color: '#36A2EB' },
    { value: 'glass', label: 'Glass', color: '#FFCE56' },
    { value: 'metal', label: 'Metal', color: '#4BC0C0' },
    { value: 'organic', label: 'Organic', color: '#9966FF' },
    { value: 'electronic', label: 'Electronic', color: '#FF9F40' },
    { value: 'hazardous', label: 'Hazardous', color: '#C9CBCF' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      ...formData,
      timestamp: new Date().toLocaleString()
    };
    setWasteEntries([...wasteEntries, newEntry]);
    setFormData({
      wasteType: 'plastic',
      quantity: '',
      unit: 'kg',
      date: new Date().toISOString().split('T')[0],
      notes: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getTotalByType = (type) => {
    return wasteEntries
      .filter(entry => entry.wasteType === type)
      .reduce((total, entry) => total + parseFloat(entry.quantity || 0), 0);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Waste Tracking</h1>
      
      <div className="two-column-layout">
        {/* Entry Form */}
        <div className="card">
          <h3>Add Waste Entry</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Waste Type</label>
              <select 
                name="wasteType" 
                value={formData.wasteType} 
                onChange={handleChange}
                required
              >
                {wasteTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="responsive-grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Unit</label>
                <select 
                  name="unit" 
                  value={formData.unit} 
                  onChange={handleChange}
                >
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                  <option value="items">items</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Notes (Optional)</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows="3"
                placeholder="Any additional information..."
              />
            </div>
            
            <button type="submit" className="cta-button w-full">
              Add Entry
            </button>
          </form>
        </div>

        {/* Statistics */}
        <div className="card">
          <h3>Waste Summary</h3>
          <div className="flex flex-column gap-1">
            {wasteTypes.map(type => {
              const total = getTotalByType(type.value);
              return total > 0 ? (
                <div key={type.value} className="flex justify-center align-center" 
                  style={{ 
                    padding: '0.75rem',
                    background: '#f8f9fa',
                    borderRadius: '8px'
                  }}>
                  <span className="flex align-center gap-1">
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: type.color
                    }}></div>
                    {type.label}
                  </span>
                  <strong style={{ marginLeft: 'auto' }}>{total} kg</strong>
                </div>
              ) : null;
            })}
            
            {wasteEntries.length === 0 && (
              <p className="text-center" style={{ color: 'var(--text-light)', padding: '2rem' }}>
                No entries yet. Start tracking your waste!
              </p>
            )}
          </div>
          
          {wasteEntries.length > 0 && (
            <div className="mt-2 text-center">
              <h4>Total Waste: {wasteEntries.reduce((total, entry) => total + parseFloat(entry.quantity || 0), 0)} kg</h4>
            </div>
          )}
        </div>
      </div>

      {/* Entries List */}
      {wasteEntries.length > 0 && (
        <div className="card mt-2">
          <h3>Recent Entries</h3>
          <div className="flex flex-column gap-1">
            {wasteEntries.slice().reverse().map(entry => {
              const type = wasteTypes.find(t => t.value === entry.wasteType);
              return (
                <div key={entry.id} className="flex flex-column gap-1" 
                  style={{ 
                    padding: '1rem',
                    background: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${type.color}`
                  }}>
                  <div className="flex justify-between align-center flex-wrap gap-1">
                    <strong>{type.label}</strong>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                      {entry.timestamp}
                    </span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-light)' }}>
                    {entry.quantity} {entry.unit} • {entry.date}
                  </p>
                  {entry.notes && (
                    <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-light)' }}>
                      {entry.notes}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default WasteTracker;