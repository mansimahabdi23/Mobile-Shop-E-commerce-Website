import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import axios from 'axios';

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();

  //state
  const [name,setName] = useState(""); //name is getter and setName is setter
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");

  //get user data during initial time
  useEffect(()=>{
      const {name, email, phone, address} = auth?.user; 
      setName(name);
      setPhone(phone);
      setEmail(email);
      setAddress(address);
  },[auth?.user]);

   //form function
   const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register',
        {name,email,password,phone,address});
     
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };



  return (
    <Layout title={'Your Profile'}>
        <div className='container-fluid m-3 p-3'>
         <div className='row'>
            <div className='col-md-3'>
                <UserMenu/>
            </div>
            <div className='col-md-9'>
            <div className="form-container"> 
            <form onSubmit={handleSubmit}>
              <h4 className="title">USER PROFILE</h4>
              <div className="mb-3">
                <input 
                  type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control" 
                    id="exampleInputName"
                    placeholder='Enter your Name'
                    required 
                    autoFocus
                  />
              </div>

            <div className="mb-3">
              
              <input type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control" 
              id="exampleInputEmail"
              placeholder='Enter your Email' 
              required
              disabled
              />
            </div>

          <div className="mb-3">
            
            <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control" 
            id="exampleInputPassword"
            placeholder='Enter your Password' 
            required />
          </div>

          <div className="mb-3">
            
            <input type="text" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control" 
            id="exampleInputPhone"
            placeholder='Enter your Phone Number' 
            required />
          
          </div>

          <div className="mb-3">
          
            <input type="text" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control" 
            id="exampleInputAddress" 
            placeholder='Enter your Address'
            required />
          </div>

          
          
 
  <button type="submit" className="btn btn-primary">UPDATE</button>
 
</form>
</div>

            </div>
        </div>   
    </div>
    </Layout>
  );
};

export default Profile;