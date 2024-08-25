import React, { useState } from 'react';

const ProfilePage: React.FC = () => {
  const [username, setUsername] = useState<string>('John Doe');
  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('en');
  const [avatar, setAvatar] = useState<string | null>(null); // Avatar resmi için state

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result as string); // Resmi base64 string olarak kaydet
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Profile Settings</h1>
        
        {/* Avatar Yükleme */}
        <div className="flex flex-col items-center mb-4">
          {avatar ? (
            <img src={avatar} alt="Avatar" className="w-24 h-24 rounded-full mb-2 shadow-md" />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-2">
              <span className="text-gray-500">No Avatar</span>
            </div>
          )}
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Avatar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="text-sm text-gray-600"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username:</label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Theme Selection */}
        <div className="mb-4">
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">Theme:</label>
          <select
            id="theme"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={theme}
            onChange={handleThemeChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Language Selection */}
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-2">Language:</label>
          <select
            id="language"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
          </select>
        </div>

        {/* Save Button */}
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:outline-none">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
