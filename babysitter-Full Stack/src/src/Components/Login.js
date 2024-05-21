import { Container, Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap";
import Logo from "../Images/logo-t.png";
import {LoginValid} from '../Validations/LoginValidation';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { login, validate } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

function Login(){

    //two state variable because has two form fild have
    let [name,setname]=useState("");
    let [password,setpassword]=useState("");

    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const resultAction = await dispatch(login(loginData));
        console.log("Result action:", resultAction);
  
        // Check for errors
        if (resultAction.error) {
          console.error("Login error:", resultAction.error.message);
          // Handle the error state, such as showing an error message to the user
        } else {
          // Successful login
          if (resultAction.payload && resultAction.payload.role === "admin") {
            navigate("/users");
          } else {
            navigate("/admin");
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
        // Handle other types of errors (e.g., network issues, unexpected responses)
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  

    const dispatch = useDispatch();
    const user=useSelector((state)=>state.users.user);
    const isSuccess=useSelector((state)=>state.users.isSuccess);
    const isError=useSelector((state)=>state.users.isError);
    const navigate=useNavigate();
    //object
    const { 
        register,
        handleSubmit: submitForm,
        formState:{errors},
    }=useForm({resolver: yupResolver(LoginValid)});

    useEffect(()=>{
        if(isSuccess){
            
            navigate("/select");
        }
        if(isError){
            alert("Invalid User..");
        }
    },[user, isSuccess, isError]); //automatic function

    const handleSubmit = (formData) => {
        const data={
            //sending the data 
            name:name, //from the state variable
            password:password
        }
        dispatch(login(data))
    };
    
    return(
        <Container fluid>
            <Row className="form-row">
                <Col md="6" className="column">
                    <form className="div-form">

                        <div style={{textAlign:"center"}}>
                            <img src={Logo}/>
                        </div>

                        <FormGroup>
                            <Label for="name" className="smalltext">
                            Name
                            </Label>
                            <input 
                                className="form-control"
                                id="name" 
                                name="name" 
                                placeholder="Enter your name" 
                                type="name"
                                {
                                    ...register('name',{
                                        value:{name},
                                        onChange:(e)=>setname(e.target.value)
                                    })
                                }
                            />
                            <p className="error">{errors.name?.message}</p>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Password" className="smalltext">
                            Password
                            </Label>
                            <input
                                className="form-control"
                                id="Password"
                                name="password"
                                placeholder="Enter Password"
                                type="password"
                                {
                                    ...register('password',{
                                        value:{password},
                                        onChange:(e)=>setpassword(e.target.value)
                                    })
                                }
                            />
                            <p className="error">{errors.password?.message}</p>
                        </FormGroup>
            
                        <FormGroup check>
                                <Input type="checkbox" className="smalltext"/>
                                <Label check className="smalltext">Remember Me</Label>
                        </FormGroup>

                        <FormGroup>
                            <Label className="smalltext">Forget Password</Label>
                        </FormGroup>
                        
                        <FormGroup>
                            <Button className="button" color="primary" onClick={submitForm(handleSubmit)}>Submit</Button>
                        </FormGroup>
                        
                        <FormGroup>
                            <Label className="smalltext">No Account? Register now.</Label>
                        </FormGroup>
                    </form>
                </Col>
            </Row> 
        </Container>
    );
}
export default Login;