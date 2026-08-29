import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'Alex Mercer',
    email: 'alex.mercer@example.com',
    currency: 'USD ($)'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };
  return (
    <>
      <div className={`flex min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'}`}>

        {/* Sidebar Layout */}
        {/* <aside className={`w-64 border-r ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
          <h2 className="text-xl font-bold text-blue-600 mb-8">Tracker Settings</h2>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-colors ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 hover:text-blue-600'}`}
            >
              Edit Profile
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`w-full text-left px-4 py-2.5 rounded-lg font-medium transition-colors ${activeTab === 'preferences' ? 'bg-blue-600 text-white' : 'hover:bg-blue-50 hover:text-blue-600'}`}
            >
              Preferences
            </button>
          </nav>
        </aside> */}

        {/* Main Settings Content Area */}
        <main className="flex-1 p-10 max-w-4xl">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Account Management</h1>

            {/* Theme Mode Toggle Action */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-full font-semibold border text-sm transition-all flex items-center gap-2 ${darkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-100'}`}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </header>

          {activeTab === 'profile' && (
            <section className={`p-6 rounded-xl border shadow-sm ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Edit Profile</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1.5 opacity-80">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className={`w-full p-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-50 border-slate-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 opacity-80">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className={`w-full p-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-50 border-slate-300'}`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5 opacity-80">Default Currency</label>
                  <select
                    name="currency"
                    value={profile.currency}
                    onChange={handleInputChange}
                    className={`w-full p-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-slate-50 border-slate-300'}`}
                  >
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>PKR (Rs)</option>
                  </select>
                </div>
                <button className="mt-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                  Save Changes
                </button>
              </form>
            </section>
          )}
        </main>
      </div>

    </>
  )
}

export default Settings
