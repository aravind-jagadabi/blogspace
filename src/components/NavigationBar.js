import { Button } from '@mui/material';
import Logo from '../styles/blogspace-mark.png';
import LoginSection from './LoginSection';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
  return(
    <div className = 'navigation-bar'>
      <Link to = '/'>
        <img src = {Logo} alt = 'blogspace-logo' className = 'blogspace-logo'/>
      </Link>

      <div className = 'listnav-section'>
        <div className = 'bloglist-section'>
          <Link to = '/yourblogs' style = {{color: 'black'}}>
            <Button variant = 'text' color = 'inherit' sx = {{margin: '10px'}}>Your Blogs</Button>
          </Link>
          <Link to = '/createone' style = {{color: 'black'}}>
            <Button variant = 'text' color = 'inherit' sx = {{margin: '10px'}}>Create One</Button>
          </Link>

        </div>
        <LoginSection />
      </div>
    </div>
  );
}

export default NavigationBar;