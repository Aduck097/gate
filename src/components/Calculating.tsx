import React from 'react';

export function Calculating() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative z-10 py-32 min-h-[70vh]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-amber-900/20 blur-[100px] rounded-full animate-pulse"></div>

      <div className="relative w-[500px] h-[500px] flex items-center justify-center">
        {/* Outer mystical runes ring */}
        <div className="absolute inset-[-40px] rounded-full border border-amber-500/30 animate-[spin_20s_linear_infinite] flex items-center justify-center">
          {'子丑寅卯辰巳午未申酉戌亥'.split('').map((char, i) => (
            <div key={i} className="absolute text-amber-500/60 font-serif text-xl" style={{
              transform: `rotate(${i * 30}deg) translateY(-260px) rotate(-${i * 30}deg)`
            }}>
              {char}
            </div>
          ))}
        </div>

        {/* Fast spinning rings */}
        <div className="absolute inset-0 rounded-full border-[6px] border-amber-500/10 animate-[spin_3s_linear_infinite] border-t-amber-400 border-r-amber-500 shadow-[0_0_50px_rgba(217,119,6,0.4)]"></div>
        <div className="absolute inset-8 rounded-full border-4 border-amber-500/20 animate-[spin_4s_linear_infinite_reverse] border-b-amber-300 border-l-amber-400"></div>
        <div className="absolute inset-16 rounded-full border-2 border-amber-500/30 animate-[spin_5s_linear_infinite] border-r-amber-200 border-dashed"></div>
        <div className="absolute inset-24 rounded-full border border-amber-500/40 animate-[spin_7s_linear_infinite_reverse] border-t-amber-100"></div>
        
        {/* Center Yin Yang with intense glow */}
        <div className="absolute w-32 h-32 rounded-full animate-[spin_2s_linear_infinite] shadow-[0_0_80px_rgba(217,119,6,0.6)]">
            <div className="w-full h-full rounded-full relative overflow-hidden border-2 border-amber-300/80">
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-amber-200 to-amber-500"></div>
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-gray-900"></div>
               <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-t from-black to-gray-900 rounded-full flex items-center justify-center">
                 <div className="w-3 h-3 bg-amber-200 rounded-full shadow-[0_0_10px_white]"></div>
               </div>
               <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-b from-amber-200 to-amber-500 rounded-full flex items-center justify-center">
                 <div className="w-3 h-3 bg-black rounded-full shadow-[0_0_10px_black]"></div>
               </div>
            </div>
        </div>

        {/* Floating Text */}
        <div className="absolute -bottom-24 text-5xl font-serif text-gold tracking-[0.3em] animate-pulse z-10 drop-shadow-[0_0_15px_rgba(217,119,6,1)] whitespace-nowrap">
          正在窥探天机...
        </div>
      </div>
    </div>
  );
}
