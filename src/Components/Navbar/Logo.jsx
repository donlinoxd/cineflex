import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";

const Logo = () => {
  return (
    <div className="w-16 md:w-20 mr-6 sm:mr-12 lg:mr-16 xl:mr-24 inline-block">
      <Link to="/">
        <img src={logo} alt="CINEFLEX logo" />
      </Link>
    </div>
  );
};

export default Logo;
