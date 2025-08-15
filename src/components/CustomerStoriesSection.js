import React from "react";

const CustomerStoriesSection = () => {
  const stories = [
    {
      title:
        "Toronto's Largest STR Manager Grows 642% Since Starting With Hostaway",
      author: "Brad Edelson",
      position: "Co-Owner & COO, Host Services Group",
      location: "Toronto, ON, Canada",
      growth: "642%",
      image: "/images/host-service-group-opt.webp",
    },
    {
      title:
        "Property Management Company Grows 180% After 6 Months With Hostaway",
      author: "Matt Barbuzzi",
      position: "Partner & CTO, Park Place Properties",
      location: "Toronto, ON, Canada",
      growth: "180%",
      image: "/images/park-place-opt.webp",
    },
    {
      title: "Lifty Life Grows 6x with Hostaway",
      author: "Connor Griffiths",
      position: "CEO of Lifty Life",
      location: "Canada",
      growth: "6x",
      image: "/images/liftylife-opt.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-hostaway-gray mb-6">
            Customer Stories
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-soft transition-shadow"
            >
              <div className="mb-6">
                <img
                  src={story.image}
                  alt={story.author}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="inline-block bg-hostaway-orange text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {story.growth} Growth
                </div>
                <h3 className="text-xl font-bold text-hostaway-gray mb-4 leading-tight">
                  {story.title}
                </h3>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-hostaway-orange text-lg">
                  {story.author}
                </div>
                <div className="text-hostaway-gray text-sm">
                  {story.position}
                </div>
                <div className="text-hostaway-light-gray text-sm">
                  {story.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;
