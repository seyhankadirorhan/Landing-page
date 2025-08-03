export default function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg mb-6 max-w-xl">
        We provide high-quality services to help you grow your business online.
      </p>
      <a
        href="#contact"
        className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition"
      >
        Get in Touch
      </a>
    </section>
  );
}
