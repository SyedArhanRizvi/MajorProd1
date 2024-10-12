import React, { useContext, useEffect, useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { UserContext } from "../../../../Contexts/userContext";
import Admin from "../../Home/Admin/Admin";
// import { useNavigate } from "react-router";
function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const adminLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:4000/api/loginUser",
        { email, password },
        {
          withCredentials: true,
        }

      );
      navigator("/adminPage")
    } catch (error) {
      console.log("Due to some issus you cant loggedIn ", error);
    }
  };
  // const navigate = useNavigate();

  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  
    const userLoggedInCheker = async () => {
      const result = await axios.get(
        "http://localhost:4000/api/isUserLoggedIn",
        {
          withCredentials: true,
        }
      );
      if(result.statusText === "OK") {
        setUserLoggedIn(true);
        console.log(userLoggedIn);
      } 
    
    };


    useEffect(() => {
      userLoggedInCheker();
    }, []);

    

  return (
    <>
    {
      userLoggedIn ? <Admin/> :  <section className="admin">
      <div>
        {" "}
        <form onSubmit={adminLoginHandler}>
          <input
            type="text"
            placeholder="Enter Your email here.."
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your password here.."
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" className="btn" value={"Submit"} />
        </form>
      </div>
    </section>
    }
    </>
    
   
  );
}

export default AdminLogin;
