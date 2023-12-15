import React from 'react'
import image from '../src/assets/download.png'
// import img from '../src/assets/download.png'
// import img from;
// let navlinks =["Home","About","Contact", "Skills","Projects"]
const navlinks = ["Home","About","Contact","Services",]
const text = [
  {
    placeholder:"Enter your name",
    type:"Text",
  },
  {
    placeholder:"Enter your Email",
    type:"email",
  },
  {
    placeholder:"Enter your Password",
    type:"number",
  },
]
const App = () => {
  return (
    <>
    <div className=' bg-gray-400'>
    <div className='flex gap-10 justify-around bg-gray-400 text-[3rem] '>
   <img src={image} alt=""  className='h-[150PX]  rounded-full'/>
      <nav className='flex gap-9 ' >
      {/* <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Services</a> */}

      {navlinks.map((items)=>{
       return (

       <a href="" className='py-10'>{items}</a>
       )
      })}
       <div className=' py-[2.5rem] text-black-300 font-serif pl-20' color>Login</div>
      </nav>
    </div>
    <div>
    <h1 className='px-24 text-center text-[4rem]'>Vist Our resturant</h1>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quidem laborum fugiat. Dolor commodi vel, ut nobis totam dolores illo, obcaecati et soluta omnis consequatur officia, enim officiis tenetur debitis dolorum quas accusamus veniam. Magni at, quaerat iste cum architecto quae reprehenderit placeat, nam quis sapiente est excepturi natus. Eum totam iure voluptates! Ipsam et pariatur ratione repellat eligendi earum velit, commodi nam exercitationem sed assumenda necessitatibus, cum error, consectetur animi neque at magni ullam nesciunt natus dolores iste dolorem? Provident, maxime? Debitis excepturi dicta doloremque officiis ullam quo libero aliquam! Iure quaerat minus assumenda facere tempore, sint consequatur magni est? Quia obcaecati atque quae libero reprehenderit autem voluptatibus hic laudantium suscipit architecto aliquam similique illum aliquid sunt aperiam quam impedit maxime qui culpa voluptatem, eligendi inventore expedita ut. Saepe, exercitationem est? Molestias, totam ullam eos sint odit quia reiciendis?    
    </div>
<div className='flex flex-col w-[100%] items-center mt-5'>
    {text.map((items)=>{
      return (
        <>
          <input type="text"  className=' bg-transparent  mb-2 py-2 w-[50%] placeholder:text-center rounded-md  placeholder:text-white placeholder:text-lg border-2' placeholder={items.placeholder}/>
        </>
      )
    })}
    <button className=' border-2 py-1 px-10 mb-4 rounded-md pt-2 '>Sing In</button>
    </div>
    <div>

      {/* <img src={image} alt=""  className='w-auto rounded-full'/> */}
    </div>
    </div>

    </>
  )
}

export default App