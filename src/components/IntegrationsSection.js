import React from "react";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Airbnb", logo: "/Images/airbnb.webp", bgColor: "bg-pink-500" },
    { name: "Vrbo", logo: "/Images/vrbo.webp", bgColor: "bg-blue-600" },
    {
      name: "Booking.com",
      logo: "/Images/bookingcom.webp",
      bgColor: "bg-blue-600",
    },
    { name: "Expedia", logo: "/Images/expedia.webp", bgColor: "bg-yellow-400" },
    {
      name: "Google Travel",
      logo: "/Images/google-travel.webp",
      bgColor: "bg-blue-400",
    },
    { name: "Stripe", logo: "/Images/stripe.webp", bgColor: "bg-purple-600" },
    {
      name: "Tripadvisor",
      logo: "/Images/tripadvisor.webp",
      bgColor: "bg-green-500",
    },
    { name: "Operto", logo: "/Images/operto.webp", bgColor: "bg-purple-700" },
    {
      name: "Breezeway",
      logo: "/Images/breezeway.webp",
      bgColor: "bg-blue-400",
    },
    { name: "Turno", logo: "/Images/turno.webp", bgColor: "bg-teal-600" },
    {
      name: "PriceLabs",
      logo: "/Images/pricelabs.webp",
      bgColor: "bg-red-500",
    },
    {
      name: "Beyond",
      logo: "/Images/beyondpricing.webp",
      bgColor: "bg-teal-700",
    },
    {
      name: "Wheelhouse",
      logo: "/Images/wheelhouse.webp",
      bgColor: "bg-pink-600",
    },
    { name: "Stayfi", logo: "/Images/stayfi.webp", bgColor: "bg-blue-400" },
    { name: "Zapier", logo: "/Images/zapier.webp", bgColor: "bg-orange-500" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
              200+ Integrations that Boost your Business To Help Grow Your
              Vacation Rental Management Business
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Hostaway has the industry's strongest and most reliable
              integrations bar none. Premier partnerships with OTAs means you'll
              never have a double booking. Third-party solutions let you master
              every aspect of your business, all from the comfort of the
              Hostaway Dashboard. If you're a builder yourself, our
              best-in-class Open API has everything to make it your own.
            </p>
          </div>

          {/* Right Section - Integrations Grid */}
          <div className="bg-white rounded-3xl p-8 shadow-soft">
            <div className="grid grid-cols-5 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className={`${integration.bgColor} rounded-xl p-3 flex items-center justify-center h-16`}
                >
                  <img
                    src={integration.logo}
                    alt={integration.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
