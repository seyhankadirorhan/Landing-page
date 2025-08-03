export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Team Members */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Team Members</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <p className="font-medium">Seyhan Kadir Orhan</p>
              <p className="text-sm">📞 +90 544 234 40 30</p>
            </li>
            <li>
              <p className="font-medium">Abdihakim Gedi</p>
              <p className="text-sm">📞 +90 544 234 40 30</p>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Locations</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Turkey</li>
            <li>Somalia</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="md:col-span-1 flex items-center justify-center md:justify-end">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Founders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
