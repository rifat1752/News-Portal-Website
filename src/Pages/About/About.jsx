import { useEffect, useState } from "react";
import bg from "../../assets/21762384_80010067.jpg";
import { Result } from "postcss";

const About = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/567667a5322c5162a2ec")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className="px-5">
      <div className="my-5 flex flex-col items-center  pt-20">
        <h1 className="text-5xl text-slate-800 font-bold">About Newstodays</h1>
        <p className=" ml-5 text-xl font-medium text-slate-600 my-3">
          Welcome to Newstodays - Your Gateway to Unbiased and Timely News!
        </p>
      </div>

      <div className="my-5 pt-20 bordered shadow-lg rounded-lg relative md:grid md:grid-cols-3">
        <div className="relative py-10 md:h-64 flex justify-center     ">
          <h1 className="text-5xl text-slate-700 text-center font-bold">
            Who We Are
          </h1>
        </div>
        <div className=" italic px-5 col-span-2 py-5 bg-blue-950 bg-opacity-90   h-64 text-justify text-xl font-medium flex items-end  text-slate-200 ">
          <p>
            "Newstodays is a dynamic and innovative online news portal committed
            to delivering accurate, reliable, and up-to-the-minute news from
            around the world. Our mission is to empower individuals with the
            information they need to make informed decisions, foster a sense of
            community, and promote a deeper understanding of the events shaping
            our world."
          </p>
        </div>
      </div>

      <div>
        <div className="my-5 pt-20">
          <h1 className="text-5xl text-slate-800 font-bold"></h1>
          <p className=" ml-10 text-xl font-medium text-slate-600 my-3"></p>
        </div>
        <div className="my-5 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl text-slate-800 font-bold">Our Team</h1>
          <p className=" ml-5 text-xl font-medium text-slate-600 my-3">
            Behind Newstodays is a team of passionate journalists, writers,
            editors, and tech enthusiasts who are committed to excellence. Our
            team works tirelessly to bring you the latest news, insightful
            analyses, and thought-provoking features.
          </p>
          <div className="carousel carousel-center max-w-md md:max-w-xl lg:max-w-3xl p-4 space-x-4 bg-neutral rounded-box">
            {employees.map((employee) => (
              <>
                <div className="carousel-item flex-col">
                  <img src={employee.image} className="rounded-box w-96 h-64" />
                  <p className="text-xl font-semibold text-slate-300">
                    {employee.name}
                  </p>
                  <p className="text-xl font-semibold text-slate-200">
                    {employee.position}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="my-5 pt-20 bordered shadow-lg rounded-lg relative md:grid md:grid-cols-3">
        <div className="relative py-10 bg-blue-950 md:h-64 flex justify-center     ">
          <h1 className="text-5xl text-slate-200 text-center font-bold">
            Our Vision
          </h1>
        </div>
        <div className=" italic px-5 col-span-2 py-5  bg-opacity-90   h-64 text-justify text-xl font-medium flex items-end  text-slate-200 ">
          <p className=" ml-5 text-xl font-medium text-slate-700 my-3">
            At Newstodays, we envision a world where everyone has access to
            credible news, fostering a more informed and connected global
            community. We strive to be a trusted source of news that transcends
            geographical boundaries, providing diverse perspectives on a wide
            range of topics.
          </p>
        </div>
      </div>

      <div className="my-5 pt-20 bordered shadow-lg rounded-lg relative md:grid md:grid-cols-3">
        <div className="relative py-10 md:h-64 flex justify-center     ">
          <h1 className="text-5xl text-slate-700 text-center font-bold">
            What Sets Us Apart
          </h1>
        </div>
        <div className="  italic px-5 col-span-2 py-5 bg-blue-950 bg-opacity-90   h-64 text-justify text-xl font-medium flex items-end  text-slate-200 ">
          <p className="pl-2">
            <ul className="">
              <li>
                <span className="text-2xl font-semibold">
                  Unbiased Reporting :
                </span>
                We adhere to the principles of journalistic integrity,
                presenting news in a fair, balanced, and unbiased manner.
              </li>
              <li>
                <span className="text-2xl font-semibold">Timeliness :</span> We
                understand the importance of timely information. Our team is
                dedicated to delivering news as it happens.
              </li>
              <li>
                <span className="text-2xl font-semibold">
                  Diverse Coverage :
                </span>
                From politics and technology to entertainment and science, we
                cover a broad spectrum of topics.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
