import {
  ArrowRight,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
} from 'lucide-react'

const contactCards = [
  {
    title: 'Call for instant support',
    value: '99274 43216',
    href: 'tel:9927443216',
    icon: Phone,
    note: 'Direct discussion for orders and urgent requirements',
  },
  {
    title: 'Email for bulk inquiry',
    value: 'jainitsolutions@gmail.com',
    href: 'mailto:jainitsolutions@gmail.com',
    icon: Mail,
    note: 'Best for quotations, bulk supply and product details',
  },
  {
    title: 'Service coverage',
    value: 'India-wide support',
    href: '#',
    icon: MapPin,
    note: 'Product inquiry and business supply assistance across India',
  },
]

const trustPoints = [
  {
    title: 'Fast response',
    text: 'Quick reply for product inquiries, order discussions and support needs.',
    icon: Clock3,
  },
  {
    title: 'Business focused',
    text: 'Suitable for resellers, office buyers, installers and repeat customers.',
    icon: ShieldCheck,
  },
  {
    title: 'Friendly guidance',
    text: 'Simple communication with clear product understanding before purchase.',
    icon: Headphones,
  },
]

export default function Contact() {
  return (
    <section className="section-gap overflow-hidden">
      <div className="container-main">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">Contact Us</span>

            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Let’s talk about your IT product needs, business orders and support queries
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Jain IT Solutions helps with product inquiries, reseller communication,
              business supply discussions and requirement-based support. This page is
              designed to make contact feel faster, cleaner and more professional.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="card-shell p-5">
                    <div className="mb-4 inline-flex rounded-2xl bg-red-50 p-3 text-red-700">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 grid gap-4">
              {contactCards.map((item) => {
                const Icon = item.icon
                const isClickable = item.href !== '#'

                const Wrapper = isClickable ? 'a' : 'div'
                const wrapperProps = isClickable
                  ? { href: item.href }
                  : {}

                return (
                  <Wrapper
                    key={item.title}
                    {...wrapperProps}
                    className="card-shell group flex flex-col gap-4 rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-red-50 p-4 text-red-700 transition group-hover:bg-red-600 group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                        <p className="mt-1 break-all text-base font-semibold text-red-700">
                          {item.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.note}
                        </p>
                      </div>
                    </div>

                    {isClickable && (
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition group-hover:text-red-600">
                        Connect
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </Wrapper>
                )
              })}
            </div>

            <div className="mt-8 rounded-[32px] bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.2)] sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-red-300">
                    Quick Business Contact
                  </p>
                  <h2 className="mt-2 text-2xl font-black">
                    Need fast product assistance for your next order?
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
                    Use direct calling or email support for faster communication about stock,
                    pricing, product selection and bulk purchase planning.
                  </p>
                </div>

                <a
                  href="tel:9927443216"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-red-600 hover:text-white"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="card-shell relative overflow-hidden rounded-[32px] p-6 sm:p-8">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-red-100 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-slate-100 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                <MessageCircleMore size={14} />
                Send Inquiry
              </span>

              <h2 className="mt-4 text-3xl font-black">
                Tell us what you need
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share your requirement clearly and use this section for product sourcing,
                IT accessory support, business order requests or reseller communication.
              </p>

              <form className="mt-8 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input-field"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input-field"
                  />
                  <input
                    type="text"
                    placeholder="City / Business Name"
                    className="input-field"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Product Name / Requirement"
                  className="input-field"
                />

                <select className="input-field">
                  <option>Select Inquiry Type</option>
                  <option>Product Inquiry</option>
                  <option>Bulk Order</option>
                  <option>Reseller Requirement</option>
                  <option>Technical Support</option>
                  <option>General Business Query</option>
                </select>

                <textarea
                  rows="6"
                  placeholder="Write your message with product details, quantity, brand preference or support requirement"
                  className="input-field resize-none"
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    <input type="checkbox" className="h-4 w-4 accent-red-600" />
                    Need callback support
                  </label>

                  <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    <input type="checkbox" className="h-4 w-4 accent-red-600" />
                    Looking for bulk pricing
                  </label>
                </div>

                <button type="button" className="btn-primary group mt-2 w-full">
                  <span className="inline-flex items-center gap-2">
                    Submit Inquiry
                    <ArrowRight
                      size={18}
                      className="transition duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-dashed border-red-200 bg-red-50 px-4 py-4 text-sm leading-6 text-slate-700">
                For faster response, mention product type, quantity, delivery city and your
                business requirement in the message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}