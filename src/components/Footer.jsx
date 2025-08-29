import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Borked. Made with ❤️ and low resolution.</p>
        <div className="flex items-center gap-4 text-sm opacity-70">
          <a href="#" className="hover:opacity-100">Terms</a>
          <span>•</span>
          <a href="#" className="hover:opacity-100">Privacy</a>
        </div>
      </div>
    </footer>
  )
}