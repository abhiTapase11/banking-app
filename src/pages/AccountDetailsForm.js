import axios from "axios";
import React, { useEffect, useState } from "react";

const AccountDetailsForm = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response= await axios.get("");
        console.log("🚀 ~ fetchOptions ~ response:", response)

        // setOptions(response);
      } catch (error) {
        console.log("Error while fetching customer data. ",error);
      }
    };
    fetchOptions();
  }, []);

  return (
    <div>
      <form>
        <header>Account Details Form</header>
        <div>
          <label>Select Customer</label>
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option value="">Select option</option>
            {options.map((option)=>{
                return <option value={option}>{option}</option>
            })}
          </select>
        </div>
        <div>
          <label>Account ID</label>
          <input type="number" placeholder="Enter Account ID" />
        </div>
        <div>
          <label>Account Type</label>
          <select>
            <option>Account Type</option>
            <option>Savings</option>
            <option>FD</option>
            <option>RD</option>
          </select>
        </div>
        <div>
          <label>Balance</label>
          <input type="number" placeholder="Enter Balance" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AccountDetailsForm;
