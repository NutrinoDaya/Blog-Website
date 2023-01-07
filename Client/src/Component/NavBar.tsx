import React, { useContext } from 'react';
import '../Style/navBar.scss';
// import logo from '../Logo.PNG'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/authContext';

const Navbar = () => {
  const {currUser,logout} = useContext(AuthContext)

  return (
    <nav>
      <div className="nav-left">
         <div className="Logo">
         {/* <a  href="/"><img src={logo} alt="Logo" /></a> */}
         </div>
        {/* <h1>Bau Journal for Science</h1> */}
          <h1>Journal</h1>

      </div>
      <div className="nav-right">
        <Link to ="/">Home</Link>
        <Link to ="/Papers">Papers</Link>
        <Link to ="/Write">Write</Link>
        <Link to ="/Search">Search</Link>
        <Link to ="/Contact">Contact</Link>
        {/* <Link to ="/Login">Login</Link> */}
        <span>{currUser?.username}</span>
       {currUser?(
        <span className='Logout' onClick={logout}>Logout</span> ) : (<Link className='link' to = "/Login"> Login</Link>
      )
      }
      
 
        <Link to ="/About">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
// //
//      {/* (<div
//                             className={i18n.language === 'en' ? 'nav-buttons' : 'nav-buttons-ar'}
//                         >

//                              {currUser? (
//                             <li>
//                                 <Link className="signin" type="submit" onClick={handlelogout}>Logout</Link>
//                             </li>
//                             )
//                             :(
//                               <>
//                             <li> 
//                                 <Link className="signin" type="submit" onClick={() => onClick('displayBasic')}>{t('nav-Login')}</Link>
//                             </li>
//                             <li>
//                                 <Link className="signup" type="submit" onClick={() => onClick('displayBasic2')}>{t('nav-register')}</Link>
//                             </li>
//                             </>
//                            )}  
//                         </div>
//                             /}