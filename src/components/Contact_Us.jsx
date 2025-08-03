export default function ContactUs() {
  return (
    <section id="contact" className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-8 text-gray-700">We'd love to hear from you. Please fill out the form below.</p>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Name" className="p-3 border rounded" />
        <input type="email" placeholder="Email" className="p-3 border rounded" />
        <textarea placeholder="Message" rows="5" className="p-3 border rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
