import React from 'react';

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-amber-900/30 text-center text-gray-500 text-sm relative z-50 mt-auto">
      <div className="flex justify-center space-x-6 mb-3 font-serif">
        <span className="cursor-pointer hover:text-amber-500 transition-colors">关于我们</span>
        <span className="text-gray-700">|</span>
        <span className="cursor-pointer hover:text-amber-500 transition-colors">免责声明</span>
        <span className="text-gray-700">|</span>
        <span className="cursor-pointer hover:text-amber-500 transition-colors">联系方式</span>
      </div>
      <p className="font-serif">© 2024 神算阁 版权所有</p>
    </footer>
  );
}
