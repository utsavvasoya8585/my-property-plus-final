import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AllProperty() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("/api/property/getproperty")
            .then((response) => {
                setProperties(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleDelete = async (e, id) => {
        e.preventDefault();
        try {
            await axios.delete("/api/property/delete/" + id);
            axios.get("/api/property/getproperty")
                .then((response) => {
                    setProperties(response.data);
                })
        } catch (error) {
            alert("This error is in deletion", error);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4 px-[10%] m-5'>
            <Link to={"/admin/property/addproperty"} className='bg-blue-500 text-white text-xl px-3 py-2 font-semibold rounded-3xl'>
                Add Property
            </Link>


            {properties && properties?.map((data, i) => {
                return (
                    <div className='flex flex-row items-center justify-between gap-2 bg-one px-10 py-2 rounded-[30px]'>
                        <div>{data?.name}</div>
                        <Link to={"/admin/property/getproperty/" + data._id} className='bg-blue-500 text-white text-xl px-3 py-2 font-semibold rounded-3xl'>
                            Edit
                        </Link>
                        <Link onClick={(e) => handleDelete(e, data._id)} className='bg-red-500 text-white text-xl px-3 py-2 font-semibold rounded-3xl'>
                            Delete
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AllProperty