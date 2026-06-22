import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CreditCard,
  ShieldCheck,
  Star,
  Truck,
  Wallet,
} from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const servicePoints = [
  {
    title: 'Fast Delivery',
    text: 'Quick handling for practical business buying needs.',
    icon: Truck,
  },
  {
    title: 'COD Available',
    text: 'Convenient purchase flow for trusted orders.',
    icon: Wallet,
  },
  {
    title: 'Secure Checkout',
    text: 'Confident and professional buying experience.',
    icon: ShieldCheck,
  },
  {
    title: 'Online Payment',
    text: 'Simple payment options for smooth orders.',
    icon: CreditCard,
  },
]

export default function Home() {
  const featuredProducts = products
    .filter((item) => item.section === 'featured')
    .slice(0, 6)

  const bestProducts = products
    .filter((item) => item.section === 'best')
    .slice(0, 3)

  const newProducts = products
    .filter((item) => item.section === 'new')
    .slice(0, 3)

  const categories = [
    'CCTV',
    'Networking',
    'Power',
    'Storage',
    'Cables',
    'Adapters',
  ]

  return (
    <>
      <section className="relative overflow-hidden section-gap">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
        <div className="container-main relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Professional Ecommerce Store</span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              IT, CCTV and accessory products with a sharper, cleaner storefront
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Jain IT Solutions is built with a different visual identity while
              keeping the multi-section ecommerce flow you wanted: product
              highlights, best sellers, new arrivals, brand trust blocks, and
              inquiry-first buying.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/shop" className="btn-primary">
                Explore Products <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link to="/about" className="btn-secondary">
                About Deepak Jain
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card-shell p-5">
                <div className="text-2xl font-black text-red-700">15+</div>
                <p className="mt-1 text-sm text-slate-500">Live Products</p>
              </div>

              <div className="card-shell p-5">
                <div className="text-2xl font-black text-red-700">6</div>
                <p className="mt-1 text-sm text-slate-500">Core Categories</p>
              </div>

              <div className="card-shell p-5">
                <div className="text-2xl font-black text-red-700">24/7</div>
                <p className="mt-1 text-sm text-slate-500">Inquiry Access</p>
              </div>
            </div>
          </div>

          <div className="card-shell p-4">
            <div className="rounded-[28px] bg-gradient-to-br from-slate-950 via-red-800 to-red-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/75">
                    Brand Promise
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Smart Tech, Trusted Service
                  </h2>
                </div>
                <Star className="h-10 w-10 text-yellow-300" />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-white/80">Focus Area</p>
                  <p className="mt-1 font-semibold">
                    CCTV, adapters, cables, tools and networking products
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-white/80">Ideal For</p>
                  <p className="mt-1 font-semibold">
                    Retail buyers, resellers, offices and technicians
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-white/80">Buying Style</p>
                  <p className="mt-1 font-semibold">
                    Clear product blocks with practical details
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-white/80">Contact</p>
                  <p className="mt-1 font-semibold">99274 43216</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-main">
          <div className="mb-10">
            <span className="eyebrow">Service Highlights</span>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Business-ready ecommerce sections
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePoints.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card-shell p-6">
                  <div className="mb-5 inline-flex rounded-2xl bg-red-50 p-4 text-red-700">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-gap bg-white dark:bg-slate-900/40">
        <div className="container-main">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Categories</span>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Shop by product type
              </h2>
            </div>

            <Link to="/shop" className="btn-secondary">
              Visit Full Shop
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item, index) => (
              <div key={index} className="card-shell p-6">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                  Category
                </span>
                <h3 className="mt-3 text-2xl font-black">{item}</h3>
                <p className="mt-3 text-slate-600">
                  Well-structured product presentation for easier browsing and
                  faster buying decisions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-main">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Featured Products</span>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Homepage featured grid
              </h2>
            </div>

            <Link to="/shop" className="btn-primary">
              See All Products
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-white dark:bg-slate-900/40">
        <div className="container-main grid gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Best Seller</span>
            <h2 className="mt-4 text-3xl font-black">Popular moving items</h2>

            <div className="mt-8 grid gap-6">
              {bestProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow">New Arrival</span>
            <h2 className="mt-4 text-3xl font-black">Fresh product additions</h2>

            <div className="mt-8 grid gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-main">
          <div className="rounded-[32px] bg-gradient-to-r from-slate-950 via-red-800 to-red-600 px-6 py-10 text-white sm:px-10">
            <div className="grid items-center gap-6 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Business Contact
                </span>
                <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                  Frontend ready, backend next
                </h2>
                <p className="mt-4 max-w-2xl text-white/85">
                  Is project ke baad aap isme admin panel, login, checkout,
                  database, WhatsApp order aur real product management bhi add
                  kar sakte ho.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="btn-secondary border-white bg-white text-slate-900 hover:border-white hover:text-slate-900"
                >
                  Contact Page
                </Link>

                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-700 transition hover:bg-slate-100"
                >
                  Browse Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}