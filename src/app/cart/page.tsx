"use client"

import { useState } from "react"
import { ShoppingCart, Trash2 } from "lucide-react"

export default function Cart() {
  const [cart, setCart] = useState([
    { id: 1, name: "Smart Watch X100", price: 14999, quantity: 1, image: "/c.jpg" },
    { id: 2, name: "Wireless Earbuds Pro", price: 9999, quantity: 2, image: "/a.jpg" },
  ])

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-[#020617] dark:to-[#0f172a] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white/60 dark:bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white/30">
        <div className="flex flex-col items-center mb-12">
          <ShoppingCart className="w-14 h-14 text-primary mb-4" />
          <h2 className="text-5xl font-extrabold text-primary tracking-tight text-center drop-shadow-md">
            Your Elite Cart 🛒
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Review your luxury selections before checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
            No items in your cart yet.
          </p>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white dark:bg-[#041427]/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-2xl border border-gray-300 dark:border-gray-700"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-primary">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Rs. {item.price.toLocaleString()} × {item.quantity}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 text-right border-t border-gray-300 dark:border-gray-700 pt-6">
              <p className="text-3xl font-semibold text-green-600 dark:text-green-400">
                Total: Rs. {total.toLocaleString()}
              </p>
              <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-10 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
