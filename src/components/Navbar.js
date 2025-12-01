import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold">NewsBuddy</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/page1" className="hover:text-gray-300">Page 1</a>
        <a href="/page2" className="hover:text-gray-300">Page 2</a>
        <a href="/page3" className="hover:text-gray-300">Page 3</a>
      </div>

      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>

      {open && (
        <div className="absolute top-16 right-4 bg-gray-100 w-40 rounded shadow-lg py-3 md:hidden z-50">
          <a className="block px-4 py-2 hover:bg-gray-200" href="/">Home</a>
          <a className="block px-4 py-2 hover:bg-gray-200" href="/page1">Page 1</a>
          <a className="block px-4 py-2 hover:bg-gray-200" href="/page2">Page 2</a>
          <a className="block px-4 py-2 hover:bg-gray-200" href="/page3">Page 3</a>
        </div>
      )}
    </nav>
  );
}