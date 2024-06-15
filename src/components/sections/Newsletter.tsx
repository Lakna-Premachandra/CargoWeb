import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <div className=" bg-gray text-gray-200 py-10 m-auto">
            <div className="   mx-auto  flex  max-w-[1540px]  items-center max-md:flex-col max-md:items-start  justify-between   px-4   ">
                <div className="">
                    <div className="text-2xl font-semibold">Weekly Newsletter</div>
                    <div className="mt-2">There are many variations of passages of lorem ipsum available.</div>
                </div>
                <form className="flex max-sm:flex-col md:w-1/2 justify-end sm:w-1/2  ">
                    <div className='flex max-sm:hidden'>
                        <input
                            type="email"
                            placeholder="Enter Your Mail"
                            className=" px-4 py-2 rounded-s-lg focus:outline-none text-black"
                        />
                        <button type="submit" className="bg-yellow rounded-e-lg text-white px-4 py-2  hover:bg-orange-600">
                            SUBSCRIBE
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Newsletter;



