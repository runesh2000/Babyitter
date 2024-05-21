import * as yup from 'yup'; 

//create schema
export const LoginValid=yup.object().shape({
    //required check if empty or not 
    name: yup.string() .required("name cannot be empty") .name("name should be well formatted"), 
    password: yup.string() .required("Password cannot be empty") .min(6),
});


