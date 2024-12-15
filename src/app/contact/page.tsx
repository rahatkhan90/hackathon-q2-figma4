export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <header className="relative w-full h-[200px] bg-[#F6F5FF] flex items-center justify-start px-4 sm:px-6 md:px-9">
        <div className="max-w-xl">
          <h1 className="text-[#151875] font-bold text-2xl md:text-4xl">Contact Us</h1>
          <p className="text-gray-600">
            Home . Page . <span className="text-pink-500">Contact</span>
          </p>
        </div>
      </header>

      {/* Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Information About Us */}
          <div>
            <h2 className="text-[26px] md:text-[28px] font-bold text-[#151875] mb-4">Information About Us</h2>
            <p className="text-md text-[#8A8FB9] text-justify leading-relaxed">
              We offer premium services and products tailored to meet your needs. With years of experience, we deliver
              top-quality solutions.
            </p>
          </div>

          {/* Contact Way */}
          <div>
            <h2 className="text-[26px] md:text-[28px] font-bold text-[#151875] mb-4">Contact Way</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ContactItem
                color="bg-red-500"
                title="Tel: 877-67-88-99"
                subtitle="E-Mail: shop@store.com"
              />
              <ContactItem
                color="bg-blue-500"
                title="20 Margaret St, London"
                subtitle="Great Britain, 3NM98-LK"
              />
              <ContactItem
                color="bg-green-500"
                title="Support Forum"
                subtitle="For over 24hr"
              />
              <ContactItem
                color="bg-yellow-500"
                title="Free Standard Shipping"
                subtitle="On all orders"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-[26px] md:text-[28px] font-bold text-[#151875] mb-6">Get in Touch</h2>
            <p className="text-[#8A8FB9] text-justify leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField placeholder="Name*" />
                <InputField placeholder="Email" type="email" />
              </div>
              <InputField placeholder="Subject*" />
              <textarea
                placeholder="Type your Message*"
                rows={5}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-300"
                aria-label="Message"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center items-center">
            <img
              src="/g1.png"
              alt="Contact Us"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}

const ContactItem = ({
  color,
  title,
  subtitle,
}: {
  color: string;
  title: string;
  subtitle: string;
}) => (
  <div className="flex items-start">
    <div className={`w-10 h-10 rounded-full ${color} flex-shrink-0 mr-4`}></div>
    <div>
      <p className="text-[#151875] font-semibold text-md">{title}</p>
      <p className="text-[#8A8FB9] text-sm">{subtitle}</p>
    </div>
  </div>
);

const InputField = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-300"
    aria-label={placeholder}
  />
);
