"use client";
import { useState } from 'react';

export default function DeRiseCakesLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    orderNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Order submitted:', formData);
    setSubmitted(true);
    // In a real application, you would send this data to your backend
  };

  const cakeProducts = [
    {
      name: "Classic Chocolate",
      description: "Rich, moist chocolate cake with smooth ganache frosting. Perfect for chocolate lovers!",
      image: "/1.jpg"
    },
    {
      name: "Vanilla Dream",
      description: "Light and fluffy vanilla cake with our signature buttercream frosting. A timeless favorite!",
      image: "/2.jpg"
    },
    {
      name: "Red Velvet",
      description: "Velvety smooth red cake with cream cheese frosting. Elegant and irresistible.",
      image: "/3.jpg"
    },
    {
      name: "Carrot Spice",
      description: "Moist carrot cake with warm spices and creamy frosting. A customer favorite!",
      image: "/4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-amber-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-800 mb-4">De-Rise Cakes</h1>
          <p className="text-xl mb-8">Delicious handcrafted cakes for every occasion</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors">
            Order Now
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-amber-800">Our Story</h2>
          <p className="text-lg mb-6">
            At De-Rise Cakes, we believe that every celebration deserves something sweet and special.
            Our journey began in a small kitchen with big dreams and a passion for creating memorable desserts.
          </p>
          <p className="text-lg">
            Today, we continue to craft each cake with love, using only the finest ingredients and time-honored recipes
            that have been perfected over the years. From birthdays to weddings, or just because - our cakes make every moment sweeter.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">Our Delicious Cakes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cakeProducts.map((cake, index) => (
              <div key={index} className="bg-amber-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img
                    src={cake.image}
                    alt={`${cake.name} cake`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-700">{cake.name}</h3>
                  <p className="text-gray-700 mb-4">{cake.description}</p>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-full text-sm transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 px-4 bg-amber-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">Place Your Order</h2>

          {!submitted ? (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="address">Delivery Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2" htmlFor="orderNotes">Order Notes</label>
                  <textarea
                    id="orderNotes"
                    name="orderNotes"
                    value={formData.orderNotes}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
                >
                  Submit Order
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-lg text-gray-600 mb-6">Your order has been received. We&apos;ll contact you shortly to confirm the details.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Place Another Order
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">&quot;The chocolate cake was absolutely divine! Everyone at my daughter&apos;s birthday party loved it. Will definitely order again!&quot;</p>
              <p className="font-bold text-amber-700">- Sarah M.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">&quot;I ordered the Red Velvet for my anniversary and it exceeded all expectations. The texture and flavor were perfect!&quot;</p>
              <p className="font-bold text-amber-700">- Michael T.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">&quot;De-Rise Cakes made our wedding day extra special. Not only was the cake beautiful, but it tasted amazing too!&quot;</p>
              <p className="font-bold text-amber-700">- Jessica and David</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">De-Rise Cakes</h3>
            <p>Bringing sweetness to every celebration since 2023.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: stellamalima@gmail.com</p>
            <p>Phone: 0767225383</p>
            <p>Address: Mbeya, Iyunga-Ikuti</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p>Monday - Saturday: 8am - 6pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-amber-700 text-center">
          <p>&copy; {new Date().getFullYear()} De-Rise Cakes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
