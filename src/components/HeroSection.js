import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-hostaway-light-bg to-orange-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-hostaway-gray">
                Grow Your Business with
              </span>
              <br />
              <span className="text-hostaway-orange">
                Hostaway's All-in-One
              </span>
              <br />
              <span className="text-hostaway-orange">
                Vacation Rental Software
              </span>
            </h1>

            <p className="text-lg text-hostaway-gray leading-relaxed">
              Hostaway Vacation Rental Software and Airbnb Management System
              Helps You Grow Your Property Management Business By Automating &
              Streamlining Every Aspect Of Your Business across Airbnb, Vrbo,
              Booking.com, Expedia, and others.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Get pricing</button>
              <button className="btn-secondary">Get started</button>
            </div>
          </div>

          {/* Right Column - Software UI Mockup */}
          <div className="relative">
            <img
              src="/images/home-en-US-ec578c0cf5117b3f17dc656e4ebf0bc5.webp"
              alt="Hostaway Dashboard"
              className="w-full h-auto rounded-2xl shadow-soft"
            />

            {/* Hostaway AI Image Overlay */}
            <div className="absolute -top-4 -right-4">
              <img
                src="/images/ai-panel-hero-en-US-03b2220e938845d1a2efaea6df149fb6.webp"
                alt="Hostaway AI"
                className="w-32 h-32 rounded-xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
