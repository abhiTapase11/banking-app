import React from "react";

const CustomerDetailsForm = () => {
  return (
    <div>
      <form>
        <header>Customer Details Form</header>
        <div>
          <label>Customer name</label>
          <input placeholder="Enter name" />
        </div>
        <div>
          <label>Phone number</label>
          <input placeholder="Enter name" />
        </div>
        <div>
          <label>Location</label>
          <input placeholder="Enter name" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CustomerDetailsForm;
