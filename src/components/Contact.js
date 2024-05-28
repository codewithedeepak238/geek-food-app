
export const Contact = () => {
  return (
    <div className="py-[4rem] px-[2rem]">
        <div className="grid grid-cols-2">
            <div className="z-10 py-[4rem] h-[100%]">
                <div className="h-[80vh]">
                    <img className="object-center object-cover h-[100%] w-[100%]" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                </div>
            </div>
            <div className="bg-[#f3f4f6] relative">
              <div className="w-[75%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                <p className="text-[30px] leading-8 font-[700]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</p>
                <p className="py-[3.5%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button className="px-[7%] py-[2%] text-white bg-[#4f46e5] rounded-[5px] hover:text-[#4f46e5] hover:bg-transparent hover:border-[#4f46e5] border-[1px]">Get in Touch</button>
              </div>
            </div>
        </div>
    </div>
  )
}
