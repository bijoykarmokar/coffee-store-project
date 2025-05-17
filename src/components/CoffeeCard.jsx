import React from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  // console.log(coffee);
  const { _id, name, chef, photo, category } = coffee;
  const handleCoffeeDelete=()=>{
    // console.log(id);

  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed);
    
  if (result.isConfirmed) {

     fetch(`http://localhost:5000/coffees/${_id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.deletedCount){
           Swal.fire({
             title: "Deleted!",
             text: "Your Coffee has been deleted.",
             icon: "success"
           });
           const remainingCoffee = coffees.filter(coff=>coff._id !== _id);
           setCoffees(remainingCoffee)
       }
        
    })
  }
});
    
  }
  return (
    <div className="card card-side bg-base-300 shadow-md p-10">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-center items-center gap-20">
        <div>
          <h2 className="card-title">Name:{name}</h2>
          <h3>Chef:{chef}</h3>
          <h3>Price:{category}</h3>
        </div>
        <div className="card-actions justify-end ">
          <div className="join join-vertical space-y-2">
            <Link to={`/coffee/${_id}`}><button className="btn join-item bg-blue-400 rounded-3xl"><IoEye size={25}></IoEye></button></Link>
            <Link to={`/updateCoffee/${_id}`}><button className="btn join-item bg-gray-500 rounded-3xl"><MdEdit size={25}></MdEdit></button></Link>
            <button onClick={()=>handleCoffeeDelete(_id)} className="btn join-item bg-red-500 rounded-3xl"><MdDelete size={25}></MdDelete></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
