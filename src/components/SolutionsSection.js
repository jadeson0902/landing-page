import React from "react";
import {
  Home,
  MessageSquare,
  BarChart3,
  Settings,
  Globe,
  CreditCard,
  Users,
  Zap,
} from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Home,
      title: "Property Management",
      subtitle:
        "The highest-rated Property Management System for Vacation Rental Property Managers",
      features: [
        "Property Management System (PMS)",
        "Reservations Manager",
        "Performance Dashboard",
        "CRM & Lead Management",
      ],
    },
    {
      icon: Globe,
      title: "Channel Manager",
      subtitle:
        "Hostaway's proprietary channel manager is the core of the platform, which connects you seemlesly to Airbnb, Vrbo, Booking.com, Expedia, Marriott, and many more.",
      features: [
        "Channel Manager",
        "Distribution Channels",
        "Multi-Calendar",
        "Multi-Unit Support",
        "Cross-listings",
      ],
    },
    {
      icon: MessageSquare,
      title: "Communication",
      subtitle:
        "All the communication tools a vacation rental property manager needs, with an industry leading unified inbox",
      features: [
        "Unified Inbox",
        "Automated Messages",
        "Owner Portal",
        "Guest Portal",
        "SMS & Whatsapp",
        "Online Check-In Form",
      ],
    },
    {
      icon: BarChart3,
      title: "Marketing",
      subtitle:
        "All the tools you need to market those properties with the respect they deserve. Make yourself proud!",
      features: [
        "Booking Website",
        "WordPress plugin",
        "Coupon Management",
        "Direct Booking Website Builder",
        "Upsells",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytics and Reporting",
      subtitle:
        "Hostaway's Analytics & Reporting gives property managers valuable insights into their vacation rental business",
      features: [
        "Analytics & Reporting",
        "Occupancy Reports",
        "Dynamic Pricing",
        "Owner Statements",
        "Financial Reporting",
        "Expense Tracking",
      ],
    },
    {
      icon: Settings,
      title: "Services",
      subtitle:
        "Hostaway always brings the most useful, versatile and reliable technology available to their partners.",
      features: [
        "Notifications",
        "Mobile App",
        "Open API",
        "Revenue Management",
      ],
    },
    {
      icon: Zap,
      title: "Automation Tools",
      subtitle:
        "Hostaway automates every single repetitive task in the world of vacation rentals.",
      features: [
        "Automated Messages",
        "Automated Reviews",
        "Automated Tasks",
        "Automated Payments",
      ],
    },
    {
      icon: Users,
      title: "Vacation Rental Operations",
      subtitle:
        "Manage every aspect of your daily operations with detail and automations, and feel good about delegating tasks with ease.",
      features: [
        "Payment Processing",
        "Contract Signature",
        "Guest invoicing",
        "Automated Payments",
        "Smartlocks",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-soft transition-shadow"
            >
              <div className="w-12 h-12 bg-hostaway-orange rounded-xl flex items-center justify-center mb-4">
                <solution.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-lg font-bold text-hostaway-gray mb-2">
                {solution.title}
              </h3>

              <p className="text-sm text-hostaway-light-gray mb-4 leading-relaxed">
                {solution.subtitle}
              </p>

              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-hostaway-gray">
                    • {feature}
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

export default SolutionsSection;
