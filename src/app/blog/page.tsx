import React from "react";  
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { RxInstagramLogo } from 'react-icons/rx';
import Image from "next/image";

const MyBlogPage: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "December 9, 2024",
      tagline: "Managing State in React with Ease",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      imageSrc: "/b1.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      {/* Header Section */}
      <div className="relative w-full h-[200px] bg-gradient-to-r from-[#F6F5FF] to-[#EAE8FF] text-left px-4 sm:px-6 md:px-8 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-[#151875] font-extrabold text-3xl md:text-5xl">Our Blog</h1>
          <p className="mt-2 text-gray-600">
            Home &gt; Page &gt; <span className="text-pink-500 font-medium">Blog</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12">
        {/* Blog Posts */}
        <div className="lg:col-span-3 space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={article.imageSrc}
                alt={article.title}
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#151875]">{article.title}</h2>
                <p className="text-sm text-gray-500 mt-2 italic">{article.tagline}</p>
                <p className="text-base text-gray-700 mt-4">{article.description}</p>
                <button className="text-pink-500 mt-6 hover:text-[#151875] underline font-medium">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Search */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#151875]">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="mt-4 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Follow Us */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#151875]">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <FaFacebook className="text-2xl text-gray-700 hover:text-pink-500 cursor-pointer" />
              <RxInstagramLogo className="text-2xl text-gray-700 hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="text-2xl text-gray-700 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>
        </aside>
      </div>

      <div className="flex justify-center mt-12">
        <Image src="/bg2.png" alt="Footer Image" width={900} height={93} />
      </div>
    </section>
  );
};

export default MyBlogPage;
