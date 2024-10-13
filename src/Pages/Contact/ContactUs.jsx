import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";



const ContactUs = () => {
    return (
        <div >
            <div className="py-5 h-96 flex flex-col justify-center items-center ">
              <img className="w-20 h-20" src="https://i.ibb.co.com/xX8nfFf/logo.png" alt="" />
              <h1 className="text-5xl text-[#005A7F] font-bold text-poppins mt-5"> Contact Us</h1>

              <p className="  text-xl font-semibold text-[#ff8d6b] mt-5">
              Journalism Without Fear or Favour
              </p>
            </div>
           <div className="mx-10">
           <h1 className="text-4xl text-[#005A7F] font-bold text-poppins mt-5">Head Office</h1>
           <p className="text-base my-5"> Kazi Nazrul Islam Avenue, Dhaka</p>
           <div  className="grid grid-cols-3">
                <div className=" text-lg col-span-2">
                        <p className="text-2xl font-semibold border-b-2 w-16 border-[#ff8d6b] text-poppins">Email</p>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-96  items-center"><p className="font-bold  w-48">Office </p>: info@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-96  items-center"><p className="font-bold  w-48"> News Department</p>: news@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-96  items-center"><p className="font-bold  w-48"> Editorial Department</p>: editorial@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-96  items-center"><p className="font-bold  w-48"> Print Advertisement Department</p>: ad@libertatio.com</li>
                        <li className="text-base mt-5 mb-1 flex gap-1  w-96  items-center"><p className="font-bold  w-48"> Digital Advertisement Department</p>: adsales@libertatio.com</li>
                </div>
            


            
            
                <div className="">
                    <ul>
                        <p className="text-2xl font-semibold border-b-2 w-20 border-[#ff8d6b] text-poppins">Phone</p>
                        <li className="text-lg font-semibold my-1">+88017********</li>
                        <li className="text-lg font-semibold my-1">+88019********</li>
                        <li className="text-lg font-semibold my-1">+88018********</li>
                        <li className="text-lg font-semibold my-1">+88015********</li>
                    </ul>
                   <div className="my-10 ">
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