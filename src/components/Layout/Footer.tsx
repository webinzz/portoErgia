import {
    FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter, FaTiktok,
  } from 'react-icons/fa6';
  import { SiArtstation, SiBilibili } from 'react-icons/si';
  
  
  const Footer = () => {
    return (
      <footer className="bg-sky-300 text-white py-12 px-6 md:px-20">
        <div className="grid md:grid-cols-5 gap-10">
  
          {/* Get in Touch */}
          <div className='col-span-2 text-white'>
            <h3 className="text-5xl font-bold text-white mb-4">GET IN TOUCH</h3>
            <div className="flex flex-wrap gap-6 text-2xl">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
              <SiArtstation />
              <FaXTwitter />
              <SiBilibili />
              <FaTiktok />
            </div>
            <button className="mt-4  hover:underline">CONTACT US</button>
          </div>
  
          {/* Services */}
          <div>
            <h4 className="text-sm uppercase  mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Game Development</li>
              <li>Engineering</li>
              <li>Art Production</li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase  mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Our Works</li>
              <li className="">News</li>
              <li>Media Kit</li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h4 className="text-sm uppercase mb-4">Support</h4>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Virtuos Offices</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2025 Virtuos</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Career Privacy Notice</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  