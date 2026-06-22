import { useMemo, useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const categories = ['All', ...new Set(products.map((item) => item.category))]

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (category !== 'All') {
      filtered = filtered.filter((item) => item.category === category)
    }

    if (search.trim()) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [search, category, sortBy])

  return (
    <section className="section-gap">
      <div className="container-main">
        <div className="mb-10">
          <span className="eyebrow">Shop</span>
          <h1 className="mt-4 text-4xl font-black">All Products</h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Search, filter and browse products with a cleaner and different storefront layout.
          </p>
        </div>

        <div className="card-shell mb-10 grid gap-4 p-6 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Search product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input-field"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="input-field"
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        <div className="mb-6 text-sm font-medium text-slate-500">
          Showing {filteredProducts.length} products
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}