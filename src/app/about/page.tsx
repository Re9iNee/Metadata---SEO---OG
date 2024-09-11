export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Us
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-600 text-lg">
            Welcome to our company! We are dedicated to providing the best
            services to our customers. Our team is composed of highly skilled
            professionals who are passionate about what they do. We believe in
            creating value and delivering exceptional results for our clients.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Our mission is to continuously innovate and improve in order to meet
            and exceed the expectations of those we serve. We pride ourselves on
            our strong work ethic, integrity, and commitment to excellence.
          </p>
          <p className="text-gray-600 text-lg mt-4">
            Thank you for choosing us. We look forward to working together!
          </p>
        </div>
      </div>
    </div>
  );
}
