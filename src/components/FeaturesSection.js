import React from "react";
import { TrendingUp, Clock, Layers } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "More Bookings, More Business",
      description:
        "Expand your reach, automate pricing and messaging, and get the analytics to help you make better decisions",
      items: [
        "Get listed across all major online travel agencies",
        "Set the right price with dynamic pricing",
        "Build your own direct booking site",
      ],
    },
    {
      icon: Clock,
      title: "Save Time, Grow Faster",
      description:
        "Automate tedious, repeatable tasks to free up time and grow your business",
      items: [
        "Write guest communications and listing descriptions in seconds with in-platform GenAI",
        "Prompt guests to leave reviews with automatic reminders",
        "Capture payments and effortlessly keep an eye on financial health",
      ],
    },
    {
      icon: Layers,
      title: "Do It All-in-One Place",
      description:
        "Channel management, PMS, calendars, messages and reviews all managed in one centralized dashboard",
      items: [
        "One powerful software that scales with you from 2 to 2,000 listings",
        "Award-winning 24/7 support team for you when you need it most",
        "Wave bye-bye to your mile-high tech stack",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hostaway-gray mb-6">
            Vacation Rental Software that scales with your business
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow"
            >
              <div className="w-16 h-16 bg-hostaway-orange rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
                {feature.title}
              </h3>

              <p className="text-hostaway-light-gray mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-hostaway-orange rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-hostaway-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
