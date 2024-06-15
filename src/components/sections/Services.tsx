
const Services = () => {
    const images = [
        {
            title: "Air Freight Services",
            image: "../../../public/images/ship.jpg",
            description: "At our Auto Service garage, we fully appreciate how difficult it is for people to find  "
        },
        {
            title: "Drone Service",
            image: "../../../public/images/plane1.jpg",
            description: "These are unique and often differ from one industry to the other. Our logistics expertise.  "
        },



    ]
    return (
        <div className='my-32 px-2 max-md:mt-10 '>
            <div className=" text-center flex flex-col gap-2 mb-20 max-md:mb-10 max-md:text-left max-md:w-full">
                <div className="text-lightGreen font-semibold text-2xl">Real Solution,Real Fast !</div>
                <div className="text-4xl">Best Global Logistics Solutions.</div>
            </div>
            <div>
                <div className="flex justify-center items-center gap-6 my-10 max-md:flex-col ">
                    {images.map(image => {
                        return (
                            <>
                                <div className="flex items-center gap-3  max-md:flex-col">
                                    <img width={400} src={image.image} alt="" className="aspect-[3/2] max-md:w-full" />
                                    <div className="flex flex-col gap-4 max-md:p-4 ">
                                        <div className="text-2xl font-semibold ">{image.title}</div>
                                        <div>{image.description}</div>
                                        <button className="flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z" /></svg>
                                            Read More</button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>

                <div className="flex gap-2 items-center">Logistic and transport solution saves your time <span className="font-semibold">Finds your solution</span> <div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M11 22A11 11 0 1 0 0 11a11 11 0 0 0 11 11zM5 10h8.051V7.1l2.9 2.9H16v.05l1 1L13.051 15v-3H5z" /></svg></div> </div>
            </div>
        </div>
    )
}

export default Services
