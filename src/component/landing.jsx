import React from 'react';
import { Globe, Search, Star, CreditCard, ShieldAlert, Twitter, Youtube, Link, HouseIcon, MapPinned, BookOpen } from 'lucide-react';

const TravelLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold ml-16">Lanka Tours & Travels</h1>
        <div className="flex items-center gap-12 mr-20 mt-2">
          <button className="flex items-center gap-2">
            <HouseIcon className="w-5 h-5" />
            Home
          </button>
          <button className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Explore
          </button>
          <button className="flex items-center gap-2">
            <MapPinned className="w-5 h-5" />
            Tours
          </button>
          <button className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Booking
          </button>
          <button className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96">
        <img 
          src='./Images/abc.jpg' 
          alt="Vintage travel van in mountains" 
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Welcome to Sri Lanka</h2>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center mt-16">
        <h2 className="text-4xl font-bold text-white">Explore More</h2>
        </div>
          
      
        
      </div>

    
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{
            name: 'Ella',
            price: 50,
            img: './Images/6.png'
          },
          {
            name: 'Kandy',
            price: 120,
            img: './Images/22.png'          },
          {
            name: 'Galle',
            price: 400,
            img: './Images/28.png'          },
          {
            name: 'Colombo',
            price: 200,
            img: './Images/24.png'          }

          ].map((destination) => (
            <div key={destination.name} className="relative rounded-lg overflow-hidden h-64">
              <img 
                src={destination.img} 
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold">{destination.name}</h3>
                <p className="text-white text-sm">From ${destination.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
            <Star className="w-12 h-12" />
            <h3 className="font-bold">Best Price Guarantee</h3>
            <p className="text-sm text-gray-600">We guarantee the best prices. If you find a lower price elsewhere, let us know!</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CreditCard className="w-12 h-12" />
            <h3 className="font-bold">Easy Refunds</h3>
            <p className="text-sm text-gray-600">Need to cancel? Get instant refunds with us.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <ShieldAlert className="w-12 h-12" />
            <h3 className="font-bold">Travel Restrictions</h3>
            <p className="text-sm text-gray-600">Stay informed about covid-19 travel restrictions that may impact your plans.</p>
          </div>
        </div>
      </section>

      {/* Mobile App Promotion */}
      <section className="relative h-64 my-12">
        <img 
          src='./Images/14.png' 
          alt="Scenic view from airplane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8">
          <h2 className="text-2xl font-bold text-white mb-2">Exclusive 10% Off on Mobile Booking!</h2>
          <p className="text-white mb-4">Download the TravelVoyage app for exclusive deals and seamless booking experience.</p>
          <button className="bg-white text-black px-6 py-2 rounded-lg w-fit">Get App</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">EXPLORE DESTINATIO</h3>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</a>
              <a href="#" className="flex items-center gap-2"><Link className="w-4 h-4" /> Pinterest</a>
              <a href="#" className="flex items-center gap-2"><Youtube className="w-4 h-4" /> YouTube</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Travel tips</h4>
            <div className="flex flex-col gap-2">
              <a href="#">Become a partner</a>
              <a href="#">List your property</a>
              <a href="#">Join as a guide</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Read our travel guide</h4>
            <div className="flex flex-col gap-2">
              <a href="#">Purchase gift voucher</a>
              <a href="#">Local experiences</a>
              <a href="#">Discounts on first</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelLandingPage;
