export default function Body() {
  return (
    <section className="py-16 bg-white text-gray-800 text-center px-4">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Web Development */}
        <div className="p-6 border rounded-lg shadow text-left">
          <h3 className="text-xl font-semibold mb-2 text-center">Web Development</h3>
          <p className="text-sm mb-4 text-center">
            Custom websites built with the latest technologies.
          </p>
          <ul className="list-disc pl-4 text-sm text-gray-700 mb-4">
            <li>React, Next.js, Vite</li>
            <li>Responsive Design</li>
            <li>Backend Integration</li>
          </ul>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwooJHsopf3M4vAiPQOYp1AJLtRzdPCtAs9g&s"
            alt="Web Dev"
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>

        {/* UI/UX Design */}
        <div className="p-6 border rounded-lg shadow text-left">
          <h3 className="text-xl font-semibold mb-2 text-center">UI/UX Design</h3>
          <p className="text-sm mb-4 text-center">
            Beautiful and intuitive interfaces for your users.
          </p>
          <ul className="list-disc pl-4 text-sm text-gray-700 mb-4">
            <li>Wireframing & Prototyping</li>
            <li>Figma & Adobe XD</li>
            <li>Design Systems</li>
          </ul>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqak8ODA7SJv7hiRHv5dtzauFSK1AmGiYusQ&s"
            alt="UI/UX Design"
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>

        {/* SEO Optimization */}
        <div className="p-6 border rounded-lg shadow text-left">
          <h3 className="text-xl font-semibold mb-2 text-center">SEO Optimization</h3>
          <p className="text-sm mb-4 text-center">
            Improve your visibility and reach more customers.
          </p>
          <ul className="list-disc pl-4 text-sm text-gray-700 mb-4">
            <li>On-Page SEO</li>
            <li>Keyword Research</li>
            <li>Google Analytics & Search Console</li>
          </ul>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPnBRSbrQWb6m0bwzTeoedSNacH9gQ1Z4Vg&s"
            alt="SEO"
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>
        
      </div>
    </section>
  );
}
