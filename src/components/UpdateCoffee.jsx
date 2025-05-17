import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, taste, photo, supplier, details, price, chef } =
    useLoaderData();

  const handleUpdatedCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-lg md:text-3xl lg:text-5xl font-bold">
          Updated Coffee Details
        </h1>
        <p className="text-sm md:text-lg text-gray-500">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdatedCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label font-semibold text-lg">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label font-semibold text-lg">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full"
              placeholder="Enter Coffee Supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label font-semibold text-lg">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input w-full"
              placeholder="Enter Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label font-semibold text-lg">Chef</label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              className="input w-full"
              placeholder="Enter Coffee Chef"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label font-semibold text-lg">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="input w-full"
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label font-semibold text-lg">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input w-full"
              placeholder="Enter Coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-8">
          <label className="label font-semibold text-lg">Photo</label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <input type="submit" className="btn w-full" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
