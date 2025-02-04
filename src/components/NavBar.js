import { useState } from 'react';
import logo from '../assests/images/rocket-solid.svg';
import { Outlet,Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';


const Navbar = () => {
   
    const [login,setLogin]=useState(false);
    const [signUp,setSignUp]=useState(false);
    return (  
       
        <nav>
            
            <div className="flex justify-between fixed bg-[#030712] w-[100%] text-white items-center font-medium p-4 border-solid border-b-2 border-[#1f2937]">
                <div className="flex justify-start gap-4 items-center">
                    <button>
                        <Link to="/">
                        <div className='flex justify-start gap-2 '>
                            <img src={logo} alt="logo" className='h-[28px]' />
                            <h3 className='font-semibold text-lg '>RAG</h3>
                        </div>
                        </Link>
                    </button>
                   
                    <button>
                    <Link to="/dashboard">
                    <h3>Dashboard</h3></Link>
                    </button>
                </div>
                <div className='flex justify-start gap-4'>
                    <button onClick={()=> setLogin(true)}>Login</button>
                    <button onClick={()=> setSignUp(true)}>Sign Up</button>
                    <button>Profile</button>
                </div>
            </div>
            {
                login?(
                  <div className=' w-[100%] h-screen flex justify-center items-center fixed bg-black/40 backdrop-blur-sm'>
                    <Login setLogin={setLogin}/>
                  </div>
                ):
                ("")
            }
            {
                signUp?(
                  <div className=' w-[100%] h-screen flex justify-center items-center fixed bg-white/20 backdrop-blur-sm'>
                    <SignUp setSignUp={setSignUp}/>
                  </div>
                ):
                ("")
            }
           
        </nav>
       
    );
}
 
export default Navbar;