const express = require('express');
const router = express.Router();

// Mock collection data
const collectionPoints = [
  {
    id: 1,
    name: "Downtown Recycling Center",
    address: "123 Main Street, Eco City",
    types: ["plastic", "paper", "glass", "metal"],
    hours: "8:00 AM - 6:00 PM",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 2,
    name: "Northside E-waste Facility",
    address: "456 Oak Avenue, Green District",
    types: ["electronic", "batteries"],
    hours: "9:00 AM - 5:00 PM",
    coordinates: { lat: 40.7589, lng: -73.9851 }
  },
  {
    id: 3,
    name: "Community Compost Site",
    address: "789 Park Road, Sustainable Ville",
    types: ["organic"],
    hours: "7:00 AM - 7:00 PM",
    coordinates: { lat: 40.7282, lng: -73.7949 }
  }
];

router.get('/points', (req, res) => {
  res.json(collectionPoints);
});

router.get('/schedule', (req, res) => {
  // Mock schedule data
  const schedule = [
    {
      area: "Downtown",
      nextPickup: "2024-01-15",
      frequency: "Weekly",
      types: ["Recycling", "General Waste"]
    },
    {
      area: "Northside",
      nextPickup: "2024-01-16",
      frequency: "Bi-weekly",
      types: ["All Types"]
    }
  ];
  res.json(schedule);
});

module.exports = router;