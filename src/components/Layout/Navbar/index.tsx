import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import NavMenu from "./NavFull";
import {  useEffect, useState } from 'react'


const Navbar = () => {
  const [navFull, setNavFull] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  function NavToggle(){
    setNavFull(!navFull);
    return navFull;
  }

  return (
    <nav className={`w-screen fixed top-0 z-50 ${scrolled ? 'bg-gradient-to-b' : 'bg-transparent'}  from-slate-50/80 to-transparent dark:from-slate-700/80 flex items-center justify-between p-3 px-5 pb-10  md:px-20`}>
        <NavLogo />
        <Hamburger navFull={navFull} NavToggle={NavToggle} />
        <NavMenu navFull={navFull} NavToggle={NavToggle} />
    </nav>
  );
};

export default Navbar;
