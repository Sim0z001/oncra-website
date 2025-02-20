import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const DiningTable = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    { src: "/dining-table.png" },
    { src: "/dining-table-detail1.png" },
    { src: "/dining-table-detail2.png" },
    { src: "/dining-table-detail3.png" }
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
        <h2 className="text-3xl font-light mb-8 text-gray-900">Dining Table</h2>
        
        {/* Main Image */}
        <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-8 cursor-pointer">
          <img 
            src="/dining-table.png" 
            alt="Dining Table" 
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
              src="/dining-table-detail1.png" 
              alt="Dining Table Detail" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-200 p-2"
              onClick={() => {
                setPhotoIndex(1);
                setIsOpen(true);
              }}
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer h-48">
            <img 
              src="/dining-table-detail2.png" 
              alt="Dining Table Detail" 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-200 p-2"
              onClick={() => {
                setPhotoIndex(2);
                setIsOpen(true);
              }}
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer h-48">
            <img 
              src="/dining-table-detail3.png" 
              alt="Dining Table Detail" 
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
            This beautifully handcrafted dining table combines sustainable materials with modern design. 
            The sleek oval shape creates a stunning centerpiece that's both functional and stylish, 
            perfect for any contemporary dining space.
          </p>

          <h3 className="text-2xl font-light mb-4">Features</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>30mm thick hardwood top in an elegant oval shape</li>
            <li>Distinctive pillar-style legs with D-shaped profile</li>
            <li>Expertly clad hardwood dowels creating a striking ribbed texture</li>
            <li>Dimensions: 1865mm (L) × 855mm (W)</li>
            <li>Warm, natural wood tones that complement any interior style</li>
          </ul>

          <h3 className="text-2xl font-light mb-4">Craftsmanship</h3>
          <p className="text-gray-600 mb-6">
            Each table is meticulously crafted using recycled timber, combining sustainability with 
            exceptional design. The distinct ribbed texture of the legs showcases our attention to 
            detail and commitment to creating unique, lasting pieces that stand out in any space.
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

export default DiningTable;