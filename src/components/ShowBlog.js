import { useParams } from "react-router-dom";
import '../styles/ShowBlog.css';
import { Link } from "react-router-dom";

const ShowBlog = ({array, deleteBlog}) => {
  const {blogid} = useParams();

  return(
    <div className = 'showblog-outer'>
      {array.map((blog) => {
        return blog.id === Number(blogid) && <div className = 'show-blog'>
            <h1 className = 'title-show'>{blog.title}</h1>
            <div className="author-date">
              <h4>{blog.author}</h4>
              <h5 style = {{color: 'grey'}}>Published on {blog.date}</h5>
            </div>
            <p>{blog.content}</p>
            <div style={{display: 'flex', justifyContent: 'left'}}>
              <Link to = "/yourblogs">
                <button className="delete-blog-button" onClick={() => deleteBlog(Number(blogid))}>Take Away</button>
              </Link>
            </div>
            
          </div>
      })}
    </div>
  );
}


export default ShowBlog;