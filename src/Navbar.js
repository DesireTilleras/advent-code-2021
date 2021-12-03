

import { useState} from 'react';
import { useNavigate } from 'react-router';


const Navbar = () => {
    const navigate = useNavigate();

    
    function changeActive(element, url) {
        const currentlyActive = document.querySelector('.active');
        currentlyActive.classList.remove('active');
        element.classList.add('active');
        navigate(url);
    }

    return (
      <div className="topnav">
        <p
          className="active"
          onClick={(e) => changeActive(e.target, '/')}
        >
          Home
        </p>
        <p
          onClick={(e) => changeActive(e.target, '/dayOne')}
        >
          Day One!
        </p>
        <p
          onClick={(e) => changeActive(e.target, '/dayTwo')}
        >
          Day Two!
        </p>
        <p
          onClick={(e) => changeActive(e.target, '/dayThree')}
        >
          Day Three!
        </p>

        {/* <a href="/dayFour">Day Four</a> */}
      </div>
    );
}
 
export default Navbar;