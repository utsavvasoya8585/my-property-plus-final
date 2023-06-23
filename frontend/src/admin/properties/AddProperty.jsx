import React, { useEffect, useState } from 'react';
import axios from "axios";
import { uploadOnCloudinary } from '../blogs/upload';
import { useNavigate, useParams } from 'react-router-dom';

function AddProperty() {
    const [featured, setFeatured] = useState(false);
    const [name, setName] = useState("");
    const [floor, setFloor] = useState();
    const [facing, setFacing] = useState();
    const [price, setPrice] = useState();
    const [propertySize, setPropertySize] = useState();
    const [propertyDes, setPropertyDes] = useState();
    const [address, setAddress] = useState();
    const [images, setImages] = useState([]);
    const [bedrooms, setBedrooms] = useState();
    const [bathrooms, setBathrooms] = useState();
    const [status, setStatus] = useState();
    const [balcony, setBalcony] = useState();
    const [fStatus, setFStatus] = useState();
    const [category, setCategory] = useState();
    const [gatedSecurity, setGatedSecurity] = useState(false);
    const [lift, setLift] = useState(false);
    const [parking, setParking] = useState(false);
    const [water, setWater] = useState(false);
    const [veg, setVeg] = useState(false);
    const [pets, setPets] = useState(false);
    const [features, setFeatures] = useState("");
    const [googleLocation, setGoogleLocation] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    const [files, setFiles] = useState([]);

    // get data from previous 
    useEffect(() => {
        if (!id) return;
        else {
            axios.get("/api/property/getproperty/" + id).then((response) => {
                const { data } = response;
                setFeatured(data[0].featured);
                setName(data[0].name);
                setFloor(data[0].floor);
                setFacing(data[0].facing);
                setPrice(data[0].price);
                setPropertyDes(data[0].propertyDes);
                setPropertySize(data[0].propertySize);
                setAddress(data[0].address);
                setBedrooms(data[0].bedrooms);
                setBathrooms(data[0].bathrooms);
                setStatus(data[0].status);
                setBalcony(data[0].balcony);
                setFStatus(data[0].fStatus);
                setCategory(data[0].category);
                setGatedSecurity(data[0].gatedSecurity);
                setLift(data[0].lift);
                setParking(data[0].parking);
                setWater(data[0].water);
                setVeg(data[0].veg);
                setPets(data[0].pets);
                setFeatures(data[0].features);
                setGoogleLocation(data[0].googleLocation);
            })
        }
    }, [id]);

    let arr = [];
    const uploadPhoto = async (event) => {
        for (let i = 0; i < files.length; i++) {
            const data = await uploadOnCloudinary(files[i]);
            arr.push(data);
        }
        setImages(arr);
    }



    const handleSubmit = async (event) => {
        event.preventDefault();

        await uploadPhoto();

        if (!id) {
            try {
                const propertyData = { featured, name, floor, facing, price, propertySize, propertyDes, address, images: arr, bedrooms, bathrooms, status, balcony, fStatus, category, gatedSecurity, lift, parking, water, veg, pets, features, googleLocation };
                await axios.post("/api/property/addproperty", propertyData);
                alert("Added");
                navigate("/admin/property/allproperty");
            } catch (error) {
                alert("this is error: ", error);
            }
        } else {
            try {
                const propertyData = { featured, name, floor, facing, price, propertySize, propertyDes, address, images: arr, bedrooms, bathrooms, status, balcony, fStatus, category, gatedSecurity, lift, parking, water, veg, pets, features, googleLocation };
                await axios.put("/api/property/update/" + id, propertyData);
                alert("Updated");
                navigate("/admin/property/allproperty");
            } catch (error) {
                alert("This is updation error: ", error);
            }
        }
    }

    return (
        <div className='text-xl flex flex-col items-center justify-center'>
            <div className='pt-10'>
                <form className='flex flex-col gap-7' action="">

                    {/* Featured */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div className='flex flex-row gap-2 items-center'>
                            <label htmlFor="featured">  Featured?: </label>
                            <input name='featured' type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
                        </div>
                    </div>



                    {/* Name */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div className='w-[100%]'>
                            <label htmlFor="name">Name </label>
                            <input name='name' value={name} onChange={(e) => setName(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Property Name' />
                        </div>
                    </div>

                    {/* Floor & propertySize */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div>
                            <label htmlFor="floor">Floor </label>
                            <input name='floor' value={floor} onChange={(e) => setFloor(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Number of floor' />
                        </div>
                        <div>
                            <label htmlFor="propertySize">Size </label>
                            <input name='propertySize' value={propertySize} onChange={(e) => setPropertySize(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Property size' />
                        </div>
                    </div>

                    {/* Facing & price */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div>
                            <label htmlFor="facing">Facing </label>
                            <input name='facing' value={facing} onChange={(e) => setFacing(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Facing' />
                        </div>
                        <div>
                            <label htmlFor="price">Price </label>
                            <input name='price' value={price} onChange={(e) => setPrice(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='price' />
                        </div>
                    </div>

                    {/* Property Description */}
                    <div>
                        <label htmlFor="propertyDes"> property description: </label>
                        <textarea name="propertyDes" value={propertyDes} onChange={(e) => setPropertyDes(e.target.value)} className='bg-gray-100 rounded-xl w-full text-[20px] px-5 py-2' placeholder='property description' id="" cols="30" rows="10"></textarea>
                    </div>

                    {/* Address */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div className='w-[100%]'>
                            <label htmlFor="address">Address </label>
                            <input name='address' value={address} onChange={(e) => setAddress(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Address' />
                        </div>
                    </div>

                    {/* Images */}
                    <div className='flex flex-row items-center justify-between gap-4'>
                        <label htmlFor="images">Images: </label>
                        <input name="images" onChange={(e) => setFiles(e.target.files)} type='file' multiple={true} />
                    </div>

                    {/* bedroom & bathroom */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div>
                            <label htmlFor="bedroom">Bedrooms:  </label>
                            <input name='bedroom' value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Bedrooms' />
                        </div>
                        <div>
                            <label htmlFor="bathroom">Bathrooms </label>
                            <input name='bathroom' value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Bathrooms' />
                        </div>
                    </div>

                    {/* status & fStatus */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div>
                            <label htmlFor="status"> Property Status: </label>
                            <select name='status' value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="Available">Available</option>
                                <option value="Occupied">Occupied</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="fStatus"> Furnished Status: </label>
                            <select name='fStatus' value={fStatus} onChange={(e) => setFStatus(e.target.value)}>
                                <option value="Apartment">Not Furnished</option>
                                <option value="Semi">Semi Furnished</option>
                                <option value="Fully">Fully Furnished</option>
                            </select>
                        </div>
                    </div>

                    {/* Catagory & balcony */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div>
                            <label htmlFor="catagory"> Catagory: </label>
                            <select name='catagory' value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Apartment">Apartment</option>
                                <option value="Villa">Villa</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="balcony">Balcony:  </label>
                            <input name='balcony' value={balcony} onChange={(e) => setBalcony(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Balcony' />
                        </div>
                    </div>

                    {/* All booleans check list */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div className='flex flex-row gap-2 items-center'>
                            <label htmlFor="gatedSecurity"> Gated Security: </label>
                            <input name='gatedSecurity' value={gatedSecurity} type="checkbox" checked={gatedSecurity} onChange={(e) => setGatedSecurity(e.target.checked)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <label htmlFor="lift">  Lift: </label>
                            <input name='lift' value={lift} type="checkbox" checked={lift} onChange={(e) => setLift(e.target.checked)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <label htmlFor="parking"> Parking: </label>
                            <input name='parking' value={parking} type="checkbox" checked={parking} onChange={(e) => setParking(e.target.checked)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <label htmlFor="water">  Water Supply </label>
                            <input name='water' value={water} type="checkbox" checked={water} onChange={(e) => setWater(e.target.checked)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <label htmlFor="veg">  Veg / Non-veg </label>
                            <input name='veg' value={veg} type="checkbox" checked={veg} onChange={(e) => setVeg(e.target.checked)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <label htmlFor="pets"> Pets: </label>
                            <input name='pets' value={pets} type="checkbox" checked={pets} onChange={(e) => setPets(e.target.checked)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 h-6 w-6' />
                        </div>
                    </div>

                    {/* Features */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div className='w-[100%]'>
                            <label htmlFor="features">Features ( comma (,) seperated) </label>
                            <input name='features' value={features} onChange={(e) => setFeatures(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Wifi,Gym,Yoga Hall,Swimming Pull' />
                        </div>
                    </div>

                    {/* Google Location Link */}
                    <div className='flex flex-row items-center justify-between gap-4 text-black'>
                        <div className='w-[100%]'>
                            <label htmlFor="glink">Google Location Link </label>
                            <input name='glink' value={googleLocation} onChange={(e) => setGoogleLocation(e.target.value)} className='bg-gray-100 rounded-full text-[20px] px-5 py-2 w-[70%]' type="text" placeholder='Property Name' />
                        </div>
                    </div>

                    {/* add property */}
                    <div>
                        <button onClick={handleSubmit} className='bg-two text-one font-bold px-5 py-2 rounded-full text-[20px]' type='submit'> Add Property</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProperty