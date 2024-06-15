import image from "../../../public/images/Group 4.png"
const Welcome = () => {
    return (
        <div className="py-4 px-3 my-32 flex items-center justify-between  gap-10 max-md:flex-col max-md:my-20 ">
            <div className="">
                <img className=" w-[1500px]" src={image} alt="" />
            </div>
            <div>
                <div className="flex flex-col gap-3 items-start ">
                    <div className="text-5xl pr-12 max-sm:p-0 leading-[60px]">TransMax Logistics Around <span className="text-lightOrange font-semibold">the World</span></div>
                    <div className="tracking-wide">Transmax is the world's leading global logistics provider — we support industry and trade in the global exchange of goods through land transport. Our value-added services ensure the flow of goods continues seamlessly and supply chains remain lean and optimized for success.</div>
                    <button className="bg-slate-200 rounded hover:bg-slate-300 p-4 text-sm text-slate-800 font-semibold">MORE ABOUT US</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
