
const HeroSection = () => {

  return <>
    <div id="HeroSection" className="sticky  -top-32 -z-10  text-center  h-[110vh] overflow-hidden -mt-10 md:px-24 px-10 flex md:flex-row flex-col-reverse items-center  justify-center md:gap-20 bg-white dark:bg-slate-900" >
      
      <div className="md:w-2/3  text-center md:text-start text-slate-600 dark:text-slate-100  md:px-4" >
        <h3 data-aos="fade-down" className="lg:text-3xl   font-semibold ">Hello World( );</h3>
        <h1 data-aos="fade-left" data-aos-duration="1000" className="lg:text-7xl md:text-6xl text-5xl font-bold mb-2">
          I am <span className="text-sky-300">Ergia </span>Buccharelli
        </h1>
        <h1 data-aos="fade-right" data-aos-duration="2000" className="md:text-3xl text-lg font-bold mb-2">
          a Fullstack <span >Website Developer</span>
        </h1>

        <p data-aos="zoom-out" data-aos-duration="3000" className="text-lg">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>

      <div data-aos="zoom-in" data-aos-duration="3000" className="w-2/3 md:min-w-96 min-w-60 flex justify-center items-center relative overflow-hidden ">
        <img src="/public/image/HeroSections/me.png" alt="" className="w-[90%] " />
      </div>

    </div>
  </>

}

export default HeroSection;
