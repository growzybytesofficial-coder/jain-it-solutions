import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section className="section-gap">
      <div className="container-main grid gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Contact Us</span>
          <h1 className="mt-4 text-4xl font-black">Talk to Jain IT Solutions</h1>
          <p className="mt-5 max-w-2xl text-slate-600 dark:text-slate-300">
            Use this page for inquiries, product discussions, business orders,
            reseller questions and support communication.
          </p>

          <div className="mt-8 space-y-4">
            <div className="card-shell flex items-center gap-4 p-6">
              <div className="rounded-2xl bg-red-50 p-4 text-red-700">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-slate-600">99274 43216</p>
              </div>
            </div>

            <div className="card-shell flex items-center gap-4 p-6">
              <div className="rounded-2xl bg-red-50 p-4 text-red-700">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="break-all text-slate-600">jainitsolutions@gmail.com</p>
              </div>
            </div>

            <div className="card-shell flex items-center gap-4 p-6">
              <div className="rounded-2xl bg-red-50 p-4 text-red-700">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold">Business Service Area</h3>
                <p className="text-slate-600">India-wide product inquiries and supply support</p>
              </div>
            </div>
          </div>
        </div>

        <form className="card-shell rounded-[32px] p-8">
          <h2 className="text-2xl font-black">Send Inquiry</h2>

          <div className="mt-6 grid gap-4">
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Your Email" className="input-field" />
            <input type="text" placeholder="Phone Number" className="input-field" />
            <input type="text" placeholder="Product Name / Requirement" className="input-field" />
            <textarea rows="5" placeholder="Write your message" className="input-field"></textarea>
            <button type="button" className="btn-primary w-full">
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}