const Client = () => {
    const logos = [
        {
            id: 1,
            image: "../../../public/images/l6.png"
        },
        {
            id: 2,
            image: "../../../public/images/l9.png"
        }, {
            id: 3,
            image: "../../../public/images/l7.png"
        }, {
            id: 4,
            image: "../../../public/images/l10.jpg"
        },
    ]
    return (
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 place-items-center p-2 ">
            {
                logos.map(logo => {
                    return (
                        <div key={logo.id} className="">
                            <img src={logo.image} alt="logos" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Client
