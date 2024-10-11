// import { useState } from "react"
// // import { toast } from "react-hot-toast"
// // import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import { sendOtp } from "../../../services/operations/authAPI"
// // import { setSignupData } from "../../../slices/authSlice"
// // import { ACCOUNT_TYPE } from "../../../utils/constants"
// import Tab from "../../Common/Tab"

// function SignupForm() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // student or instructor
//   // const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

//   const[passAlert, setPassAlert] = useState("");

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const { firstName, lastName, email, password, confirmPassword } = formData

//   // Handle input fields, when some value changes
//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//     // if(e.target.name === "password" && e.target.value.length<8) {
//     //   setPassAlert("Must be 8");
//     // }
//   }

//   // Handle Form Submission
//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//     //const password = {password};
//     if(password.length < 8){
//       setPassAlert('Password must be of at least eight characters')
//       return
//     }
    
//     // if (password !== confirmPassword) {
//     //   toast.error("Passwords Do Not Match")
//     //   return
//     // }
//     // const signupData = {
//     //   ...formData,
//     //   accountType,
//     // }

//     // Setting signup data to state
//     // To be used after otp verification
//     // dispatch(setSignupData(signupData))
//     // Send OTP to user for verification
//     dispatch(sendOtp(formData.email, navigate))

//     // Reset
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     })
//     setAccountType(ACCOUNT_TYPE.STUDENT)
//   }

//   // data to pass to Tab component
//   // const tabData = [
//   //   {
//   //     id: 1,
//   //     tabName: "Student",
//   //     type: ACCOUNT_TYPE.STUDENT,
//   //   },
//   //   {
//   //     id: 2,
//   //     tabName: "Instructor",
//   //     type: ACCOUNT_TYPE.INSTRUCTOR,
//   //   },
//   // ]

//   return (
//     <div>
//       {/* Tab */}
//       <Tab tabData={tabData} field={accountType} setField={setAccountType} />
//       {/* Form */}
//       <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
//         <div className="flex gap-x-4">
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               First Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="firstName"
//               value={firstName}
//               onChange={handleOnChange}
//               placeholder="Enter first name"
//               className="form-style w-full"
//             />
//           </label>
//           <label>
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Last Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="lastName"
//               value={lastName}
//               onChange={handleOnChange}
//               placeholder="Enter last name"
//               className="form-style w-full"
//             />
//           </label>
//         </div>
//         <label className="w-full">
//           <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//             Email Address <sup className="text-pink-200">*</sup>
//           </p>
//           <input
//             required
//             type="text"
//             name="email"
//             pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
//             value={email}
//             onChange={handleOnChange}
//             placeholder="Enter email address"
//             className="form-style w-full"
//           />
//         </label>
//         <div className="flex gap-x-4">
//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Create Password <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={password}
//               onChange={handleOnChange}
//               placeholder="Enter Password"
//               className="form-style w-full !pr-10"
//             />
//             <span
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {/* {showPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )} */}
//             </span>
//             <p className="text-pink-100 mt-1 ">{passAlert}</p>
//           </label>
//           <label className="relative">
//             <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//               Confirm Password <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={handleOnChange}
//               placeholder="Confirm Password"
//               className="form-style w-full !pr-10"
//             />
//             <span
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//               className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//             >
//               {/* {showConfirmPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )} */}
//             </span>
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   )
// }

// export default SignupForm
























































import React from "react";
import { useState } from "react";
// import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
    // console.log("App.js - setIsLoggedIn:", setIsLoggedIn);


// const SignupForm = () => {
    

  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
//   console.log(setIsLoggedIn);

  

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      // toast.error("Passwords do not match");
      return;
    }
    console.log(setIsLoggedIn);

    setIsLoggedIn(true);
    // toast.success("Account Create");
    const accountData = {
      ...formData,
    };

    const finalData = {
      ...accountData,
      accountType
    }
    console.log(finalData);

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            name="email"
          />
        </label>

        {/* <div className="flex gap-x-4">
          <label htmlFor="w-full relative" className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password
              <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />

            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div> */}


            <div className="flex gap-x-4">
              {/* Create Password */}
              <label htmlFor="password" className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Create Password
                  <sup className="text-pink-200">*</sup>
                </p>

                <input
                  type={showCreatePass ? "text" : "password"}
                  required
                  placeholder="Enter Password"
                  onChange={changeHandler}
                  value={formData.password}
                  name="password"
                  id="password"  
                  className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                <span
                  onClick={() => setShowCreatePass(!showCreatePass)}
                  className="absolute right-3 top-[38px] cursor-pointer z-10"
                >
                  {showCreatePass ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>

              {/* Confirm Password */}
              <label htmlFor="confirmPassword" className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                  Confirm Password
                  <sup className="text-pink-200">*</sup>
                </p>

                <input
                  type={showConfirmPass ? "text" : "password"}
                  required
                  placeholder="Confirm Password"
                  onChange={changeHandler}
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"  
                  className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />

                <span
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="absolute right-3 top-[38px] cursor-pointer z-10"
                >
                  {showConfirmPass ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>



        

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

