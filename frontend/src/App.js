import { Route, Routes } from 'react-router-dom';
import './App.css';
// import pages
import Home from "./components/home/Home";
import About from "./components/about-us/About";
import Team from "./components/team/Team";
import Services from "./components/services/Services";
import Properties from "./components/properties/Properties";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact-us/Contact";
// Common
import Navbar from "./components/updown/Navbar";
import Footer1 from './components/updown/Footer1';
import Footer2 from './components/updown/Footer2';
import Footer3 from './components/updown/Footer3';
// Single Items
import SingleBlog from "./components/blogs/SingleBlog"
import SingleService from './components/services/SingleService';
import SingleProp from './components/properties/SingleProp';
import axios from 'axios';
import AddBlog from './admin/blogs/AddBlog';
import AddProperty from './admin/properties/AddProperty';
import AllProperty from './admin/properties/AllProperty';
import AllBlogs from "./admin/blogs/AllBlogs";
import Admin from './admin/Admin';
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from 'react-toastify';

// axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.baseURL = "https://my-property-plus-backend.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/services' element={<Services />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services/:id' element={<SingleService />} />
        <Route path='/singleBlog/:id' element={<SingleBlog />} />
        <Route path='/properties/single/:id' element={<SingleProp />} />

        {/* Admin Routes */}
        <Route path='/admin' element={<Admin />} />
        <Route path="/admin/blog/addblog" element={<AddBlog />} />
        <Route path="/admin/blog/allblog" element={<AllBlogs />} />
        <Route path="/admin/blog/getblog/:id" element={<AddBlog />} />
        <Route path="/admin/property/allproperty" element={<AllProperty />} />
        <Route path="/admin/property/addproperty" element={<AddProperty />} />
        <Route path="/admin/property/getproperty/:id" element={<AddProperty />} />

      </Routes>
      <Footer1 />
      <Footer2 />
      <Footer3 />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
