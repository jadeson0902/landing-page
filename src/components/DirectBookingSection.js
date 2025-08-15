import React from "react";
import { Globe, Code, Zap } from "lucide-react";

const DirectBookingSection = () => {
  return (
    <section className="py-20 bg-hostaway-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hostaway-gray mb-6">
            Increased Bookings & Profit From Your Own Direct Booking Website
          </h2>
          <p className="text-xl text-hostaway-light-gray max-w-4xl mx-auto">
            Create a beautiful and converting direct booking website with the
            Hostaway website builder and drive direct reservations! Already have
            a website? Add the Hostaway Wordpress plugin to your existing site
            or build custom solutions with our open API.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow text-center">
            <div className="w-16 h-16 bg-hostaway-orange rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
              Website Builder
            </h3>
            <p className="text-hostaway-light-gray leading-relaxed">
              Create a beautiful and converting direct booking website with our
              easy-to-use website builder.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow text-center">
            <div className="w-16 h-16 bg-hostaway-green rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
              WordPress Plugin
            </h3>
            <p className="text-hostaway-light-gray leading-relaxed">
              Add the Hostaway WordPress plugin to your existing site for
              seamless integration.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow text-center">
            <div className="w-16 h-16 bg-hostaway-orange rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
              Custom Solutions
            </h3>
            <p className="text-hostaway-light-gray leading-relaxed">
              Build custom solutions with our open API to meet your specific
              business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectBookingSection;
