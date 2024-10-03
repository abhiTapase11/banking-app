import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isCustomerDetailsOpen, setIsCustomerDetailsOpen] = useState(false);
  const [isAccountDetailsOpen, setIsAccountDetailsOpen] = useState(false);
  const [isLoanDetailsOpen, setIsLoanDetailsOpen] = useState(false);
  const [isCardDetailsOpen, setIsCardDetailsOpen] = useState(false);

  const handleOpenClick = (row) => {
    if (row === "Customer Details") {
      setIsCustomerDetailsOpen((prev) => !prev);
    } else if (row === "Account Details") {
      setIsAccountDetailsOpen((prev) => !prev);
    } else if (row === "Loan Details") {
      setIsLoanDetailsOpen((prev) => !prev);
    } else {
      setIsCardDetailsOpen((prev) => !prev);
    }
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="Home">
      <header>Manager Dashboard</header>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isCustomerDetailsOpen ? (
          <button onClick={() => handleOpenClick("Customer Details")}>-</button>
        ) : (
          <button onClick={() => handleOpenClick("Customer Details")}>+</button>
        )}
        <div>Customer Details</div>
        {isCustomerDetailsOpen && (
          <>
            <p>All customer details</p>
            {/* data from API */}
            <button
              onClick={() => {
                handleNavigate("add-customer");
              }}
            >
              Add Customer
            </button>
          </>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isAccountDetailsOpen ? (
          <button onClick={() => handleOpenClick("Account Details")}>-</button>
        ) : (
          <button onClick={() => handleOpenClick("Account Details")}>+</button>
        )}
        <div>Account Details</div>
        {isAccountDetailsOpen && (
          <>
            <p>All account details</p>
            {/* data from API */}
            <button
              onClick={() => {
                handleNavigate("add-account");
              }}
            >
              Add Account
            </button>
          </>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isLoanDetailsOpen ? (
          <button onClick={() => handleOpenClick("Loan Details")}>-</button>
        ) : (
          <button onClick={() => handleOpenClick("Loan Details")}>+</button>
        )}
        <div>Loan Details</div>
        {isLoanDetailsOpen && (
          <>
            <p>All Loan details</p>
            {/* data from API */}
            <button
              onClick={() => {
                handleNavigate("add-loan");
              }}
            >
              Add Loan
            </button>
          </>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {isCardDetailsOpen ? (
          <button onClick={() => handleOpenClick("Card Details")}>-</button>
        ) : (
          <button onClick={() => handleOpenClick("Card Details")}>+</button>
        )}
        <div>Card Details</div>
        {isCardDetailsOpen && (
          <>
            <p>All Card details</p>
            {/* data from API */}
            <button
              onClick={() => {
                handleNavigate("add-card");
              }}
            >
              Add Card
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
