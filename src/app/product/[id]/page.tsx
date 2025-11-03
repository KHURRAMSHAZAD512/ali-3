"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

// 🛍️ Demo Products Data
const products = [
  {
    id: "1",
    name: "Smart Watch X100",
    price: 14999,
    description: "High-performance smartwatch with fitness tracking and AMOLED display.",
    image: "/images/watch.jpg",
  },
  {
    id: "2",
    name: "Wireless Earbuds Pro",
    price: 9999,
    description: "Noise-cancelling earbuds with premium sound quality and long battery life.",
    image: "/images/earbuds.jpg",
  },
  {
    id: "3",
    name: "Gaming Keyboard RGB",
    price: 7999,
    description: "Mechanical RGB keyboard designed for pro-level gaming and typing comfort.",
    image: "/images/keyboard.jpg",
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const found = products.find((p) => p.id === id)
    setProduct(found)
  }, [id])

  if (!product)
    return (
      <div className="text-center mt-20 text-gray-600 dark:text-gray-300">
        Product not found 🛒
      </div>
    )

  return (
    <section className="max-w-5xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-primary mb-3">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            Rs. {product.price.toLocaleString()}
          </p>

          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}
