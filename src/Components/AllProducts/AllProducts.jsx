import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function AllProducts() {
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)


    function getAllProducts() {
        setLoading(true)
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>{
        console.log(res.data);
        setAllProducts(res.data)
        setLoading(false)
        toast.success("welcome")
        })
        .catch(()=>{
        toast.error("failed to load data. please try again later")
        setLoading(false)
        })
      }

    useEffect(() => {
     getAllProducts()
    }, [])
      

  return (
   <>
{loading ? <div className="spinner bg-[#3BBA3E]"></div> :  <div className="container mx-auto py-4">
 <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        { allProducts.map((product)=> (
          <div key={product.id}>
           
          <div className='product p-2 my-2 hover:shadow-lg hover:shadow-emerald-600 duration-300 border rounded-lg'>
          
             <img src={product.image} alt={product.title} className='w-full h-[32vw] object-contain' />
             <h3 className='font-semibold mb-1'>{product.title.split(" ").slice(0,2).join(" ")}</h3>
             <div className='flex justify-between p-3'>
               <span>{product.price} EGP</span>
               <span>{product.rating.rate} <i className='fas fa-star text-yellow-400'></i></span>
             </div>
            
           </div>
          
         </div>
        ))}
      </div>
 </div>}
   </>
  )
}
