// src/pages/Settings.jsx
import React, { useState, useEffect } from "react";

const Settings = () => {
  // State for theme switch
  const [darkMode, setDarkMode] = useState(false);

  // State for font selection
  const [font, setFont] = useState("sans-serif");

  // Apply theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Handle font change
  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  return (
    <>
      <div className={`container mx-auto px-4 py-8 space-y-8 font-${font}`}>
        <h2 className="text-3xl font-bold mb-6">Settings</h2>

        {/* Theme Switch Section */}
        <section className="flex items-center gap-4">
          <h3 className="text-xl font-semibold">Theme</h3>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </section>

        {/* Font Customization Section */}
        <section className="flex items-center gap-4">
          <h3 className="text-xl font-semibold">Font</h3>
          <select
            value={font}
            onChange={handleFontChange}
            className="p-2 border rounded"
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="mono">Monospace</option>
          </select>
        </section>

        {/* Additional Options Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold mb-2">Additional Options</h3>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="comments" className="w-5 h-5" />
            <label htmlFor="comments" className="text-lg">
              Enable Comments
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="notifications" className="w-5 h-5" />
            <label htmlFor="notifications" className="text-lg">
              Enable Notifications
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="content-display" className="w-5 h-5" />
            <label htmlFor="content-display" className="text-lg">
              Display Full Content in Feed
            </label>
          </div>
        </section>
      </div>
    </>
  );
};

export default Settings;
