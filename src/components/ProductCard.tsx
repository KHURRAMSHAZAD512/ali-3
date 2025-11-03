"use client"
import Link from "next/link"

export default function ProductCard({ id, name, price, image }: any) {
  return (
    <div className="bg-white dark:bg-[#041427] rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-transform duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">${price}</p>
      <Link href={`/product/${id}`} className="text-sm text-white bg-primary px-4 py-2 rounded-md hover:bg-blue-700">
        View Details
      </Link>
    </div>
  )
}
