import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-end space-x-6">
          <li><Link href="#experience" className="text-gray-600 hover:text-gray-900">Experience</Link></li>
          <li><Link href="#education" className="text-gray-600 hover:text-gray-900">Education</Link></li>
          <li><Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

