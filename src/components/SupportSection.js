import React from "react";
import { Phone, Heart, Globe } from "lucide-react";

const SupportSection = () => {
  const supportFeatures = [
    {
      icon: Phone,
      title: "24/7 Phone Support",
      description:
        "Around-the-clock phone support service, available 24 hours a day, 7 days a week, ensuring customers can get help anytime they need it.",
    },
    {
      icon: Heart,
      title: "97%+ Customer Satisfaction",
      description:
        "A high customer satisfaction rating, with over 97% of customers expressing positive feedback about the service.",
    },
    {
      icon: Globe,
      title: "Team members in 6 continents around the world",
      description:
        "A global team presence, with staff located across six continents, providing diverse and widespread support.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hostaway-gray mb-6">
            Support section
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-hostaway-orange rounded-xl flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
                {feature.title}
              </h3>

              <p className="text-hostaway-light-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
              Don't take our word for it though
            </h3>
            <p className="text-hostaway-light-gray">
              Ask your colleagues, your friends or visit any review site or
              online group. Our customers are our proud ambassadors!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
