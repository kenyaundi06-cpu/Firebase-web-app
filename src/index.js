// src/index.js
import { initializeApp } from "firebase/app";

// 1. Securely bind your private cloud environment configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID
};
const app = initializeApp(firebaseConfig);

// 2. Real Estate Asset Data Models with Multi-Image Carousel Arrays
const properties = [
  {
    id: "prop-1",
    title: "Prime 1/4 Acre Commercial Plot",
    location: "Ruiru (Kimbo Area)",
    size: "50ft x 100ft",
    price: "Ksh 4,500,000",
    status: "Available",
    tenure: "Freehold Title Ready",
    proximity: "1.5km from Thika Superhighway",
    images: [
      "https://unsplash.com", // Real field shot
      "https://unsplash.com"  // Landscape layout view
    ]
  },
  {
    id: "prop-2",
    title: "Modern 3 Bedroom Suburban Villa",
    location: "Kiambu Environs",
    size: "0.125 Acres",
    price: "Ksh 16,500,000",
    status: "Selling Fast",
    tenure: "Leasehold certificate",
    proximity: "Near Kiambu Golf Club, 500m off tarmac",
    images: [
      "https://unsplash.com", // House front
      "https://unsplash.com", // Garden landscape
      "https://unsplash.com"  // Interior flow
    ]
  }
];

// 3. Commercial Fleet Transport Data Models
const transportServices = [
  {
    id: "truck-1",
    title: "Heavy Duty Tipper Truck Haulage",
    capacity: "20 Ton Payload Limit",
    regions: "Nairobi, Kiambu, Machakos Counties",
    compliance: "Full GIT Insurance & GPS Tracked",
    utility: "Best use for Sand, Ballast, and Excavation Materials",
    images: [
      "https://unsplash.com" // Authentic commercial cargo vehicle
    ]
  }
];

// 4. Dynamic Renderer Engines with Automated Multi-Carousel Injection
function initCarousels() {
  const realEstateGrid = document.getElementById("real-estate-grid");
  const transportGrid = document.getElementById("transport-grid");

  // Style helper tokens for our layout injection
  const cardStyle = `background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04); padding: 0; display: flex; flex-direction: column;`;
  const infoStyle = `padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; flex-grow: 1;`;
  const badgeStyle = `display: inline-block; align-self: flex-start; background: #c36a4b; color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; margin-bottom: 0.5rem;`;
  const btnStyle = `display: block; text-align: center; background: #1e2229; color: #ffffff; padding: 12px; border-radius: 6px; text-decoration: none; font-weight: bold; margin-top: auto; transition: background 0.3s;`;

  // Render Real Estate Grid Nodes
  realEstateGrid.innerHTML = properties.map(p => `
    <div style="${cardStyle}">
      ${createCarouselMarkup(p.id, p.images)}
      <div style="${infoStyle}">
        <span style="${badgeStyle}">${p.status}</span>
        <h3 style="margin: 0; font-size: 1.3rem;">${p.title}</h3>
        <p style="margin: 0; color: #c36a4b; font-size: 1.2rem; font-weight: bold;">${p.price}</p>
        <p style="margin: 0; font-size: 0.95rem;">📍 <strong>Location:</strong> ${p.location}</p>
        <p style="margin: 0; font-size: 0.95rem;">📐 <strong>Size:</strong> ${p.size} (${p.tenure})</p>
        <p style="margin: 0; font-size: 0.95rem; color: #555;">🛣️ <strong>Proximity:</strong> ${p.proximity}</p>
        <a href="https://wa.me{encodeURIComponent(p.title)}" target="_blank" style="${btnStyle}">Inquire on WhatsApp</a>
      </div>
    </div>
  `).join("");

  // Render Transport Grid Nodes
  transportGrid.innerHTML = transportServices.map(t => `
    <div style="${cardStyle}">
      ${createCarouselMarkup(t.id, t.images)}
      <div style="${infoStyle}">
        <span style="${badgeStyle}">Fleet Active</span>
        <h3 style="margin: 0; font-size: 1.3rem;">${t.title}</h3>
        <p style="margin: 0; font-size: 0.95rem;">🏋️ <strong>Capacity:</strong> ${t.capacity}</p>
        <p style="margin: 0; font-size: 0.95rem;">🗺️ <strong>Coverage:</strong> ${t.regions}</p>
        <p style="margin: 0; font-size: 0.95rem; color: #2e7d32; font-weight: 600;">🛡️ ${t.compliance}</p>
        <p style="margin: 0; font-size: 0.9rem; color: #666; font-style: italic;">${t.utility}</p>
        <a href="https://wa.me{encodeURIComponent(t.title)}" target="_blank" style="${btnStyle}">Book Fleet Service</a>
      </div>
    </div>
  `).join("");

  // Attach interactive slide trigger events
  attachCarouselEvents();
}

// 5. Generates the custom HTML slider framework for multi-image listings
function createCarouselMarkup(id, images) {
  return `
    <div id="wrapper-${id}" style="position: relative; height: 220px; overflow: hidden; background: #e5e7eb;">
      <div id="track-${id}" style="display: flex; width: ${images.length * 100}%; height: 100%; transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);">
        ${images.map(img => `<div style="width: ${100 / images.length}%; height: 100%; background-image: url('${img}'); background-size: cover; background-position: center;"></div>`).join("")}
      </div>
      ${images.length > 1 ? `
        <button data-dir="prev" data-id="${id}" style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 30px; height: 30px; font-weight: bold; cursor: pointer; z-index: 5;"><</button>
        <button data-dir="next" data-id="${id}" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 30px; height: 30px; font-weight: bold; cursor: pointer; z-index: 5;">></button>
      ` : ""}
    </div>
  `;
}

// 6. Tracks slide steps separately for every unique item card
const activeSlides = {};

function attachCarouselEvents() {
  document.querySelectorAll("[data-dir]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const dir = e.target.getAttribute("data-dir");
      const track = document.getElementById(`track-${id}`);
      const totalImages = track.children.length;

      if (!activeSlides[id]) activeSlides[id] = 0;

      if (dir === "next") {
        activeSlides[id] = (activeSlides[id] + 1) % totalImages;
      } else {
        activeSlides[id] = (activeSlides[id] - 1 + totalImages) % totalImages;
      }

      const offset = activeSlides[id] * (100 / totalImages);
      track.style.transform = `translateX(-${offset}%)`;
    });
  });
}

// 7. Dynamic Institutional Copyright Footer Generator
function injectCopyrightFooter() {
  const currentYear = new Date().getFullYear();
  const footerElement = document.createElement("footer");
  
  footerElement.style.cssText = `
    background-color: #1e2229;
    color: #ffffff;
    text-align: center;
    padding: 2rem 1.5rem;
    font-size: 0.95rem;
    border-top: 4px solid #c36a4b;
    margin-top: 5rem;
  `;
  
  footerElement.innerHTML = `
    <p style="margin: 0 0 0.5rem 0;">&copy; 2018 <strong>Stephesan Enterprises Limited</strong>. All Rights Reserved.</p>
    <p style="margin: 0; font-size: 0.8rem; opacity: 0.6;">Providing Premium Real Estate Solutions & Dependable Fleet Logistics for over a decade.</p>
  `;

  
  document.body.appendChild(footerElement);
}

// Global Core Boot Sequence
document.addEventListener("DOMContentLoaded", () => {
  // Run the engines instantly
initCarousels();
injectCopyrightFooter();
console.log("Stephesan Platform Engine Active.");

});
