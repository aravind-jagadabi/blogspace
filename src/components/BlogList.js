import '../styles/BlogList.css';
import { Link } from 'react-router-dom';

const BlogList = ({array}) => {
  return(
      <div className = 'bloglist-outer'>
        {array.length > 0 ? array.map((item) => {
          return <div key = {item.id} className='blog-list'>
            <Link to= {`/yourblogs/${item.id}`} style={{color:'black', textDecoration: 'none'}}>
              <div className = 'blog-author-date'>
                <h4 className = 'author-heading'>{item.author}</h4>
                {/* <h5 className='date-heading'>{item.date}</h5> */}
              </div>
              <div className='blog-title-content'>
                <h2 className='title-heading'>{item.title}</h2>
              </div>
            </Link>
          </div>
        })
        : <h1 className='blog-empty-list'>Hmmm... You don't have any blogs added to show please add one to show :)</h1>
        
        }

      </div>
  );
}

export default BlogList;