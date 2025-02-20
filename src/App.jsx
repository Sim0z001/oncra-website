import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Portfolio from './components/Portfolio';
import EntertainmentUnit from './components/EntertainmentUnit';
import DiningTable from './components/DiningTable';
import CoffeeTable from './components/CoffeeTable';
import Contact from './components/Contact'; // Add this import

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Our Work' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const pageContent = {
    home: (
      <div className="bg-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-[180px] h-[180px] flex items-center justify-center">
                <img 
                  src="/logo-mark.png" 
                  alt="ONCRA Mark" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-5xl font-light text-black">ONCRA</span>
            </div>
            <h1 className="text-5xl font-light mb-6 text-gray-900">Modern Craftsmanship</h1>
            <p className="text-xl text-gray-600 mb-8">
              Where minimalist design meets exceptional quality
            </p>
            <button 
              onClick={() => setCurrentPage('portfolio')}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              View Our Work
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Design</h3>
              <p className="text-gray-600">Contemporary designs that complement modern living spaces</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Craft</h3>
              <p className="text-gray-600">Precision craftsmanship in every piece we create</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Quality</h3>
              <p className="text-gray-600">Premium materials and attention to detail</p>
            </div>
          </div>
        </div>
      </div>
    ),
    portfolio: <Portfolio setCurrentPage={setCurrentPage} />,
    'entertainment-unit': <EntertainmentUnit setCurrentPage={setCurrentPage} />,
    'dining-table': <DiningTable setCurrentPage={setCurrentPage} />,
    'coffee-table': <CoffeeTable setCurrentPage={setCurrentPage} />,
    about: (
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-8 text-gray-900">About ONCRA</h2>
            <p className="text-gray-600 text-lg mb-12">
              We create contemporary furniture that combines minimalist design principles 
              with exceptional craftsmanship. Each piece is thoughtfully designed and 
              meticulously crafted in our workshop.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-4">Our Approach</h3>
                <p className="text-gray-600">
                  Modern aesthetics meet traditional craftsmanship to create 
                  pieces that are both beautiful and functional.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-4">Our Promise</h3>
                <p className="text-gray-600">
                  Quality materials, attention to detail, and a commitment to 
                  excellence in every piece we create.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    contact: <Contact setCurrentPage={setCurrentPage} /> // Replace the inline contact form with the new Contact component
  };

  // Rest of the component remains the same...
  return (
    <div className="min-h-screen bg-white">
{/* Navigation */}
<nav className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <button 
                            onClick={() => setCurrentPage('home')}
                            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                        >
                            <div className="h-12 w-12 flex items-center justify-center">
                                <img 
                                    src="/logo-mark.png" 
                                    alt="ONCRA Mark" 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-light">ONCRA</span>
                        </button>
                        
                        {/* Mobile menu button */}
                        <button 
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-3 py-2 text-gray-600 hover:text-black transition-colors ${
                                        currentPage === item.id 
                                            ? 'text-black' 
                                            : ''
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-100">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full text-left px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 ${
                                        currentPage === item.id 
                                            ? 'text-black bg-gray-50' 
                                            : ''
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

      {/* Main content */}
      <main>
        {pageContent[currentPage]}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="h-16 w-16 flex items-center justify-center">
                <img src="/logo-mark.png" alt="ONCRA Mark" className="w-full h-full object-contain" />
              </div>
              <span className="text-3xl font-light">ONCRA</span>
            </div>
            <p className="text-gray-600">Creating modern furniture for contemporary living</p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500">
            <p>© 2025 ONCRA All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;