import aboutOwner from '../assets/about-owner.jpeg'

export default function About() {
  return (
    <section className="section-gap">
      <div className="container-main grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">About Us</span>
          <h1 className="mt-4 text-4xl font-black">Jain IT Solutions and owner Deepak Jain</h1>

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            Jain IT Solutions is positioned as a trusted destination for IT, CCTV,
            networking and utility accessories with a stronger and cleaner digital storefront.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Deepak Jain is highlighted as the owner, with emphasis on dependable service,
            honest communication, quality-focused supply and long-term customer trust.
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            This About Us section now uses your provided image so the page feels more personal,
            brand-connected and visually meaningful for visitors.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-shell p-6">
              <h3 className="text-xl font-bold">Owner</h3>
              <p className="mt-2 text-slate-600">Deepak Jain</p>
            </div>

            <div className="card-shell p-6">
              <h3 className="text-xl font-bold">Email</h3>
              <p className="mt-2 break-all text-slate-600">jainitsolutions@gmail.com</p>
            </div>

            <div className="card-shell p-6">
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="mt-2 text-slate-600">99274 43216</p>
            </div>

            <div className="card-shell p-6">
              <h3 className="text-xl font-bold">Business Type</h3>
              <p className="mt-2 text-slate-600">Ecommerce IT & accessory solutions</p>
            </div>
          </div>
        </div>

        <div className="card-shell overflow-hidden p-3">
          <img
            src={aboutOwner}
            alt="Deepak Jain portrait for Jain IT Solutions About Us page"
            className="h-full min-h-[420px] w-full rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}