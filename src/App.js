import { useState } from "react";
import BlogList from "./components/BlogList";
import NavigationBar from "./components/NavigationBar";
import NewBlog from "./components/NewBlog";
import './styles/NavigationBar.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ShowBlog from "./components/ShowBlog";
import BlogSection from "./components/BlogSection";


function App() {
  const [array, setArray] = useState([]);

  const addBlog = (newData) => {
    const newArray = [...array, newData];
    setArray(newArray);
  }

  const deleteBlog = (blogId) => {
    const updatedArray = array.filter((blog) => {
      return blog.id !== blogId;
    })
    setArray(updatedArray);
  }

  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/createone" element = {<NewBlog addBlog = {addBlog} array = {array}/>} />
          <Route path="/yourblogs" element = {<BlogList array={array}/>} />
          <Route path="/yourblogs/:blogid" element = {<ShowBlog array = {array} deleteBlog = {deleteBlog} />} />
          <Route path= "/blogspace" element = {<BlogSection />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;