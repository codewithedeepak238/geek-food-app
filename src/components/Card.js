
export const Card = () => {
  return (
    <div className="w-[30%] m-[1%]">
        <div className="rounded-[8px] bg-[#f3f4f6] p-[5%]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.</p>
        </div>
        <div className="flex items-center mt-[4%]">
            <img className="w-[50px] h-[50px] rounded-[50%]" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="User" />
            <div className="ml-[4%]">
                <p className="font-[500]">Gladis Lennon</p>
                <p>Head of SEO</p>
            </div>
        </div>
    </div>
  )
}
