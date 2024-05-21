import React, { useState } from "react";
import { Navbar } from 'reactstrap';
import {yupResolver} from '@hookform/resolvers/yup';
import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {useForm} from 'react-hook-form'; 
import { useNavigate, Link } from "react-router-dom";
import { userSchemaValidation } from "../Validation/UserValidaton";
import { registerUser } from "../Features/UserSliceupdate";

import babysitterImg from "./baby 3.png"; // Assuming the image path is correct

const backgroundStyle = {
  display: 'flex',
  justifyContent: 'space-between', // Ensure space between the form and the image
  alignItems: 'center',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  textAlign: 'center',
  padding: '0 50px', // Add some padding for spacing
};

const buttonStylegray = {
  backgroundColor: 'gray',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.3s', // Add transition effect for opacity
};


const imgStyle = {
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  filter: 'brightness(50%)',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
};

const formContainerStyle = {
  width: '40%', // Adjust the width to make room for the image
  padding: '20px',
  boxSizing: 'border-box',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: '10px',
  zIndex: 1, // Ensure the form is above the background image
};

const formStyle = {
  width: '100%',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
  color: 'white',
};

const labelStyle = {
  color: 'white',
};

const inputStyle = {
  backgroundColor: '#333',
  color: 'white',
  borderColor: '#555',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.3s',
};

const imageContainerStyle = {
  width: '40%', // Adjust the width as needed
  height: 'auto',
  zIndex: 1, // Ensure the image is above the background
};

const babyImageStyle = {
  width: '30%',
  height: 'auto',
  borderRadius: '10px',
};

function Register(){

  const userList = useSelector((state) => state.users.value);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const GenderForm = () => {
  const gender = useSelector((state) => state.gender.gender);
  const error = useSelector((state) => state.gender.error);
};


  const dispatch = useDispatch();   // 
  const navigate = useNavigate(); 

  //
  
    //validation
    const { 
      register,
      handleSubmit: submitForm, //submitForm will be called when the form is submitted
      formState:{errors},
  }=useForm({resolver: yupResolver(userSchemaValidation),});

  const handleSubmit = (data) => {
      const userData={
        
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password,
          gender: data.gender,

      }

      const validGenders = ['male', 'female'];
      if (!validGenders.includes(data.gender.toLowerCase())) {
        console.log('Invalid gender. Please select male or female ');
        return;
      }
      dispatch(registerUser(userData))

      navigate("/login");
      console.log(data);
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return(
    <div style={backgroundStyle}>
      <img src={babysitterImg} alt="Background" style={imgStyle} />

      <div style={formContainerStyle}>
        <div style={formStyle}>
          <h2 style={headingStyle}>Create User</h2>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label style={labelStyle}>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleChange}
                style={inputStyle}
                {
                  ...register('name',{ value: name,
                    onChange:(e)=>setname(e.target.value),
                  })
              }
              />
               <p className="error">{errors.name?.message}</p>
            </div>

            <div className="form-group">
            <label style={labelStyle}>Email:</label>
                                <input
                                    className="form-control"
                                    id="Email" 
                                    name="email" 
                                    placeholder="Enter Your Email"
                                    type="email"
                                    value={email}
                                    {
                                        ...register('email',{ value: email,
                                          onChange:(e)=>setemail(e.target.value),
                                        })
                                    }
                                />
                                <p className="error">{errors.email?.message}</p>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter Your Phone.No"
                                    type="text"
                                    value={phone}
                                    {
                                        ...register('phone',{ value: phone,
                                          onChange:(e)=>setphone(e.target.value),
                                        })
                                      }
                                />
                                <p className="error">{errors.phone?.message}</p>
                            </div>

            <div className="form-group">
              <label style={labelStyle}>Password:</label>
              <input
                type="password"
                className="form-control"
                id="password" 
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={handleChange}
                style={inputStyle}
                {
                  ...register('password',{ value: password,
                    onChange:(e)=>setpassword(e.target.value),
                  })
              }
              />
            <p className="error">{errors.password?.message}</p>

            </div>

            <div className="form-group">
              <label style={labelStyle}>Password Confirm:</label>
              <input
               className="form-control"
               id="confirmPassword"
               placeholder="Confirm Your Password"
               type="password"
               {
                   ...register("confirmPassword",{ value: confirmPassword,
                     onChange:(e)=>setconfirmPassword(e.target.value),
                   })
                 }
                onChange={handleChange}
                style={inputStyle}
              />
            <p className="error">{errors.confirmPassword?.message}</p>

            </div>

            <div className="form-group">
              <label style={labelStyle}>Gender:</label>
              <div>
                <label style={{ color: 'white' }}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label style={{ marginLeft: "10px", color: 'white' }}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    
                  />{" "}
                  Female

                  {
                  ...register('password',{ value: password,
                    onChange:(e)=>setgender(e.target.value),
                  })
              }
            
            <p className="error">{errors.gender?.message}</p>

                </label>
              </div>
            </div>

            <div style={buttonContainerStyle}>
              <button type="submit" style={buttonStyle}>
                Register
              </button>
              <button type="button" style={buttonStylegray} onClick={() => navigate("/")}>
                Go Home
              </button>
            </div>
          </form>
        </div>
      </div>

      <div style={imageContainerStyle}>
        <img src={babysitterImg} alt="Baby" style={babyImageStyle} />
      </div>
    </div>
  );
}

export default Register;
