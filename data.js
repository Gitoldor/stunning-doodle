// data.js

// ================================
// SUPER ATTRIBUTES
// ================================

const superAttributes = {
  plan1: {
    name: "Pro",
    startHour: 10,   // 10 AM
    endHour: 22      // 10 PM
  },

  plan2: {
    name: "Premium",
    startHour: 0,    // 12 AM
    endHour: 24      // Full 24 hours
  }
};


// ================================
// POSTS DATA
// ================================

const posts = [
  {
    "id": 1,
    "title": "Sawantwadi Market",
    "type": "Market",
    "image": "https://example.com/market.jpg",
    "href": "https://example.com/market",
    "plan1": "Pro",
    "plan2": "Premium"
  },
  {
    "id": 2,
    "title": "Moti Talav",
    "type": "Scenic",
    "image": "https://example.com/motitalav.jpg",
    "href": "https://example.com/motitalav",
    "plan1": "Pro",
    "plan2": "Premium"
  },
  {
    "id": 3,
    "title": "Local Food Spot",
    "type": "Food",
    "image": "https://example.com/food.jpg",
    "href": "https://example.com/food",
    "plan1": "Pro",
    "plan2": "Premium"
  },
  {
    "id": 4,
    "title": "Yo bubu gona",
    "type": "Youjok",
    "image": "https://example.com/image.jpg",
    "href": "https://example.com/image.jpg",
    "plan1": "Pro",
    "plan2": "Premium"
  },
  {
    "id": 5,
    "title": "Yo",
    "type": "Hi",
    "image": "https//to.com",
    "href": "https//to.com",
    "plan1": "Pro",
    "plan2": "Premium",
    "createdAt": "2026-09-04"
  }
];


// ================================
// MAKE AVAILABLE TO HTML
// ================================

window.superAttributes = superAttributes;
window.posts = posts;
