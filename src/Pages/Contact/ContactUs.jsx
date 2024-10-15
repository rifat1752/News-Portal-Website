import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";



const ContactUs = () => {
    return (
        <div className="flex flex-col my-10">
            <div className="py-5 h-96 flex flex-col justify-center items-center ">
              <img className="w-20 h-20" src="https://i.ibb.co.com/xX8nfFf/logo.png" alt="" />
              <h1 className="text-4xl lg:text-5xl text-[#005A7F] font-bold text-poppins"> Contact Us</h1>

              <p className="  mx-5 text-center text-lg lg:text-xl font-semibold text-[#ff8d6b] mt-5">
              Journalism Without Fear or Favour
              </p>
            </div>
           <div className="mx-10 flex flex-col ">
          <div className="flex flex-col items-center my-5">
          <h1 className="text-4xl lg:text-5xl text-[#005A7F] font-bold text-poppins mt-5">Head Office</h1>
          <p className="text-base my-5"> Kazi Nazrul Islam Avenue, Dhaka</p>
          </div>
           <div  className="flex flex-col sm:flex-row items-center sm:items-start gap-10   sm:justify-around">
                <div className=" text-lg ">
                        <p className="text-2xl font-semibold border-b-2 mx-auto w-16 border-[#ff8d6b] text-poppins">Email</p>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-[330px]  items-center"><p className="font-bold  w-40">Office </p>: info@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-[330px]  items-center"><p className="font-bold  w-40"> News Department</p>: news@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-[330px]  items-center"><p className="font-bold  w-40"> Editorial Department</p>: editorial@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-[330px]  items-center"><p className="font-bold  w-40"> Print Advertisement Department</p>: ad@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-[330px]   items-center"><p className="font-bold  w-40"> Digital Advertisement Department</p>: adsales@libertatio.com</li>
                </div>
            
                <div className="flex flex-row sm:flex-col  justify-center  gap-5 sm:gap-5 items-center sm:items-start">
                    <ul>
                        <p className="text-2xl font-semibold border-b-2 w-20 border-[#ff8d6b] text-poppins">Phone</p>
                        <li className="text-lg font-semibold my-1">+88017********</li>
                        <li className="text-lg font-semibold my-1">+88019********</li>
                        <li className="text-lg font-semibold my-1">+88018********</li>
                        <li className="text-lg font-semibold my-1">+88015********</li>
                    </ul>
                   <div className=" ">
                   <h2 className=" text-2xl border-b-2 w-32 border-[#ff8d6b] font-bold ">Find Us On</h2>
                   <div className="social   w-full flex flex-col">
                     <a href="" className="    w-40  flex items-center py-2 text-slate-600  text-xl font-semibold"><MdFacebook className="text-blue-600  mx-2"/> Facebook</a>
                     <a href="" className="    w-40  flex items-center py-2 text-slate-600  text-xl font-semibold"><FaTwitter className="text-blue-600  mx-2"/> Twitter</a>
                     <a href="" className="   w-40  flex items-center py-2 text-slate-600  text-xl font-semibold"><FaInstagram className="text-fuchsia-600  mx-2"/> Instagram</a>
                   </div>
                 </div>
                </div>
            </div>
            </div> 

           </div>  
    );
};

export default ContactUs;