import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-slate-50 text-slate-800 font-playfair">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl font-extrabold font-playfair mb-4">
          About QuickStay
        </h1>
        <p className="text-lg leading-relaxed">
          At <strong>QuickStay</strong>, we help you explore the world with ease
          and comfort. Whether you're looking for luxurious retreats or
          budget-friendly getaways, we provide a seamless booking experience
          tailored just for you.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg mt-12 w-full max-w-5xl p-8 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold font-playfair mb-3">
            What We Do
          </h2>
          <p className="text-base leading-relaxed">
            QuickStay connects travelers with premium hotel accommodations
            across top destinations. Our platform makes it easy to:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-base">
            <li>Book luxury and budget-friendly rooms</li>
            <li>Read verified guest reviews and ratings</li>
            <li>View comprehensive amenities and features</li>
            <li>Apply smart filters for customized searches</li>
            <li>Enjoy a fast and secure booking process</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold font-playfair mb-3">
            Why Choose QuickStay?
          </h2>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li>Carefully selected hotels for quality and comfort</li>
            <li>Transparent pricing with no hidden fees</li>
            <li>Effortless filtering to find your ideal room</li>
            <li>Responsive 24/7 customer support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold font-playfair mb-3">
            Our Mission
          </h2>
          <p className="text-base leading-relaxed">
            To simplify travel planning by offering a smooth, visually
            appealing, and highly functional hotel booking experience that
            inspires confidence and excitement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-playfair font-semibold mb-3">
            The QuickStay Experience
          </h2>
          <p className="text-base leading-relaxed">
            Whether you're looking for free breakfast, fast Wi-Fi, scenic views,
            or poolside relaxation, QuickStay properties are designed to make
            your trip unforgettable. More than a room—it's an experience.
          </p>
        </section>
      </div>

      <p className="mt-12 text-center font-semibold text-lg max-w-3xl">
        QuickStay – Stay Smart. Stay Comfortable. Stay Inspired.
      </p>
    </div>
  );
};

export default About;
