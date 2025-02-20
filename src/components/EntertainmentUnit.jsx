import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const EntertainmentUnit = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: "/tv-unit.png" },
    { src: "/tv-unit-detail1.png" },
    { src: "/tv-unit-detail2.png" },
    { src: "/tv-unit-detail3.png" }
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
        <h2 className="text-3xl font-light mb-8 text-gray-900">Tasmanian Oak Entertainment Unit</h2>
        
        {/* Main Image */}
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-8 cursor-pointer">
          <img 
            src="/tv-unit.png" 
            alt="Tasmanian Oak Entertainment Unit" 
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
              src="/tv-unit-detail1.png" 
              alt="Entertainment Unit Detail" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-200 p-2"
              onClick={() => {
                setPhotoIndex(1);
                setIsOpen(true);
              }}
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer h-48">
            <img 
              src="/tv-unit-detail2.png" 
              alt="Entertainment Unit Detail" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-200 p-2"
              onClick={() => {
                setPhotoIndex(2);
                setIsOpen(true);
              }}
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer h-48">
            <img 
              src="/tv-unit-detail3.png" 
              alt="Entertainment Unit Detail" 
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
            Transform your living space with this stunning Tasmanian oak entertainment unit, 
            meticulously handcrafted on the Sunshine Coast. This unique piece blends timeless 
            elegance with functional design.
          </p>

          <h3 className="text-2xl font-light mb-4">Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Premium Tasmanian Oak construction showcasing natural beauty and durability</li>
            <li>Four central drawers for practical storage:
              <ul className="list-disc pl-5 mt-2">
                <li>Two smaller drawers for remotes and accessories</li>
                <li>Two larger drawers for media collections</li>
              </ul>
            </li>
            <li>Curved open shelf units at each end for display</li>
            <li>Dimensions: 2020mm (L) × 430mm (W) × 490mm (H)</li>
            <li>High-quality, eco-conscious finish</li>
          </ul>

          <h3 className="text-2xl font-light mb-4">Craftsmanship</h3>
          <p className="text-gray-600 mb-6">
            Locally designed and built on the Sunshine Coast, this piece represents the finest 
            in Australian craftsmanship. Each unit is carefully constructed to ensure lasting 
            quality and beauty.
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

export default EntertainmentUnit;