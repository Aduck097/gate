import React, { useState } from 'react';

export function Home({ onCalculate }: { onCalculate: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    gender: 'male'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center relative z-10 py-8 px-4 min-h-[85vh] justify-between">
      
      {/* Input Form at Top */}
      <div className="glass-panel rounded-xl p-6 w-full max-w-4xl relative z-20 mt-4">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0d1117] px-8 py-1.5 text-amber-400 font-serif tracking-[0.2em] border border-amber-500/50 rounded-full text-sm flex items-center space-x-3 shadow-[0_0_15px_rgba(217,119,6,0.3)]">
          <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_5px_#f59e0b]"></span>
          <span>输入信息 探索命运</span>
          <span className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_5px_#f59e0b]"></span>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-wrap items-end justify-between gap-4 mt-4">
          <div className="flex-1 min-w-[120px]">
            <label className="block text-xs font-serif text-amber-400/90 mb-2 ml-1 tracking-widest">姓名</label>
            <input 
              type="text" 
              required
              className="w-full bg-black/60 border border-amber-500/40 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all font-serif"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="flex-1 min-w-[160px]">
            <label className="block text-xs font-serif text-amber-400/90 mb-2 ml-1 tracking-widest">出生日期</label>
            <input 
              type="date" 
              required
              className="w-full bg-black/60 border border-amber-500/40 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all font-serif [color-scheme:dark]"
              value={formData.birthDate}
              onChange={e => setFormData({...formData, birthDate: e.target.value})}
            />
          </div>
          
          <div className="flex-1 min-w-[140px]">
            <label className="block text-xs font-serif text-amber-400/90 mb-2 ml-1 tracking-widest">出生时辰</label>
            <select 
              className="w-full bg-black/60 border border-amber-500/40 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all appearance-none font-serif"
              value={formData.birthTime}
              onChange={e => setFormData({...formData, birthTime: e.target.value})}
            >
              <option value="" className="bg-gray-900">选择时辰</option>
              {['子时 (23-1)', '丑时 (1-3)', '寅时 (3-5)', '卯时 (5-7)', '辰时 (7-9)', '巳时 (9-11)', '午时 (11-13)', '未时 (13-15)', '申时 (15-17)', '酉时 (17-19)', '戌时 (19-21)', '亥时 (21-23)'].map(t => (
                <option key={t} value={t} className="bg-gray-900">{t}</option>
              ))}
            </select>
          </div>
          
          <div className="w-28">
            <label className="block text-xs font-serif text-amber-400/90 mb-2 ml-1 tracking-widest">性别</label>
            <select 
              className="w-full bg-black/60 border border-amber-500/40 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:shadow-[0_0_10px_rgba(217,119,6,0.3)] transition-all appearance-none font-serif"
              value={formData.gender}
              onChange={e => setFormData({...formData, gender: e.target.value})}
            >
              <option value="male" className="bg-gray-900">男</option>
              <option value="female" className="bg-gray-900">女</option>
            </select>
          </div>
          
          <button 
            type="submit"
            className="bg-gold-gradient text-black font-serif font-bold px-12 py-3 rounded-md hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_25px_rgba(217,119,6,0.5)] tracking-widest text-lg ml-6 border border-amber-200"
          >
            开始测算
          </button>
        </form>
      </div>

      {/* Main Visual Area */}
      <div className="relative w-full flex-1 flex items-center justify-center mt-12 mb-8">
        
        {/* Left Astrolabe (Ziwei) */}
        <div className="absolute left-10 xl:left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] hidden lg:flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-full border border-amber-600/40 animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute inset-4 rounded-full border border-amber-500/30"></div>
          <div className="absolute inset-12 rounded-full border border-amber-500/20 animate-[spin_40s_linear_infinite_reverse]"></div>
          {/* Grid lines */}
          <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent 0deg 29deg, rgba(217,119,6,0.3) 30deg, transparent 31deg) repeat' }}></div>
          <div className="text-amber-500/80 font-serif text-xs text-center">
            <div className="text-lg text-amber-400 mb-1">紫微星盘</div>
            <div>天机 太阳 武曲</div>
            <div>天同 廉贞 天府</div>
          </div>
          {/* Decorative tag */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 wood-tag px-2 py-6 rounded-sm">
            <span className="writing-vertical-rl text-amber-200 font-serif tracking-widest text-lg">紫微斗数命盘</span>
          </div>
        </div>

        {/* Center Huge Bagua */}
        <div className="relative w-[550px] h-[550px] flex items-center justify-center z-10">
          {/* Glowing aura */}
          <div className="absolute inset-0 bg-amber-600/20 rounded-full blur-[80px] animate-pulse"></div>
          
          {/* Outer glowing rings */}
          <div className="absolute inset-[-20px] rounded-full border-2 border-amber-500/30 animate-[spin_80s_linear_infinite] shadow-[0_0_30px_rgba(217,119,6,0.2)]"></div>
          <div className="absolute inset-4 rounded-full border border-amber-400/50 animate-[spin_50s_linear_infinite_reverse] border-dashed"></div>
          <div className="absolute inset-12 rounded-full border-2 border-amber-500/20 animate-[spin_30s_linear_infinite]"></div>
          
          {/* Inner Bagua Container */}
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#1a0f05] to-black border-[6px] border-amber-600/80 flex items-center justify-center relative shadow-[0_0_100px_rgba(217,119,6,0.5)] animate-pulse-glow">
            
            {/* Yin Yang */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-b from-white to-black flex items-center justify-center animate-[spin_25s_linear_infinite] shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              <div className="w-full h-full rounded-full border-2 border-amber-500/80 relative overflow-hidden shadow-inner">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f4ebd0]"></div>
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a]"></div>
                 <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#0a0a0a] rounded-full flex items-center justify-center shadow-inner">
                   <div className="w-4 h-4 bg-[#f4ebd0] rounded-full shadow-[0_0_8px_white]"></div>
                 </div>
                 <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-[#f4ebd0] rounded-full flex items-center justify-center shadow-inner">
                   <div className="w-4 h-4 bg-[#0a0a0a] rounded-full shadow-[0_0_8px_black]"></div>
                 </div>
              </div>
            </div>
            
            {/* Trigrams with intense glow */}
            {['乾', '坎', '艮', '震', '巽', '离', '坤', '兑'].map((gua, i) => (
              <div key={gua} className="absolute text-gold font-serif text-5xl font-bold drop-shadow-[0_0_15px_rgba(217,119,6,1)]" style={{
                transform: `rotate(${i * 45}deg) translateY(-150px) rotate(-${i * 45}deg)`
              }}>
                {gua}
              </div>
            ))}
            
            {/* Inner Trigram Lines (Bagua symbols) */}
            {[
              ['☰'], ['☵'], ['☶'], ['☳'], ['☴'], ['☲'], ['☷'], ['☱']
            ].map((symbol, i) => (
              <div key={i} className="absolute text-amber-400/80 font-serif text-4xl" style={{
                transform: `rotate(${i * 45}deg) translateY(-100px) rotate(-${i * 45}deg)`
              }}>
                {symbol}
              </div>
            ))}
          </div>
        </div>

        {/* Right Astrolabe (I-Ching) */}
        <div className="absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] hidden lg:flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-full border-4 border-[#8b0000]/40 animate-[spin_50s_linear_infinite_reverse]"></div>
          <div className="absolute inset-8 rounded-full border border-amber-500/40"></div>
          <div className="absolute inset-16 rounded-full border-2 border-amber-600/30 animate-[spin_30s_linear_infinite] border-dashed"></div>
          
          {/* Small Yin Yang */}
          <div className="w-16 h-16 rounded-full border border-amber-500/50 relative overflow-hidden animate-[spin_10s_linear_infinite]">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-100"></div>
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black"></div>
          </div>
          
          {/* Decorative tag */}
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 wood-tag px-2 py-6 rounded-sm">
            <span className="writing-vertical-rl text-amber-200 font-serif tracking-widest text-lg">易经八卦盘</span>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="w-full max-w-5xl flex justify-between items-end px-12 pb-4 z-20">
        
        {/* Left Bottom */}
        <div className="flex items-end space-x-6 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="wood-tag px-2 py-8 rounded-sm">
            <span className="writing-vertical-rl text-amber-200 font-serif tracking-widest text-lg">手相面相</span>
          </div>
          <div className="w-24 h-32 border border-amber-700/50 rounded-lg bg-black/40 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-30"></div>
            <span className="text-5xl text-amber-600/60">✋</span>
          </div>
        </div>

        {/* Right Bottom */}
        <div className="flex items-end space-x-6 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
          <div className="flex space-x-2">
            <div className="w-12 h-32 border border-amber-700/50 rounded-b-xl bg-gradient-to-b from-[#2a3f2a] to-[#1a2f1a] flex items-end justify-center pb-4 shadow-lg">
              <span className="writing-vertical-rl text-amber-400/80 font-serif tracking-widest text-sm">灵签求问</span>
            </div>
            <div className="w-12 h-28 border border-amber-700/50 rounded-b-xl bg-gradient-to-b from-[#2a3f2a] to-[#1a2f1a] flex items-end justify-center pb-4 shadow-lg">
              <span className="writing-vertical-rl text-amber-400/80 font-serif tracking-widest text-sm">周易易经</span>
            </div>
          </div>
          <div className="wood-tag px-2 py-8 rounded-sm">
            <span className="writing-vertical-rl text-amber-200 font-serif tracking-widest text-lg">灵签求问</span>
          </div>
        </div>

      </div>
    </div>
  );
}
