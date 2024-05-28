
export const Hero = () => {
  return (
    <div className="hero-section h-[100vh] relative">
        <div className="w-[500px] absolute top-[33%] left-[10%] text-center">
            <p className="text-[45px] font-[900] leading-10">Let us find your<br/> <span className="text-[#e11d48]">Forever Food.</span></p>
            <p className="text-[20px] mt-[5%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
            <div className="mt-[5%]">
                <button className="hover:bg-[#c10e35] text-white rounded-[5px] px-[8%] py-[2%] bg-[#e11d48] mx-[2%]">Search Now</button>
                <button className="text-[#e11d48] rounded-[5px] px-[8%] py-[2%] bg-white mx-[2%]">Know More</button>
            </div>
        </div>
    </div>
  )
}
