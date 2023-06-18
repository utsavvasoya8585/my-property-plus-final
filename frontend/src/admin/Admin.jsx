import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div className='grid grid-cols-5 gap-5 m-5'>
            <Link to={"/admin/blog/allblog"} className='bg-blue-500 text-white text-xl px-3 py-2 font-semibold rounded-3xl'>
                Blogs
            </Link>
            <Link to={"/admin/property/allproperty"} className='bg-blue-500 text-white text-xl px-3 py-2 font-semibold rounded-3xl'>
                Properties
            </Link>
        </div>
    )
}

export default Admin