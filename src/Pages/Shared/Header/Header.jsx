import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="">
      <img
        className="mt-5 mx-auto h-28"
        src="https://i.ibb.co/mGRTJPH/download.png"
        alt=""
      />
      <h1 className="text-xl mt-2 text-slate-500">
        Journalism Without Fear or Favour
      </h1>
      <p className="text-xl mt-2">{moment().format("dddd, MMMM Do, YYYY")}</p>
    </div>
  );
};

export default Header;
