import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-auto max-w-[1120px] w-full px-2 py-[10px] flex items-center justify-between">
      <Link to="/">
        <img
          src="https://ecm.capitalone.com/CI_Common/assets/images/logos/capital-one-logo.svg"
          alt="Capital One"
          width={127}
        />
      </Link>
      <div className="flex items-center">
        <select className="border-0">
          <option>English</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
