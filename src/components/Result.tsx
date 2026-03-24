import React from 'react';

export function Result({ userData, onBack }: { userData: any, onBack: () => void }) {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 relative z-10">
      <button 
        onClick={onBack}
        className="mb-6 text-amber-500 hover:text-amber-400 flex items-center text-sm font-serif transition-colors"
      >
        ← 返回重新测算
      </button>

      <div className="scroll-bg rounded-sm shadow-2xl border-x-[24px] border-y-[12px] border-[#8b5a2b] p-12 relative min-h-[600px]">
        {/* Scroll rollers */}
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[#4a2e11] via-[#8b5a2b] to-[#4a2e11] -mt-6 rounded-t-full shadow-lg"></div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#4a2e11] via-[#8b5a2b] to-[#4a2e11] -mb-6 rounded-b-full shadow-lg"></div>

        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-[#8b0000] font-bold tracking-[0.2em] mb-6 drop-shadow-sm">八字命理分析报告</h2>
          <div className="flex justify-center items-center space-x-12 text-xl font-serif text-gray-800 border-b border-[#d2b48c] pb-4 inline-flex px-8">
            <span>尊姓大名: {userData?.name || '张伟'}</span>
            <span>生辰八字: 农历戊辰年腊月初五卯时</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Wealth */}
          <div className="border-2 border-[#d2b48c] p-8 relative bg-[#fdf8e9] shadow-inner">
            <div className="absolute top-0 right-0 w-12 h-12 border-l-2 border-b-2 border-[#8b0000]/30"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-r-2 border-t-2 border-[#8b0000]/30"></div>
            
            <div className="flex justify-between h-64">
              <div className="text-gray-800 font-serif leading-loose writing-vertical-rl text-lg tracking-widest">
                财运亨通，正财偏财皆有斩获。宜谨慎投资，积谷防饥。贵人相助，事业有成，财源广进。需防小人妒忌，守财为上。
              </div>
              <h3 className="text-3xl font-serif text-[#8b0000] font-bold writing-vertical-rl tracking-widest">财富运势</h3>
            </div>
          </div>

          {/* Health */}
          <div className="border-2 border-[#d2b48c] p-8 relative bg-[#fdf8e9] shadow-inner">
            <div className="absolute top-0 right-0 w-12 h-12 border-l-2 border-b-2 border-[#8b0000]/30"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-r-2 border-t-2 border-[#8b0000]/30"></div>
            
            <div className="flex justify-between h-64">
              <div className="text-gray-800 font-serif leading-loose writing-vertical-rl text-lg tracking-widest">
                身体康健，注意作息规律，适度运动，避免过度劳累。肝胆需保养，饮食清淡，多食蔬果。心情保持愉悦，身心和谐。
              </div>
              <h3 className="text-3xl font-serif text-[#8b0000] font-bold writing-vertical-rl tracking-widest">健康运势</h3>
            </div>
          </div>

          {/* Relationship */}
          <div className="border-2 border-[#d2b48c] p-8 relative bg-[#fdf8e9] shadow-inner">
            <div className="absolute top-0 right-0 w-12 h-12 border-l-2 border-b-2 border-[#8b0000]/30"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-r-2 border-t-2 border-[#8b0000]/30"></div>
            
            <div className="flex justify-between h-64">
              <div className="text-gray-800 font-serif leading-loose writing-vertical-rl text-lg tracking-widest">
                感情顺遂，有缘人出现，需把握良机，坦诚相待。已婚者夫妻恩爱，家庭和睦。未婚者桃花运旺，良缘可期。
              </div>
              <h3 className="text-3xl font-serif text-[#8b0000] font-bold writing-vertical-rl tracking-widest">感情运势</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
