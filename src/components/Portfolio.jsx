import React from 'react';

const Portfolio = ({ setCurrentPage }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-light mb-12 text-center text-gray-900">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Entertainment Unit */}
        <button 
          onClick={() => setCurrentPage('entertainment-unit')}
          className="group text-left"
        >
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4">
            <img 
              src="/tv-unit.png" 
              alt="Tasmanian Oak Entertainment Unit" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
          <h3 className="text-xl font-medium text-gray-900 group-hover:text-black transition-colors">
            Entertainment Unit
          </h3>
          <p className="text-gray-600">Custom TV unit with storage</p>
        </button>

        {/* Dining Table */}
        <button 
          onClick={() => setCurrentPage('dining-table')}
          className="group text-left"
        >
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4">
            <img 
              src="/dining-table.png" 
              alt="Dining Table" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
          <h3 className="text-xl font-medium text-gray-900 group-hover:text-black transition-colors">
            Dining Table
          </h3>
          <p className="text-gray-600">Handcrafted oval dining table</p>
        </button>

        {/* Coffee Table */}
        <button 
          onClick={() => setCurrentPage('coffee-table')}
          className="group text-left"
        >
          <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-4">
            <img 
              src="/coffee-table.png" 
              alt="Coffee Table" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
          <h3 className="text-xl font-medium text-gray-900 group-hover:text-black transition-colors">
            Coffee Table
          </h3>
          <p className="text-gray-600">Elegant oval coffee table</p>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;