import Footer from '../../components/Layout/Footer'

function Contact() {
  return (
    <div>
          <section
      className="relative bg-cover bg-center dark:bg-slate-800  text-slate-500 dark:text-white h-screen w-screen flex justify-between items-center px-6 md:px-20"
      style={{
        backgroundImage: 'url(/assets/join-bg.jpg)', // ganti sesuai nama file bg kamu
      }}
    >
      <div className=" inset-0 bg-black opacity-30 w-1/2 " />

      <div className="w-full flex flex-col items-end text-end z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          READY TO EMBARK ON YOUR <br /> WEB DEV JOURNEY?
        </h2>
        <p className="text-lg md:text-xl  dark:text-slate-200 text-gray-600 w-full">
          Talent development is at the core of what we stand for. Join our global team and work on
          some of the most anticipated titles in the industry.
        </p>
        {/* Optional Button */}
        {/* 
        <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded text-white text-base font-semibold">
          Explore Careers
        </button> 
        */}
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Contact
