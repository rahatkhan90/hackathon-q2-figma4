import Image from "next/image";
import HeroSection from "@/components/herosection";
import ProductDisplay from "@/components/featuredproduct";
import LatestProduct from "@/components/latestproducts";
import Supportpage from "@/components/supportpage";
import DiscountItem from "@/components/discountitems";
import Uniquefeature from "@/components/uniquefeature";
import Trendingproducts from "@/components/trendingproducts";
import Threecolumns from "@/components/3cols";
import Circleitems from "@/components/topcategories";
import SectionWithBackground from "@/components/sectionwithbg";
import LeatestBlog from "@/components/blogsection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="flex justify-center w-full">
            <HeroSection />
          </div>

          {/* Product Display */}
          <div className="flex justify-center w-full">
            <ProductDisplay />
          </div>

          {/* Latest Product */}
          <div className="flex justify-center w-full">
            <LatestProduct />
          </div>

          {/* Support Page */}
          <div className="flex justify-center w-full">
            <Supportpage />
          </div>

          {/* Unique Feature */}
          <div className="flex justify-center w-full">
            <Uniquefeature />
          </div>

          {/* Trending Products */}
          <div className="flex justify-center w-full">
            <Trendingproducts />
          </div>

          {/* Three Columns Section */}
          <div className="flex justify-center w-full md:flex md:space-x-4">
            <Threecolumns />
          </div>

          {/* Discount Items */}
          <div className="flex justify-center w-full">
            <DiscountItem />
          </div>

          {/* Circle Items */}
          <div className="flex justify-center w-full">
            <Circleitems />
          </div>

          {/* Section with Background */}
          <div className="flex justify-center w-full">
            <SectionWithBackground />
          </div>

          {/* Latest Blog */}
          <div className="flex justify-center w-full">
            <LeatestBlog />
          </div>
        </div>
      </div>
    </div>
  );
}
