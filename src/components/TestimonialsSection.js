import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Zalman S",
      review:
        "Fabulous product with all the necessary features. Great customer support",
      rating: 5,
    },
    {
      name: "Drew P",
      review:
        "Hostaway has been a great company to work with. Great customer service and everything is as promised and advertised.",
      rating: 5,
    },
    {
      name: "Keiran G",
      review:
        "The software solves a lot of issues for me, but three core problems were solved because of Hostaway. 1) Channel distribution, 2) Automated guest communication, 3) Cleaning/task coordination.",
      rating: 5,
    },
    {
      name: "kim o",
      review:
        "We found Hostaway to be the perfect option for our property management side of the business. Hostaway team went above and beyond meeting with us to get us started and through the first few months of operation. Now we deal primarily with the customer service via the app, and they get back to us immediately. They will either fix the issue we're having or we dialogue and troubleshoot to fix. They are constantly working to streamline the program for property managers in terms of calendar updates, updating listings etc. We host between 20-30 properties and they've been great to work with. Highly recommend.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hostaway-gray mb-6">
            Trusted By Thousands Of Successful Vacation Rental Property Managers
            Globally
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-soft transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-hostaway-gray mb-4 leading-relaxed">
                "{testimonial.review}"
              </p>

              <div className="font-semibold text-hostaway-orange">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
