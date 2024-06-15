import Accordian from './Accordian';

const ChooseUs = () => {
    return (
        <div className="flex justify-around gap-10 mt-20 max-md:flex-col max-md:justify-center max-md:items-center px-3">
            <div>
                <div className="my-6">
                    <div className="text-2xl font-semibold">
                        TRUSTED CLIENTS
                    </div>
                    <div className='tracking-wider'>TRUSTED BY CLIENTS WORLDWIDE. SHIPPING EXCELLENCE.</div>
                </div>
                <img src="../../../public/images/Group 7.png" width={500} alt="" />

            </div>
            <div className=' w-1/2 max-md:w-full'>
                <div className="my-6">
                    <div className="text-2xl font-semibold">
                        WHY CHOOSE US
                    </div>
                    <div className='tracking-wider'>RELIABLE, EFFICIENT, TAILORED SHIPPING SOLUTIONS.</div>
                </div>

                <div className="">
                    <Accordian />
                </div>
            </div>

        </div>
    )
}

export default ChooseUs
