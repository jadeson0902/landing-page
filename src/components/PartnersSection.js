import React from "react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Airbnb",
      status: "2025 Airbnb Preferred Partner",
      logo: "/images/airbnb.webp",
    },
    {
      name: "Vrbo",
      status: "2025 Vrbo Elite Partner",
      logo: "/images/vrbo.webp",
    },
    {
      name: "Booking.com",
      status: "2025 Premier Partner",
      logo: "/images/bookingcom.webp",
    },
    {
      name: "Google Vacation Rentals",
      status: "Connect for free",
      logo: "/images/google-travel.webp",
    },
    {
      name: "Marriott Homes & Villas",
      status: "Advanced API integration",
      logo: "/images/homes-villas-marriot-3ae2f503402009bc893ec369303e907b.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-hostaway-gray mb-4">
            Preferred Partner with Airbnb, Vrbo, Booking.com & More
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-soft transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mx-auto mb-4"
              />
              <p className="text-hostaway-gray text-sm">{partner.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
