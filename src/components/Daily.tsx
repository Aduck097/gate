import React from 'react';

export function Daily() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 relative z-10">
      <div className="scroll-bg rounded-sm shadow-2xl border-x-[24px] border-y-[12px] border-[#8b5a2b] p-12 relative min-h-[700px] flex flex-col items-center">
        {/* Scroll rollers */}
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[#4a2e11] via-[#8b5a2b] to-[#4a2e11] -mt-6 rounded-t-full shadow-lg"></div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#4a2e11] via-[#8b5a2b] to-[#4a2e11] -mb-6 rounded-b-full shadow-lg"></div>

        <div className="w-full flex justify-between items-start mb-16 border-b border-[#d2b48c] pb-6">
          <div>
            <h2 className="text-5xl font-serif text-[#8b0000] font-bold tracking-widest mb-4">每日运势黄历</h2>
            <p className="text-gray-800 font-serif text-xl">龙年甲辰 | 2024年10月24日</p>
          </div>
          <div className="bg-[#8b0000] text-[#fdf8e9] px-6 py-2 rounded-full font-serif text-lg shadow-md border border-[#5c0000]">
            您的生肖: 兔
          </div>
        </div>

        {/* Center Zodiac Wheel */}
        <div className="relative w-72 h-72 mb-20">
          <div className="absolute inset-0 rounded-full border-8 border-[#8b0000] flex items-center justify-center bg-[#fdf8e9] shadow-inner">
            <div className="absolute inset-2 rounded-full border border-[#8b0000]/30"></div>
            <div className="text-8xl font-serif text-[#8b0000] font-bold drop-shadow-sm">龙</div>
          </div>
          {/* Zodiac animals around */}
          {['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'].map((animal, i) => (
            <div key={animal} className="absolute w-10 h-10 flex items-center justify-center text-[#8b0000] font-serif font-bold text-xl" style={{
              top: '50%', left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-170px) rotate(-${i * 30}deg)`
            }}>
              {animal}
            </div>
          ))}
        </div>

        {/* Yi and Ji */}
        <div className="flex w-full max-w-4xl gap-12 mb-16">
          <div className="flex-1 bg-gradient-to-br from-[#8b0000] to-[#5c0000] text-[#fdf8e9] p-8 rounded-lg relative flex items-center shadow-xl border border-[#3a0000]">
            <div className="text-7xl font-serif font-bold mr-10 opacity-90 drop-shadow-md">宜</div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 font-serif text-2xl tracking-widest">
              <span>出行</span>
              <span>祭祀</span>
              <span>求财</span>
              <span>开市</span>
              <span>嫁娶</span>
            </div>
          </div>
          
          <div className="flex-1 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white p-8 rounded-lg relative flex items-center shadow-xl border border-black">
            <div className="text-7xl font-serif font-bold text-amber-500 mr-10 opacity-90 drop-shadow-md">忌</div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 font-serif text-2xl tracking-widest text-gray-300">
              <span>动土</span>
              <span>安葬</span>
              <span>破土</span>
              <span>入宅</span>
              <span>修造</span>
            </div>
          </div>
        </div>

        {/* Guidance */}
        <div className="text-center bg-[#fdf8e9] w-full max-w-3xl py-8 rounded-lg border border-[#d2b48c]">
          <div className="inline-block border-b-2 border-[#8b0000]/30 pb-2 mb-6">
            <span className="text-2xl font-serif text-[#8b0000] font-bold tracking-widest px-12">今日指引</span>
          </div>
          <p className="text-2xl font-serif text-gray-800 tracking-widest">
            顺风顺水，万事皆宜。莫行险路，安稳为先。
          </p>
        </div>
      </div>
    </div>
  );
}
