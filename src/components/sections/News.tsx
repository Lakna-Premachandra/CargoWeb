import React from 'react';
import { FaUser, FaEye } from 'react-icons/fa';

type NewsItem = {
    date: string;
    month: string;
    image: string;
    title: string;
    description: string;
    admin: string;
    views: number;
};

const newsItems: NewsItem[] = [
    {
        date: '26',
        month: 'Sep',
        image: '/images/truck.jpg',
        title: 'New Truck Fleet Added to Our Logistics',
        description: 'Our company has added a new fleet of trucks to enhance delivery efficiency and reduce transportation times.',
        admin: 'Admin',
        views: 15,
    },
    {
        date: '22',
        month: 'Sep',
        image: '/images/rail.jpg',
        title: 'Expanding Rail Freight Services',
        description: 'We are expanding our rail freight services to cover more routes and ensure timely deliveries across the country.',
        admin: 'Admin',
        views: 15,
    },
    {
        date: '20',
        month: 'Sep',
        image: '/images/plane2.jpg',
        title: 'New Air Cargo Routes Launched',
        description: 'We have launched new air cargo routes to provide faster and more reliable services for our clients.',
        admin: 'Admin',
        views: 15,
    },
    {
        date: '15',
        month: 'Sep',
        image: '/images/ship2.jpg',
        title: 'Increasing Our Maritime Fleet',
        description: 'Our maritime fleet has been expanded to include new vessels, ensuring increased capacity and better service.',
        admin: 'Admin',
        views: 15,
    },
];

const News: React.FC = () => {
    return (
        <div className=" container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Latest News</h2>
            <div className="flex justify-center items-center mb-8">
                <div className="w-3 h-3 bg-yellow mr-2"></div>
                <p className="text-gray-500">Integer congue elit</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex bg-slate-100 overflow-hidden transform transition-transform duration-200 cursor-pointer hover:bg-yellow hover:shadow-2xl group max-sm:flex-col"
                    >
                        <div className="relative w-1/2  max-md:w-full">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute top-0 left-0 bg-gray text-white flex flex-col items-center justify-center w-12 h-12 transition-colors duration-200 group-hover:bg-yellow group-hover:text-white">
                                <span className="text-lg font-bold">{item.date}</span>
                                <span className="text-xs">{item.month}</span>
                            </div>
                        </div>
                        <div className="w-1/2 p-4 flex flex-col justify-center max-md:text-center max-md:w-full">
                            <div className="text-xl font-semibold mb-2 text-black transition-colors duration-200 group-hover:text-white">{item.title}</div>
                            <div className="flex items-center max-md:justify-center text-sm text-black mb-2 transition-colors duration-200 group-hover:text-white">
                                <FaUser className="mr-1 text-lightBlue transition-colors duration-200 group-hover:text-white" />
                                <span className="mr-2">{item.admin}</span>
                                <FaEye className="mr-1 text-lightBlue transition-colors duration-200 group-hover:text-white" />
                                <span>{item.views}</span>
                            </div>
                            <p className="text-black transition-colors duration-200 group-hover:text-white leading-7 tracking-wide">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;