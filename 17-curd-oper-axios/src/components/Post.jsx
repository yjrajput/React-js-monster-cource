import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../Services/APidata'
const Post = () => {
    const [data, setData] = useState([])

    const getApiData = async () =>{
        try{
            const res = await getPost();
            setData(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getApiData()
    }, [])


    const handleOnDelete = async (index) =>{
       const res = await deletePost(index);
       console.log(res)
    }
  return (
    
    <div className='container'>
            <div className='form-container'>
                <input type="text" />
                <input type="text" />
                <button className='add-btn'>Add</button>
            </div>

            <div className='grid-container'>
                
                    {
                        data.map((items) =>(
                            <div key={items.id} className='card'>
                                <p>{items.id}.</p>
                                <p>Title: {items.title}</p>
                                <p>News: {items.body}</p>

                                <div className='btn-container'>
                                    <button className='edit-btn'>Edit</button>
                                    <button onClick={() => handleOnDelete(items.id)} className='delete-btn'>Delete</button>
                                </div>
                            </div>
                        ))
                    }
           
            </div>
       
    </div>
  )
}

export default Post