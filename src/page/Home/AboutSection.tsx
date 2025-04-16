import HomeSection from "../../components/Layout/HomeSection";

function AboutSection() {
  return (
    <HomeSection
      title="About"
      description="Learn more about me, my background and my skills."
      link="/about"
      linkname="Learn More"
      bg="/image/HeroSections/about.jpg"
    >
      {/* <div className="h-96"></div>
      <div
        className="bg-slate-400 absolute md:w-64 w-48 h-72 md:h-96 left-0 top-6 grayscale-50"
        style={{
          // background: `url('public/image/Me/about1.jpg')`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      ></div>
      <div
        className="bg-slate-400 absolute md:w-64 w-48 h-72 md:h-96 bottom-6 right-0 bg-hover-effect"
        style={{
          // backgroundImage: `url('public/image/HeroSections/about.jpg')`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}
      ></div> */}
    </HomeSection>
  );
}

export default AboutSection;
