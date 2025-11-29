'use client';

import { useState } from 'react';
import { Icon } from './icons/icon';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const menuItems = [
    { name: "Dashboard", icon: <Icon name='dashboard' w={30} h={30} /> },

  ];

  return (
    <div className="flex h-full">
      <aside
        className={`
          relative flex flex-col transition-all duration-300
          bg-limeV-900 text-neutV-100 border-l border-neutV-800
          ${isExpanded ? 'w-64' : 'w-16'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutV-800">
          {isExpanded && (
            <span className="rounded-full text-black dark:text-white bg-neutV-200 w-16 h-16 flex justify-center items-center">Logo</span>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-neutV-800 transition-colors duration-200"
          >
            <Icon name='arrow' />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 mt-4">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="
        group flex items-center px-4 py-3 rounded-xl 
        text-neutV-300 hover:bg-neutV-800 
        transition-all duration-200 text-2xl
      "
            >
              <span className="w-8 h-8 flex text-lg">
                {item.icon}
              </span>

              <span
                className={`
          font-medium transition-all duration-300
          ${isExpanded ? "opacity-100 ml-2" : "opacity-0 w-0 overflow-hidden"}
        `}
              >
                {item.name}
              </span>
            </a>
          ))}
        </nav>

      </aside>
    </div>
  );
}
