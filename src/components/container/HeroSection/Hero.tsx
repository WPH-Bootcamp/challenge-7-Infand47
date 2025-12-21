import { Button } from "../../ui/Button/Button";
import HeroImage from "/hero.svg";


const Hero = () => {
  return (
    <section className="bg-black text-white px-4 lg:px-0 py-12 lg:py-20">
      <div className="w-full mx-auto px-4 lg:max-w-[1280px] lg:px-[140px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
        <div className="flex flex-col gap-10 lg:gap-10 lg:flex-1">
            <div className="font-sans flex flex-col gap-2 lg:gap-2">
              <h1 className="font-bold text-4xl lg:text-[56px] leading-[44px] lg:leading-[68px] tracking-[-0.72px] lg:tracking-[-1.12px] text-[#fdfdfd]">
                Your Tech Partner for <span className="text-[#ff6c37]">Smarter Growth</span>
              </h1>
              <p className="font-semibold text-base lg:text-xl leading-[30px] lg:leading-[34px] text-[#fdfdfd]">
                We deliver tailored IT solutions to help you scale with speed and confidence.
              </p>
            </div>
            <Button>
              Let's Talk
            </Button>
          </div>
      <div
        className="relative w-full mt-2 h-[391px] lg:flex-1 lg:h-[600px] lg:mt-0 rounded-2xl overflow-hidden"
      >
        <img src={HeroImage} alt="Hero" className="w-full h-full object-cover lg:absolute lg:top-0 lg:left-0" />
      </div>
    </div>
      </div>
    </section>
  );
  };

export default Hero;
