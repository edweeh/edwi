import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Psignup = () => {
    const [inputs, setInputs] = useState({
        "First Name": '',
        "Phone": '',
        "Email": '',
        "Username": '',
        "Password": '',
      });
    
      // const navigate = useNavigate();
    
      const InputHandler = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        console.log(inputs);
      };
    
      const SaveData = () => {
        axios.post("http://localhost:4005/dnew", inputs)
          .then((response) => {
            alert("Record Saved");
          })
          .catch((err) => console.log(err));
        // navigate('/studentview')
      };
  return (
    
<center>
      <div className="container"  >
        
        
        <table border="0" className="table">
          <tbody>

         <div className='header'>   
          <tr>
              <td colSpan="2">
                <p className="header-text">CREATE AN ACCOUNT</p>
              </td>
            </tr>
            </div>
            

            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label"> First Name: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input type="Fnm" name="Fname" className="input-text" placeholder="Fname"  onChange={InputHandler }  value={inputs.pname} />
              </td>
            </tr>

            
            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Lnm" className="form-label">Last Name: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input type="Lnm" name="Lname" className="input-text" placeholder="Lname"  onChange={InputHandler } pattern="[0]{1}[0-9]{9}" value={inputs.pphone} />
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Em" className="form-label">Email: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input type="Em" name="email" className="input-text" placeholder="@gmail.com"  onChange={InputHandler }  value={inputs.email} />
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="Usn" className="form-label">Username: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input type="email" name="username" className="input-text" placeholder="Uname"  onChange={InputHandler }  value={inputs.username} />
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <label htmlFor="phn" className="form-label">Password: </label>
              </td>
            </tr>


            <tr>
              <td className="label-td" colSpan="2">
                <input type="Password" name="Password" className="input-text" placeholder="Pass"  onChange={InputHandler } value={inputs.ppassword} />
              </td>
            </tr>


            <tr>
              <td>
                <input type="reset" value="Reset" className="login-btn btn-primary-soft btn" />
              </td>
              
              <td>
                <input type="submit" value="Sign Up" onClick={SaveData }  className="login-btn btn-primary btn" />
              </td>
            </tr>

            
            <tr>
              <td colSpan="2">
                <br />
                <label htmlFor="" className="sub-text" style={{ fontWeight: 280 }}>
                  Already have an account?
                  <a href="Login" className="hover-link1 non-style-link">
                    Login
                  </a>
                </label>
                
              </td>
            </tr>
v
</tbody>
</table>
    </div>
    </center>
  )
}

export default Psignup