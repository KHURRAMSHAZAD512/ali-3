export default function Contact() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-primary mb-6">Contact Us</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">We’d love to hear from you!</p>
      <form className="max-w-xl mx-auto bg-white dark:bg-[#041427] p-8 rounded-2xl shadow-lg space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border dark:bg-gray-800" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border dark:bg-gray-800" />
        <textarea placeholder="Message" className="w-full p-3 rounded-md border dark:bg-gray-800"></textarea>
        <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700">Send Message</button>
      </form>
    </section>
  )
}
