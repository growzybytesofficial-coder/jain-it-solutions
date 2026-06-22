import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-main grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-black text-red-700">Jain IT Solutions</h3>
          <p className="mt-3 max-w-xl text-slate-600">
            Smart tech products, trusted support, practical ecommerce flow, and a
            cleaner modern UI for CCTV, networking, cables, tools and IT accessories.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold">Contact</h4>
          <div className="mt-4 space-y-3 text-slate-600">
            <p className="flex items-center gap-2">
              <Phone size={16} />
              99274 43216
            </p>
            <p className="flex items-center gap-2 break-all">
              <Mail size={16} />
              jainitsolutions@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © 2026 Jain IT Solutions. All rights reserved.
      </div>
    </footer>
  )
}