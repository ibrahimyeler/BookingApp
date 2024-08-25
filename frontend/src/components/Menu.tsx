import React from 'react';

const Menu: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          {/* Menü içeriğini buraya ekleyebilirsiniz */}
          <span className="text-white text-lg font-bold mr-4">Home</span>
          <span className="text-white text-lg font-bold mr-4">About</span>
          <span className="text-white text-lg font-bold">Contact</span>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
