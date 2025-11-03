export default function FeatureSection() {
  const features = [
    { title: "Free Shipping", desc: "Get free worldwide delivery on orders above $100" },
    { title: "Secure Payment", desc: "Your payment information is encrypted and safe" },
    { title: "24/7 Support", desc: "Our team is always ready to help you anytime" },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {features.map((f) => (
          <div key={f.title} className="p-6 bg-white dark:bg-[#041427] rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">{f.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
