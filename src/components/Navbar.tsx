import React from 'react';

export function Navbar({ currentView, setCurrentView }: { currentView: string, setCurrentView: (v: string) => void }) {
  const navItems = [
    { id: 'home', label: '周易算命' },
    { id: 'ziwei', label: '紫微斗数' },
    { id: 'divination', label: '测字求签' },
    { id: 'daily', label: '每日运势' },
    { id: 'user', label: '用户中心' },
  ];

  return (
    <nav className="w-full py-6 px-8 flex items-center justify-between border-b border-amber-900/30 relative z-50">
      <div className="flex items-center space-x-8 w-full max-w-6xl mx-auto">
        <div className="flex space-x-8 flex-1 justify-end">
          {navItems.slice(0, 3).map(item => (
            <button 
              key={item.id}
              onClick={() => setCurrentView(item.id === 'daily' ? 'daily' : 'home')}
              className={`text-sm font-serif tracking-widest hover:text-amber-400 transition-colors ${currentView === item.id ? 'text-amber-400 border-b border-amber-400 pb-1' : 'text-gray-300'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="text-5xl font-serif text-gold font-bold tracking-widest px-12 cursor-pointer" onClick={() => setCurrentView('home')}>
          神算阁
        </div>

        <div className="flex space-x-8 flex-1 justify-start">
          {navItems.slice(3).map(item => (
            <button 
              key={item.id}
              onClick={() => setCurrentView(item.id === 'daily' ? 'daily' : 'home')}
              className={`text-sm font-serif tracking-widest hover:text-amber-400 transition-colors ${currentView === item.id ? 'text-amber-400 border-b border-amber-400 pb-1' : 'text-gray-300'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
