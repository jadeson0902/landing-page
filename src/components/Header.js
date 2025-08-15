import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Features", hasDropdown: true },
    { name: "Marketplace", hasDropdown: false },
    { name: "Pricing", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
    { name: "Company", hasDropdown: true },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center justify-center w-full gap-2">
            <img src="/logo1.svg" alt="Hostaway" className="h-10" />
            <img src="/logo2.svg" alt="Hostaway" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button className="flex items-center text-hostaway-gray hover:text-hostaway-orange transition-colors">
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button className="flex items-center text-hostaway-gray hover:text-hostaway-orange transition-colors">
                English
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a
              href="#"
              className="text-hostaway-gray hover:text-hostaway-orange transition-colors"
            >
              Help Center
            </a>
            <a
              href="#"
              className="text-hostaway-gray hover:text-hostaway-orange transition-colors"
            >
              Login
            </a>
            <button className="btn-primary text-sm px-6 py-2">
              Get started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-hostaway-gray hover:text-hostaway-orange"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="block px-3 py-2 text-hostaway-gray hover:text-hostaway-orange transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href="#"
                  className="block px-3 py-2 text-hostaway-gray hover:text-hostaway-orange"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-hostaway-gray hover:text-hostaway-orange"
                >
                  Login
                </a>
                <button className="w-full btn-primary text-sm px-6 py-2 mt-4">
                  Get started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
