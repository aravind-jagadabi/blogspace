import '../styles/NewBlog.css';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewBlog = ({addBlog, array}) => {
  const current = new Date();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`);


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }


  const handlePublishClick = () => {
    const currentDate = new Date();
    setDate(`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`);
    const notify = () => toast("Successfully Published");
    const warning = () => toast("You've forgot to fill some of fields");

    const position = array.length === 0 ? 1 : array[array.length-1].id + 1;
    
    (title !== '' && author !== '' && content !== '') && addBlog({title:title, author:author, content:content, id:position, date:date});
    (title !== '' && author !== '' && content !== '') ? notify() : warning();
  }
  

  return(
    <div className = 'new-blog'>
      <div>
        <h1 className = 'blog-title'>You can start writing the blogs.... </h1>
      </div>
      <div className = 'blog-input'>
        <input type='text' placeholder = 'Set the Title' className = 'title-input' onChange = {handleTitleChange} />
        <input type = 'text' placeholder = 'Your Name' className='author-input' onChange = {handleAuthorChange} />
        <textarea name='content' rows={4} cols={40} placeholder='Your Content goes here...' 
        className = 'content-input' onChange={handleContentChange} />
        
        <button className= 'publish-button' onClick = {handlePublishClick}>Publish Now</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default NewBlog;