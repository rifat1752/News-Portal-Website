import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loading from "../../assets/newsloading.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div>
      <div className=" w-full  h-96 flex justify-center items-center">
        <Lottie className="w-80 h-80" animationData={loading} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
