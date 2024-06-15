import { FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaChevronRight, FaLinkedinIn, FaBehance, FaChevronUp } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import Newsletter from "../sections/Newsletter";

const Footer: React.FC = () => {
  const aboutUs = {
    title: "About Us",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contact: [
      { type: FaPhone, value: "+94 11 434 7575" },
      { type: FaMapMarkerAlt, value: "42 Lily Ave, Colombo 00500" },
    ],
  };

  const latestNews = [
    {
      title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      time: "5 Minutes Ago",
    },
    {
      title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      time: "5 Minutes Ago",
    },
  ];

  const customerService = {
    title: "Customer Service",
    links: [
      "Support Forums",
      "Communication",
      "FAQs",
      "Privacy Policy",
      "Rules & Condition",
      "Contact Us",
    ],
  };

  const socialMediaLinks = [
    { href: "#", icon: FaFacebookF },
    { href: "#", icon: FaTwitter },
    { href: "#", icon: FaLinkedinIn },
    { href: "#", icon: FaBehance },
  ];

  const images = [
    "/images/footer1.jpg",
    "/images/footer2.jpg",
    "/images/footer3.jpg",
    "/images/footer4.jpg",
    "/images/footer5.jpg",
    "/images/footer6.jpg",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className=" bg-gray text-white py-10 mt-10 relative ">
        <Newsletter/>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-semibold pb-1 border-b-2 border-yellow-500 inline-block">
              {aboutUs.title}
            </div>
            <div className="mt-2">{aboutUs.description}</div>
            <div className="mt-4 space-y-2">
              {aboutUs.contact.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.type className="text-white" />
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold pb-1 border-b-2 border-yellow-500 inline-block">
              Latest News
            </div>
            <div className="mt-4 space-y-4">
              {latestNews.map((news, index) => (
                <div key={index} className="flex items-center space-x-2 list-none">
                  <FaChevronRight className="text-white" />
                  <div className="list-none">
                    <div>{news.title}</div>
                    <div className="text-sm text-gray-400">{news.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold pb-1 border-b-2 border-yellow-500 inline-block">
              {customerService.title}
            </div>
            <div className="mt-4 space-y-2 list-none">
              {customerService.links.map((link, index) => (
                <div key={index} className="list-none">
                  <a href="#" className="hover:text-yellow-500 flex items-center space-x-2">
                    <FiUser className="text-white" />
                    <span>{link}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold pb-1 border-b-2 border-yellow-500 inline-block">
              Gallery
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Image ${index + 1}`} width={100} height={100} className="w-full h-24" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center text-gray-500 text-sm mt-10 px-4">
          <p>Copyright © 2024 All Rights Reserved. Site By Xinoe®</p>
          <div className="flex space-x-4">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-white p-2 bg-gray-700 rounded-full">
                <link.icon />
              </a>
            ))}

            <button onClick={scrollToTop} className=" p-3 bg-yellow text-white rounded-full shadow-lg hover:bg-yellow-600">
              <FaChevronUp />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
