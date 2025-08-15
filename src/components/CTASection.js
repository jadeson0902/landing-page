import React from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hostaway-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-hostaway-gray mb-6">
            Ready to find out how Hostaway can transform your business?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4">
              Get pricing
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Request a Demo
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft max-w-4xl mx-auto">
            <p className="text-hostaway-gray leading-relaxed mb-4">
              Launched in 2015, Hostaway has helped thousands of vacation rental
              property managers regain their focus on growing their business.
              Hostaway takes pride in aligning itself with the needs of the fast
              evolving landscape and always provide reliable technology and
              great support. Sign up today!
            </p>
            <p className="text-hostaway-gray leading-relaxed">
              Don't get stuck in a broken routine with poor software, manage
              your properties with Hostaway and experience a better business and
              life right away!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
