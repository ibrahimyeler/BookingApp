import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Menu</h1>

      {/* User Profile and Account Settings */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">User Profile and Account Settings</h2>
        <ul className="list-disc pl-5">
          <li>Edit Profile Information</li>
          <li>Change Password</li>
          <li>Manage Login Methods</li>
        </ul>
      </section>

      {/* Notification Settings */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Notification Settings</h2>
        <ul className="list-disc pl-5">
          <li>Email Notifications</li>
          <li>Push Notifications</li>
          <li>SMS Notifications</li>
        </ul>
      </section>

      {/* Security and Privacy */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Security and Privacy</h2>
        <ul className="list-disc pl-5">
          <li>Two-Factor Authentication</li>
          <li>Privacy Settings</li>
          <li>Account Activities</li>
        </ul>
      </section>

      {/* Theme and Appearance */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Theme and Appearance</h2>
        <ul className="list-disc pl-5">
          <li>Theme Selection</li>
          <li>Language and Region</li>
          <li>Font and Color Settings</li>
        </ul>
      </section>

      {/* Application Settings */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Application Settings</h2>
        <ul className="list-disc pl-5">
          <li>App Preferences</li>
          <li>Language Selection</li>
          <li>Data Usage</li>
        </ul>
      </section>

      {/* Help and Support */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Help and Support</h2>
        <ul className="list-disc pl-5">
          <li><Link to="/faq" className="text-blue-500 hover:underline">FAQ</Link></li>
          <li><Link to="/contact" className="text-blue-500 hover:underline">Contact Support</Link></li>
          <li><Link to="/feedback" className="text-blue-500 hover:underline">Provide Feedback</Link></li>
        </ul>
      </section>

      {/* Account Closure */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Account Closure</h2>
        <p>If you wish to permanently delete your account, please <Link to="/delete-account" className="text-red-500 hover:underline">click here</Link>.</p>
      </section>
    </div>
  );
};

export default Menu;
