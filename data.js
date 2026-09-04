// data.js

// ================================
// SUPER ATTRIBUTES
// ================================

const superAttributes = {
  "plan1": {
    "name": "Pro",
    "startHour": 10,
    "endHour": 22
  },
  "plan2": {
    "name": "Premium",
    "startHour": 0,
    "endHour": 24
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
  },
  {
    "id": 6,
    "title": "Yo chut man",
    "type": "Fuck you",
    "image": "https://github.com/settings/personal-access-tokens/new",
    "href": "https://github.com/settings/personal-access-tokens/new",
    "plan1": "Pro",
    "plan2": "",
    "createdAt": "2026-09-04T18:20:45.555Z"
  },
  {
    "id": 7,
    "title": "Fuck",
    "type": "Fuih",
    "image": "https://example.com/image.jpg",
    "href": "https://example.com/page",
    "plan1": "",
    "plan2": "Premium",
    "createdAt": "2026-09-04T18:27:04.342Z"
  }
];


// ================================
// MAKE AVAILABLE TO HTML
// ================================

window.superAttributes = superAttributes;
window.posts = posts;
