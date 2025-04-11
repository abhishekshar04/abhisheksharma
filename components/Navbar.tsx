'use client'
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full px-4 py-3">
      <div className="flex justify-between items-center font-semibold text-[15px]">
        <Link href="/" className="text-xl font-bold">AB</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/info" className="hover:underline">Information</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-2 md:hidden">
          <Link href="/info" className="hover:underline" onClick={toggleMenu}>Information</Link>
          <Link href="/contact" className="hover:underline" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
