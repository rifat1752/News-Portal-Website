import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'success',
        title: 'Profile updated successfully!',
      });
    }).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error updating profile',
        text: error.message,
      });
    });
  };

  // Function to update email
  const handleUpdateEmail = () => {
    updateEmail(auth.currentUser, email).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Email updated successfully!',
      });
    }).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error updating email',
        text: error.message,
      });
    });
  };

  // Function to update password
  const handleUpdatePassword = () => {
    updatePassword(auth.currentUser, password).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Password updated successfully!',
      });
    }).catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error updating password',
        text: error.message,
      });
    });
  };

  return (
    <div className="my-5 ">
      <h2 className="text-2xl text-[#005A7F]  font-semibold text-center my-5">Update Your Profile</h2>
     <div className=" border rounded w-[550px] p-5 mx-auto">

       <div className="photo-name flex justify-center items-center gap-5">
       <div className="pr-2 border-r-2">
       <div className="flex gap-2">
        <label className="text-xl text-[#005A7F] w-32  font-semibold"> Name</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="h-8 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
        />
      </div>

      <div className="flex gap-2">
        <label className="text-xl text-[#005A7F] w-32   font-semibold">Photo</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
           className="h-8 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
        />
      </div>
       </div>

      <div className="">
        <button onClick={handleUpdateProfile} className=" bg-[#ff8d6b] h-10 text-base w-32 mt-2 font-bold text-slate-50    hover:bg-[#005A7F] hover:text-white transition-all duration-500 ">
          Update Profile
        </button>
      </div>
       </div>


       <div className=" flex justify-center items-center gap-5  mt-10">
       <div className="flex h-10 gap-2 pr-2 border-r-2 justify-center items-end ">
        <label className="text-xl text-[#005A7F] w-32    font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-8 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
        />
      </div>
      <div className="photo-name flex justify-center items-center gap-5">
        <button onClick={handleUpdateEmail} className="bg-[#ff8d6b] h-10 text-base w-32 mt-2 font-bold text-slate-50    hover:bg-[#005A7F] hover:text-white transition-all duration-500 ">
          Update Email
        </button>
      </div>
       </div>


      <div className="flex justify-center items-center gap-5  mt-10">
       <div className="flex gap-2 items-end pr-2 border-r-2">
        <label className="text-lg text-[#005A7F] w-32  font-semibold">New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
          className="h-8 outline-none border-b-2 border-[#005A7F] hover:border-[#ff8d6b] transition-all duration-500"
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
