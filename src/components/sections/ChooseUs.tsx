import Accordian from './Accordian';

const ChooseUs = () => {
    const links = [
        {
            title: "TRUSTED CLIENTS"
        },
        {
            title: "lasdasdasdasdasdasdasfknaslknaslkdnas"
        }, {
            title: "lasdasdasdasdasdasd"
        }, {
            title: "lasdasdasdasdasdasd"
        }, {
            title: "lasdasdasdasdasdasd"
        }, {
            title: "lasdasdasdasdasdasd"
        },
    ]
    return (
        <div className="flex justify-around gap-10 my-20 max-md:flex-col max-md:justify-center max-md:items-center   px-3">
            <div>
                <div className="my-6">
                    <div className="text-2xl font-semibold">
                        TRUSTED CLIENTS
                    </div>
                    <div>TRUSTED BY CLIENTS WORLDWIDE. SHIPPING EXCELLENCE.</div>
                </div>
                <img src="../../../public/images/Group 6.png" width={500} alt="" />

            </div>
            <div className=' w-1/2 max-md:w-full'>
                <div className="my-6">
                    <div className="text-2xl font-semibold">
                        WHY CHOOSE US
                    </div>
                    <div>RELIABLE, EFFICIENT, TAILORED SHIPPING SOLUTIONS.</div>
                </div>

                <div className="">
                    <Accordian />
                </div>
            </div>

        </div>
    )
}

export default ChooseUs
