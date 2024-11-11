import { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";


const About = () => {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/567667a5322c5162a2ec")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error( error);
        setLoading(false); // Ensure loading is turned off even if there's an error
      });
  }, []);

  
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="">
      <div className=" py-5 h-96  flex flex-col justify-center items-center ">
        <img className="w-20 h-20" src="https://i.ibb.co.com/xX8nfFf/logo.png" alt="" />
        <h1 className="text-4xl lg:text-5xl text-[#005A7F] font-bold text-poppins"> Libertatio</h1>
        <p className="mx-5 text-center text-lg lg:text-xl font-semibold text-[#ff8d6b] mt-5">
          Welcome to Libertatio - Your Gateway to Unbiased and Timely News!
        </p>
      </div>

      <div className="  ">
          <p className="py-5 px-5 md:px-10 text-justify sm:text-center text-lg lg:text-xl text-slate-500 font-semibold ">
            <i>
            "Libertatio is a dynamic and innovative online news portal committed
            to delivering accurate, reliable, and up-to-the-minute news from
            around the world. Our mission is to empower individuals with the
            information they need to make informed decisions, foster a sense of
            community, and promote a deeper understanding of the events shaping
            our world."
            </i>
          </p>
      </div>

      <div>
        
        <div className="my-5 border flex flex-col  py-10 rounded-lg bg-slate-50  items-center text-center">
        <div className="flex flex-col justify-center items-center ">
          <img className="w-20 h-20 " src="https://i.ibb.co.com/xX8nfFf/logo.png" alt="" />
        <h1 className="text-4xl lg:text-5xl text-poppins py-5  text-center font-bold text-[#005A7F] ">Our Team</h1>
          <p className="  px-5 md:px-10 text-justify sm:text-center text-lg lg:text-xl text-slate-600  font-semibold ">
           <i>
           Behind Libertatio is a team of passionate journalists, writers,
            editors, and tech enthusiasts who are committed to excellence. Our
            team works tirelessly to bring you the latest news, insightful
            analyses, and thought-provoking features.
           </i>
          </p>
          </div> 
          <div className="carousel carousel-center  sm:w-5/6 space-x-4 p-4">
            {employees.map((employee) => (
              <>
               <div className="carousel-item relative group h-96 flex-col overflow-hidden">
  <img src={employee.image} className="rounded w-80 h-96 object-cover" />
  <div className="opacity-0 rounded group-hover:opacity-100 transition-opacity  duration-500  transform translate-y-full group-hover:translate-y-0 flex flex-col justify-center gap-5 group-hover:bg-[#005b7f88] backdrop-blur-sm w-80 h-96 absolute">
    <p className="text-xl font-semibold text-poppins text-slate-200">{employee.name}</p>
    <p className="text-2xl font-semibold text-poppins text-[#ff7d56]">{employee.position}</p>
  </div>
</div>

              </>
            ))}
          </div>
        </div>
      </div>

      <div className="my-14 py-10  rounded-lg gap-5  flex flex-col ">
        <div className=" ">
          <h1 className="text-4xl  lg:text-5xl text-[#005A7F] text-poppins text-center font-bold">
            Our Vision
          </h1>
        </div>
        <div className=" italic  px-5  py-5 flex flex-col sm:flex-row justify-around items-center gap-3 text-justify text-xl font-medium  text-slate-200 ">
        <img className="w-72 sm:w-80 lg:w-96 lg:h-[400px]  rounded hover:rotate-2 transition-all duration-300 shadow-slate-400 " src="https://i.ibb.co.com/d2WcCtz/news-concept.webp" alt="news"/>
        <div className="w-full sm:w-5/12 mt-5 sm:mt-0">
        <img className="w-20 h-20 mx-auto " src="https://i.ibb.co.com/xX8nfFf/logo.png" alt="" />
        <p className=" text-justify lg:text-center text-base sm:text-lg lg:text-xl font-medium text-slate-700 my-3">
            At Libertatio, we envision a world where everyone has access to
            credible news, fostering a more informed and connected global
            community. We strive to be a trusted source of news that transcends
            geographical boundaries, providing diverse perspectives on a wide
            range of topics.
          </p>
        </div>
          
        </div>
      </div>

      <div className="my-14 py-10  rounded-lg  flex flex-col gap-5  ">
        <div className=" ">
          <h1 className="text-4xl lg:text-5xl text-[#005A7F] text-poppins text-center font-bold">
          What Sets Us Apart
          </h1>
        </div>
        <div className=" px-5  sm:py-5 flex flex-col  sm:flex-row justify-around items-center gap-3 text-justify text-xl font-medium  text-slate-200 ">
        <img className="w-72 sm:w-80 lg:w-96 lg:h-[400px]  rounded hover:rotate-1 transition-all duration-300  " src="https://i.ibb.co.com/9yprKJX/newssit.webp" alt="news"/>
        <div className="w-full sm:w-5/12">
        
        
          <ul className="flex flex-col gap-3  text-xl font-medium  text-slate-700 my-3">
              <li>
                <p className="text-xl lg:text-2xl font-semibold text-poppins border-b-2  w-48 sm:w-60 text-[#ff7d56] border-[#ff7d56]">Unbiased Reporting </p>
                <p className="italic text-sm lg:text-lg">
                We adhere to the principles of journalistic integrity,
                presenting news in a fair, balanced, and unbiased manner.
                </p>
              </li>
              <li>
                <p className="text-xl lg:text-2xl font-semibold text-poppins border-b-2 w-48 sm:w-60 text-[#ff7d56] border-[#ff7d56]">
                Timeliness
                </p>
                <p className="italic text-sm lg:text-lg">
                We
                understand the importance of timely information. Our team is
                dedicated to delivering news as it happens.
                </p> 
              </li>
              <li>
                <p className="text-xl lg:text-2xl font-semibold text-poppins border-b-2  w-48 sm:w-60 text-[#ff7d56] border-[#ff7d56]">
                Diverse Coverage
                </p>
               <p className="italic text-sm lg:text-lg">
               From politics and technology to entertainment and science, we
               cover a broad spectrum of topics.
               </p>
              </li>
            </ul>
        </div>
          
        </div>
      </div>






      
    </div>
  );
};

export default About;
