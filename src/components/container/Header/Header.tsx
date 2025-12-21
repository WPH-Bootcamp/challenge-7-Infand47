import { Button } from "../../ui/Button/Button";
import Logo from "/Logo.svg";
import Menu from "/menu.svg";


const Header = () => {
  return (
    <header className="bg-white/20 backdrop-blur-sm justify-center sticky top-0 z-50 ">
      <nav className="bg-black flex justify-between items-center p-4">
        <img src={Logo} alt="" className="flex ml-1" />
        <img src={Menu} alt="" className="lg:hidden" />
                <div className="hidden lg:flex justify-center items-center gap-10 font-semibold  text-base text-white">
                  <a href="">About</a>
                  <a href="">Service</a>
                  <a href="">Projects</a>
                  <a href="">Testimonials</a>
                  <a href="">FAQ</a>
          <Button>Let's Talk</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
