import React from "react";
import { Brain, Zap, Shield } from "lucide-react";

const AISection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-hostaway-light-bg to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hostaway-gray mb-6">
            Hostaway AI
          </h2>
          <p className="text-xl text-hostaway-light-gray max-w-4xl mx-auto">
            Maximize revenue, minimize effort—smarter hosting with AI-driven
            automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* AI Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/Images/ai-panel-hero-en-US-03b2220e938845d1a2efaea6df149fb6.webp"
              alt="Hostaway AI Dashboard"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
          </div>

          {/* AI Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-hostaway-orange rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
                Optimized pricing and revenue
              </h3>
              <p className="text-hostaway-light-gray leading-relaxed">
                Earn 22.3% more revenue per listing with Dynamic Pricing and
                seamless cross-channel distribution.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-hostaway-green rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
                Automated guest communication and task management
              </h3>
              <p className="text-hostaway-light-gray leading-relaxed">
                Automate 93% of your guest and staff messaging and with the help
                of AI and intelligent routing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="w-16 h-16 bg-hostaway-orange rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-hostaway-gray mb-4">
                Secure, automated payments
              </h3>
              <p className="text-hostaway-light-gray leading-relaxed">
                Capture more revenue with greater protection, without lifting a
                finger.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn-primary">Discover Hostaway AI</button>
        </div>
      </div>
    </section>
  );
};

export default AISection;
