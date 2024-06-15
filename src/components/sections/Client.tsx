import image1 from "../../../public/images/l6.png"
import image2 from "../../../public/images/l9.png"
import image3 from "../../../public/images/l7.png"
import image4 from "../../../public/images/l10.png"

const Client = () => {
    const logos = [
        {
            id: 1,
            image:image1
        },
        {
            id: 2,
            image: image2
        }, {
            id: 3,
            image: image3
        }, {
            id: 4,
            image:image4
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
