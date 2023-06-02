import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="text-center text-xl dark:text-cyan-600 hover:text-gray-700 dark:hover:text-gray-300 py-5 font-bold col-2q">
        Who We Are
      </h1>
      <p className="text-center py-5 sm:text-xl">
        Global Changemakers is a youth organisation and global pioneer in
        supporting youth-led enterpreneurship development.{" "}
      </p>
      
      <p className="text-center py-5 text-lg col-2 font-bold mt-4 sm:text-2xl">
        Our mission is to support youth to create positive change towards more
        inclusive, fair, and sustainable communities. We do this by providing
        skills development, capacity building, mentoring, and grants.
      </p>

      <p className="text-center py-5 text-lg col-2  mt-4 sm:text-xl">
        Young people are the key to success for the Sustainable Development
        Goals, yet donor funding rarely goes to young people and youth-led
        projects. Even when funding may be available, support and resources to
        develop the skills and capacity of these young leaders are often
        missing. Global Changemakers works to fill this gap - and the results
        are astounding.
      </p>
    </div>
  );
}
