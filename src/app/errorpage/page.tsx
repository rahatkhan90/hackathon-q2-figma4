import Link from "next/link";
import Image from "next/image";

export default function ErrorPage() {
  return (
    <>
      {/* Header Section */}
      <header className="relative w-full h-[200px] bg-[#F6F5FF] flex items-center px-4 sm:px-6 md:px-9">
        <div className="max-w-xl">
          <h1 className="text-[#151875] font-bold text-2xl md:text-4xl">404 Not Found</h1>
          <p className="text-gray-600">
            Home . Page . <span className="text-pink-500">404 Not Found</span>
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Centered Image */}
        <div className="mb-8 w-full max-w-lg sm:max-w-xl">
          <Image
            src="/g2.png"
            alt="404 Error"
            width={800}
            height={800}
            className="rounded-lg shadow-md"
            priority
          />
        </div>

        {/* Back to Home Button */}
        <Link href="/" passHref>
          <button className="bg-pink-500 text-white text-lg font-semibold px-6 py-3 rounded-md hover:bg-pink-600 transition-shadow shadow-md hover:shadow-lg">
            Back to Home
          </button>
        </Link>
      </main>
    </>
  );
}
