const BestShipping = () => {
    return (
        <div className="flex relative ">
            <div className=" flex flex-col gap-4 w-1/3 bg-white absolute top-[5rem] px-5 py-20 left-[2rem] max-md:w-full max-md:left-0 max-md:p-4 ">
                <div>
                    <div className="text-lg flex gap-2"><div className="text-yellow">|</div> LOGISTIC</div>
                    <div className="text-5xl leading-[60px]">BEST SHIPPING <span className="text-yellow font-semibold">PARTNER</span></div>
                    <div className="tracking-wide">Welcome to Cargoton, your trusted partner in seamless shipping solutions. At Cargoton, we are committed to delivering excellence with every shipment, ensuring your cargo reaches its destination safely and on time.</div>
                </div>
                <div>
                    <button className="bg-yellow hover:bg-orange-300 p-4 text-sm text-white rounded">DISCOVER MORE</button>
                </div>
            </div>
            <div className="bg__image h-[600px] w-2/3 ml-[30rem] max-md:m-auto max-md:w-full max-md:h-[400px]">

            </div>
        </div>
    )
}

export default BestShipping
