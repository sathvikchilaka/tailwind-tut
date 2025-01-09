import { testimonials } from "../constants"


const Testimonials = () => {
  return (
    <div className="mt-10 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What people are saying</h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((opt, key)=>(
                <div key={key} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                        <p>{opt.text}</p>
                        <div className="flex mt-8 items-start">
                            <img src={opt.image} alt={opt.user} className="w-12 h-12 mr-4 rounded-full border border-neutral-300" />
                            <div className="">
                                <h6>{opt.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">{opt.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials