import Link from "next/link"

function Footer() {
  return (
    <div className="w-full">
      <hr className="border-t border-gray-300" />
      <div className="text-xs flex flex-col sm:flex-row justify-between items-center py-6 gap-2 text-gray-500">
        <div>© 2025 - 2026 / Abhishek Sharma</div>
        <div>
          <Link href="https://github.com/abhishekshar04/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            View Source
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
