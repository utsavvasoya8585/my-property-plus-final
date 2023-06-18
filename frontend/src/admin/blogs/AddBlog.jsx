import React, { useEffect, useState } from 'react';
import axios from "axios";
import { uploadOnCloudinary } from './upload';
import { useNavigate, useParams } from 'react-router-dom';

function AddBlog() {
    const [blogType, setBlogType] = useState("Business");
    const [title, setTitle] = useState("Blog");
    const [description1, setDescription1] = useState("");
    const [description2, setDescription2] = useState("");
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    // get data from previous 
    useEffect(() => {
        if (!id) return;
        else {
            axios.get("/api/blog/getblog/" + id).then((response) => {
                const { data } = response;
                setBlogType(data[0].blogType);
                setTitle(data[0].title);
                setDescription1(data[0].description1);
                setDescription2(data[0].description2);
            })
        }
    }, [id]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        // Add images on Cloudinery;
        let arr = [];
        for (let i = 0; i < files.length; i++) {
            // console.log(files[i])
            const data = await uploadOnCloudinary(files[i]);
            arr.push(data);
            // console.log(data)
        }
        console.log(arr)
        setImages(arr);

        if (!id) {
            const blogData = { blogType, title, images: arr, description1, description2 };
            try {
                await axios.post("/api/blog/addblog", blogData);
                alert("Added");
                navigate("/admin/blog/allblog");
            } catch (error) {
                alert("this is error: ", error);
            }
        } else {
            try {
                const blogData = { blogType, title, images: arr, description1, description2 };
                await axios.put("/api/blog/update/" + id, blogData);
                alert("Updated");
                navigate("/admin/blog/allblog");
            } catch (error) {
                alert("This is updation error: ", error);
            }
        }
    }

    return (
        <div className='text-3xl flex flex-col items-center justify-center'>
            <div className='pt-10'>
                <form className='flex flex-col gap-7' action="">
                    {/* status & fStatus */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div>
                            <label htmlFor="type"> Blog Type: </label>
                            <select name='type' value={blogType} onChange={(e) => setBlogType(e.target.value)}>
                                <option value="Business">Business</option>
                                <option value="Review">Review</option>
                            </select>
                        </div>
                    </div>

                    {/* Title */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div className='w-[100%]'>
                            <label htmlFor="title">Blog Title: </label>
                            <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Blog Title' />
                        </div>
                    </div>

                    {/* Images */}
                    <div className='flex flex-row items-center justify-between gap-4'>
                        <input onChange={(e) => setFiles(e.target.files)} type='file' multiple={false} >
                        </input>
                    </div>

                    {/* Description 1 */}
                    <div>
                        <textarea value={description1} onChange={(e) => setDescription1(e.target.value)} className='bg-gray-100 rounded-xl w-full text-[20px] px-5 py-2' placeholder='Description 1' name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    {/* Description 2 */}
                    <div>
                        <textarea value={description2} onChange={(e) => setDescription2(e.target.value)} className='bg-gray-100 rounded-xl w-full text-[20px] px-5 py-2' placeholder='Description 2' name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    {/* Add Blog */}
                    <div>
                        <button onClick={handleSubmit} className='bg-two text-one font-bold px-5 py-2 rounded-full text-[20px]' type='submit'> Add Blog</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBlog