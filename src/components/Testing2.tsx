import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Droplet } from "lucide-react"

export default function TestComponent() {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              className="text-sky-600"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <path d="M9 17h6" />
              <circle cx="17" cy="17" r="2" />
            </svg>
            <span className="text-2xl font-bold text-sky-600">CareSpa</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a className="text-sky-600 hover:text-sky-800" href="#">
              Home
            </a>
            <a className="text-gray-600 hover:text-sky-600" href="#">
              Services
            </a>
            <a className="text-gray-600 hover:text-sky-600" href="#">
              About
            </a>
            <a className="text-gray-600 hover:text-sky-600" href="#">
              Contact
            </a>
          </nav>
          <Button className="hidden md:inline-flex bg-sky-600 text-white hover:bg-sky-700">Book Now</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Your car deserves
              <span className="block text-sky-600">the royal treatment</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Experience top-notch car cleaning for all vehicle types. Our expert team uses premium products and
              advanced techniques to make your vehicle shine like new.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-sky-600 text-white hover:bg-sky-700 px-6 py-3"><Droplet className="w-4 h-4 mr-1"/> Book a Wash</Button>
              <Button variant="outline" className="text-sky-600 border-sky-600 hover:bg-sky-50 px-6 py-3">
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-sky-200 transform rotate-3 rounded-2xl"></div>
            <img
              alt="Car washer spraying water"
              className="relative rounded-2xl shadow-2xl object-cover"
              height="600"
              src="http://aqualine.like-themes.com/wp-content/uploads/2018/02/washer.png"
              style={{
                aspectRatio: "800/600",
                objectFit: "contain",
              }}
              width="800"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-4">
                <svg
                  className="text-yellow-400"
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-900">4.9 Star Rating</p>
                  <p className="text-sm text-gray-600">Based on 2,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-sky-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose CareSpa?</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-sky-300"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Eco-friendly cleaning products</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-sky-300"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Experienced and professional staff</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-sky-300"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>State-of-the-art washing equipment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="text-sky-300"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Satisfaction guaranteed</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Subscribe for Special Offers</h2>
              <p className="mb-4">Stay updated with our latest deals and promotions.</p>
              <form className="flex">
                <Input className="flex-grow text-gray-900" placeholder="Enter your email" type="email" />
                <Button className="ml-2 bg-white text-sky-600 hover:bg-sky-100" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 CareSpa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}