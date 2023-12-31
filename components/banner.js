import { logo, subtitle } from "./banner.module.css";
const Banner = ({ children }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./GloboLogo.png" alt="logo" className={logo}></img>
      </div>
      <div className="col-7 mt-5">
        <div className={subtitle}>{children}</div>
      </div>
    </header>
  );
};
export default Banner;
