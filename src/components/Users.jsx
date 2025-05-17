import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUser = useLoaderData();
  console.log(initialUser);
  const [users, setUsers] = useState(initialUser);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

         fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){

            const remainingUser = users.filter(user=>user._id !== id);
            setUsers(remainingUser);
            Swal.fire({
              title: "Deleted!",
              text: "Your DeletedUser has been successfull.",
              icon: "success",
            });
        }
        })
      }
    });
  };
  return (
 <div className="max-w-7xl mx-auto mt-20 space-y-10">
    <h2 className="text-4xl md:text-6xl text-center">UserInformation:{users.length}</h2>
       <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>No</label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>
                <label>{index + 1}</label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <th className="flex gap-5 justify-center items-center">
                <button className="btn btn-xs">
                  <IoEye size={25}></IoEye>
                </button>
                <button className="btn btn-xs">
                  <MdEdit size={25}></MdEdit>
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-xs"
                >
                  <MdDelete size={25}></MdDelete>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 </div>
  );
};

export default Users;
