import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleCoffee=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const supplier=e.target.supplier.value;
        const price=e.target.price.value;
        const chef=e.target.chef.value;
        const taste=e.target.taste.value;
        const details=e.target.details.value;
        const photo = e.target.photo.value;

        const newCoffee={name,supplier,price,chef,taste,details,photo}
        console.log(newCoffee);
        
        // send data to the db
        fetch("http://localhost:5000/coffees",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("data is added",data);
            
            if(data.insertedId){
                Swal.fire({
              title: "Coffee add successfully!",
              icon: "success",
              draggable: true
              });
            }
        })
    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-lg md:text-3xl lg:text-5xl font-bold'>Add New Coffee</h1>
                <p className='text-sm md:text-lg text-gray-500'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                     <label className="label font-semibold text-lg">Name</label>
                      <input type="text" name='name' className="input w-full" placeholder="Enter Coffee Name" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                     <label className="label font-semibold text-lg">Supplier</label>
                      <input type="text" name='supplier' className="input w-full" placeholder="Enter Coffee Supplier" />
                </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                     <label className="label font-semibold text-lg">Price</label>
                      <input type="text" name='price' className="input w-full" placeholder="Enter Coffee Price" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                     <label className="label font-semibold text-lg">Chef</label>
                      <input type="text" name='chef' className="input w-full" placeholder="Enter Coffee Chef" />
                </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                     <label className="label font-semibold text-lg">Taste</label>
                      <input type="text" name='taste' className="input w-full" placeholder="Enter Coffee Taste" />
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                     <label className="label font-semibold text-lg">Details</label>
                      <input type="text" name='details' className="input w-full" placeholder="Enter Coffee Details" />
                </fieldset>
                </div>
                 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-8">
                     <label className="label font-semibold text-lg">Photo</label>
                      <input type="text" name='photo' className="input w-full" placeholder="Enter Photo URL" />
                </fieldset>
                <input type="submit"  className='btn w-full' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;