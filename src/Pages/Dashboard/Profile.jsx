import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import Swal from 'sweetalert2';
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const auth = getAuth();
  
  // Local state to manage form input fields
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  // Function to update profile (name and photo URL)
  const handleUpdateProfile = () => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL
    }).then(() => {
      toast.success(' Profile updated successfully!')
     
    }).catch(error => {
      toast.error("Error! Failed to Update profile.")
    });
  };

  // Function to update email
  const handleUpdateEmail = () => {
    updateEmail(auth.currentUser, email).then(() => {
      toast.success(' Email updated successfully!')
    }).catch(error => {
      toast.error("Error! Failed to Update Email")
    });
  };

  // Function to update password
  const handleUpdatePassword = () => {
    updatePassword(auth.currentUser, password).then(() => {
      toast.success(' Password updated successfully!')
    }).catch(error => {
      toast.error("Error! Failed to Update Password.")
    });
  };

  return (
    <div className="my-10 ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-poppins text-[#005A7F]  font-semibold text-center my-5">Update Your Profile</h2>
     <div className=" border border-slate-300 shadow-lg shadow-slate-300 px-10 py-10   rounded max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-slate-50 mx-auto">

       <div className="photo-name flex flex-col sm:flex-row sm:justify-center sm:items-center gap-3 sm:gap-5 ">
       <div className=" pr-2 sm:border-r-2">
       <div className="flex flex-col sm:flex-row sm:gap-2">
        <label className="text-xl text-[#005A7F] w-32  font-semibold"> Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-60 md:w-72 h-10 outline-none border-b-2 border-[#005A7F] bg-transparent hover:border-[#ff8d6b] transition-all duration-500"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-2 mt-2">
        <label className="text-xl text-[#005A7F] w-32   font-semibold">Photo</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
           className="w-60 md:w-72 h-8 outline-none border-b-2  bg-transparent border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
        />
      </div>
       </div>

      <div className="">
        <button onClick={handleUpdateProfile} className=" bg-[#ff8d6b] h-10 text-base w-32 mt-2 font-bold text-slate-50    hover:bg-[#005A7F] hover:text-white transition-all duration-500 ">
          Update Profile
        </button>
      </div>
       </div>


       <div className=" flex flex-col sm:flex-row sm:justify-center sm:items-center gap-5  mt-10">
       <div className="flex flex-col sm:flex-row h-10 gap-2 pr-2 sm:border-r-2 sm:justify-center sm:items-end ">
        <label className="text-xl text-[#005A7F] w-32    font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-60 md:w-72 bg-transparent h-8 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
        />
      </div>
      <div className="photo-name flex sm:justify-center sm:items-center gap-5">
        <button onClick={handleUpdateEmail} className="bg-[#ff8d6b] h-10 text-base w-32 mt-2 font-bold text-slate-50    hover:bg-[#005A7F] hover:text-white transition-all duration-500 ">
          Update Email
        </button>
      </div>
       </div>


      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-5  mt-10">
       <div className="flex flex-col sm:flex-row sm:gap-2 sm:items-end pr-2 sm:border-r-2">
        <label className="text-lg text-[#005A7F] w-32  font-semibold">New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
          className="w-60 md:w-72 bg-transparent h-8 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
        />
       </div>
       <div className="">
        <button onClick={handleUpdatePassword} className=" bg-[#ff8d6b] h-10 text-base w-32 mt-2 font-bold text-slate-50    hover:bg-[#005A7F] hover:text-white transition-all duration-500 ">
          Update Password
        </button>
      </div>
      </div>

      

    
      

      
     </div>
    </div>
  );
};

export default Profile;
