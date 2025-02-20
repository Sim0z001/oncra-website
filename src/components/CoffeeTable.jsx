import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CoffeeTable = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: "/coffee-table.png" },
    { src: "/coffee-table-detail1.png" },
    { src: "/coffee-table-detail2.png" },
    { src: "/coffee-table-detail3.png" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <button 
        onClick={() => setCurrentPage('portfolio')} 
        className="mb-8 text-gray-600 hover:text-black flex items-center"
      >
        ← Back to Our Work
      </button>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-8 text-gray-900">Oval Coffee Table</h2>
        
        {/* Main Image */}
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-8 cursor-pointer">
          <img 
            src="/coffee-table.png" 
            alt="Coffee Table" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            onClick={() => {
              setPhotoIndex(0);
              setIsOpen(true);
            }}
          />
        </div>

        {/* Additional Images Gallery */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer h-48">
            <img 
              src="/coffee-table-detail1.png" 
              alt="Coffee Table Detail" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-200 p-2"
              onClick={() => {
                setPhotoIndex(1);
                setIsOpen(true);
              }}
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer h-48">
            <img 
              src="/coffee-table-detail2.png" 
              alt="Coffee Table Detail" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-200 p-2"
              onClick={() => {
                setPhotoIndex(2);
                setIsOpen(true);
              }}
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer h-48">
            <img 
              src="/coffee-table-detail3.png" 
              alt="Coffee Table Detail" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-200 p-2"
              onClick={() => {
                setPhotoIndex(3);
                setIsOpen(true);
              }}
            />
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images}
          index={photoIndex}
        />

        {/* Description */}
        <div className="prose max-w-none">
          <h3 className="text-2xl font-light mb-4">Overview</h3>
          <p className="text-gray-600 mb-6">
            Elevate your living space with this beautifully handcrafted oval coffee table, 
            meticulously made from premium Tasmanian oak. Each piece showcases the stunning 
            grain and rich tones that this exquisite hardwood is known for, providing both 
            durability and elegance.
          </p>

          <h3 className="text-2xl font-light mb-4">Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Premium Tasmanian Oak construction</li>
            <li>Solid wood craftsmanship for lasting durability</li>
            <li>Elegant oval shape design</li>
            <li>High-quality Osmo Polyx finish for enhanced protection</li>
            <li>Dimensions: 1050mm (L) × 630mm (W)</li>
            <li>Generous surface area with sleek, modern profile</li>
          </ul>

          <h3 className="text-2xl font-light mb-4">Craftsmanship</h3>
          <p className="text-gray-600 mb-6">
            Proudly handmade on the Sunshine Coast, this coffee table reflects our commitment 
            to quality craftsmanship and design. The table features a premium Osmo Polyx finish 
            that not only enhances the natural beauty of the Tasmanian oak but also provides 
            exceptional protection for years of use. The oval shape adds a soft, inviting touch, 
            perfect for family gatherings or intimate conversations.
          </p>

          {/* Contact Section */}
          <div className="bg-gray-50 p-8 rounded-2xl mt-8">
            <h3 className="text-2xl font-light mb-4">Interested in this piece?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to discuss pricing or inquire about custom modifications to suit your space.
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTable;