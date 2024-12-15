"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function About() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company Inc.",
      image: "/t12.png",
      testimonial:
        "This service has been life-changing. The team is incredibly professional, and their solutions have exceeded all expectations.",
    },
    {
      name: "Salena Gomez",
      role: "CEO at Webecy Digital",
      image: "/t11.png",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      name: "Michael Johnson",
      role: "Entrepreneur",
      image: "/t13.png",
      testimonial:
        "Working with them has been a fantastic experience. Their dedication to quality and customer satisfaction is unmatched.",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleTestimonialChange = (index:number) => {
    setCurrentTestimonialIndex(index);
  };

  const testimonial = testimonials[currentTestimonialIndex];

  return (
    <>
      <div className="min-h-screen py-10 bg-gray-50">
        {/* Header */}
        <header className="bg-gray-100">
          <div className="w-full py-8 bg-[#EEF2FF]">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#1A2238]">About Us</h1>
              <nav className="text-sm text-gray-500 mt-2">
                <ol className="flex space-x-2">
                  <li>
                    <a href="/" className="text-gray-700 hover:underline">
                      Home
                    </a>
                  </li>
                  <li>/</li>
                  <li className="text-blue-600 font-semibold">About Us</li>
                </ol>
              </nav>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center px-4 md:px-16 py-8 md:py-12">
          {/* Image */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src="/ab1.png"
              alt="E-commerce History"
              width={555}
              height={390}
              className="rounded-md shadow-lg border-l-4 border-t-4 border-blue-500"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2238]">
              Discover Our E-commerce Journey
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada,
              felis id aliquet bibendum, erat est sollicitudin orci, at blandit eros purus
              non augue. Integer et velit mollis, feugiat odio id, tempus ligula.
            </p>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
              Contact Us
            </button>
          </div>
        </section>

        {/* Service Cards */}
        <section className="container mx-auto px-4 md:px-16 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-md p-6 flex flex-col items-center transform hover:scale-105 transition-transform border-t-4 border-blue-400"
              >
                <Image
                  src={`/c${i + 1}.png`}
                  alt={`Service ${i + 1}`}
                  width={65}
                  height={65}
                  className="mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Our Clients Say!
            </h2>

            <div className="text-center">
              {/* Thumbnails */}
              <div className="flex justify-center space-x-3 mb-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all focus:outline-none ${
                      index === currentTestimonialIndex
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleTestimonialChange(index)}
                  >
                    <img
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Testimonial Content */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-sm md:text-base text-gray-500 mb-4">
                {testimonial.role}
              </p>
              <blockquote className="text-gray-600 italic">
                "{testimonial.testimonial}"
              </blockquote>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
