export default function Stats() {

    const data = [
        {
            number: 890,
            description: 'Delivered packages'
        },
        {
            number: 137,
            description: 'Countries covered'
        },
        {
            number: 740,
            description: 'Tons of Goods'
        },
        {
            number: 600,
            description: 'Satisfied Clients'
        }
    ]
    return (
        <div className=' m-auto px-4 mb-10 flex justify-center'>
            <div className=' grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2  border border-[whitesmoke]  p-4'>
                {data.map(item => {
                    return (
                        <div className='text-left flex gap-2 items-center py-2 px-4 text-darkBlue  justify-between'>
                            <div className='text-5xl font-bold text-darkBlue'>{item.number}</div>
                            <div className=' w-1/2 font-bold text-lg'>{item.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}