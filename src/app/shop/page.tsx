import ProductCard from "@/components/ProductCard"

const products = [
  { id: 1, name: "Smart Watch", price: 149, image: "/c.jpg" },
  { id: 2, name: "Headphones", price: 89, image: "/a.jpg" },
  { id: 3, name: "Gaming Mouse", price: 59, image: "/b.jpg" },
]

export default function Shop() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Shop Products</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}
