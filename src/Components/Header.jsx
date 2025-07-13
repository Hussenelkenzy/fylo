import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
  const headerRef = useRef();
  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
        // console.log(window.scrollY);
        
      }else{
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "50px 0";

      }
    })
  })


  const [links , setLinks] = useState(["Features", "Team", "SignIn"]);

  return (
    <header ref={headerRef} className='pt-[50px] z-50 w-full fixed top-0 left-0 transition-all duration-200'>
      <div className='container sm:px-[10px] md:px-[50px] lg:px-[80px] mx-auto flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row'>
        <a href="#">
          <img src="/src/assets/images/logo.svg" alt="logo-img"/>
        </a>

        <nav>
          <ul className='flex gap-[50px] items-center'>
            {links.map((link)=>(
              <li key={link}>
                <a href="`/${link.toLowerCase()}`}" 
                className='text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200'
                >{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
