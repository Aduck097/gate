import React, { useState } from 'react';
import { Home, Result, Daily, Navbar, Footer, Calculating } from './components';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [userData, setUserData] = useState(null);

  const handleCalculate = (data: any) => {
    setUserData(data);
    setCurrentView('calculating');
    setTimeout(() => {
      setCurrentView('result');
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-amber-500/30">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-16 h-24 bg-amber-500/20 rounded-full blur-2xl lantern"></div>
        <div className="absolute top-40 right-32 w-20 h-24 bg-amber-500/10 rounded-full blur-2xl lantern-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-12 h-16 bg-amber-500/15 rounded-full blur-xl lantern"></div>
      </div>

      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-1 relative flex flex-col items-center justify-center w-full">
        {currentView === 'home' && <Home onCalculate={handleCalculate} />}
        {currentView === 'calculating' && <Calculating />}
        {currentView === 'result' && <Result userData={userData} onBack={() => setCurrentView('home')} />}
        {currentView === 'daily' && <Daily />}
      </main>

      <Footer />
    </div>
  );
}
