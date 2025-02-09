import React from 'react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 font-sans">
      {/* Navbar */}
      <nav className="p-6 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">StudyVerse</h1>
          <div className="space-x-4">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Study Smarter, Together.
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          Join our virtual study group and collaborate with students worldwide to achieve your academic goals.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Collaborative Learning</h3>
              <p className="text-gray-600">Work with peers in real-time to solve problems and share knowledge.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Flexible Scheduling</h3>
              <p className="text-gray-600">Study at your own pace with flexible group sessions.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">Get help from experienced tutors and mentors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">About Us</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            VirtualStudy is a platform designed to bring students together from all over the world. Our mission is to make learning collaborative, accessible, and fun. Whether you're preparing for exams or working on a project, we're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Contact Us</h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 VirtualStudy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;