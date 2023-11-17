import '../styles/BlogSection.css';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

const BlogSection = () => {
  return(
    <div className = 'blog-section'>
      <div className = 'first-looking-ui'>
        <h1 className = 'blog-showcase-title'>The Stories. The Experiences. The Knowledge. The Tips & Trics. The Success Journey.</h1>
        <h3 className='blog-showcase-goal'> You Can Express Everything in the Way of Words</h3>
        <Link to='/createone' style = {{textDecoration: 'none', color: 'black'}}>
          {/* <h3 className='blog-showcase-navigate'>Get Started</h3> */}
          <Fab variant="extended" color = 'inherit'>
            <NavigationIcon sx={{ mr: 1 }} />
            Get Started
          </Fab>

        </Link>
        
      </div>
      <div className='second-looking-ui'>

      </div>
    </div>
  );
}

export default BlogSection;
