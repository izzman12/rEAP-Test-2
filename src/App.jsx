const logoBlue = "#1E3A8A"; // Indigo-800 shade
const logoLightBlue = "#3B82F6"; // Blue-500 shade

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        {/* Simple stylized 'R' with a circle */}
        <circle cx="32" cy="32" r="30" fill={logoBlue} />
        <path
          d="M20 20v24c0 2.5 2 4.5 4.5 4.5h8c5 0 6-6 1-6h-5v-6h7"
          stroke={logoLightBlue}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-white text-2xl font-extrabold select-none tracking-wide">
        rEAP
      </span>
    </div>
  );
}

import React, { useState } from "react";

// --- Login Page ---
function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "Password") {
      onLogin();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">rEAP Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <label>
          Username
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

// --- NavBar ---
function NavBar({ setPage, onLogout }) {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <Logo />
      </div>
      <select
        className="bg-blue-700 p-2 rounded text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
        onChange={(e) => setPage(e.target.value)}
      >
        <option value="home">Home</option>
        <option value="billing">Submit Bill</option>
        <option value="previous">Previous Bills</option>
        <option value="profile">Profile</option>
        <option value="about">About Us</option>
      </select>
      <button
        onClick={onLogout}
        className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded shadow-md transition-colors duration-300"
      >
        Logout
      </button>
    </nav>
  );
}

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-6">
    {children}
  </div>
);

// --- Home Page ---
function HomePage() {
  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to rEAP</h1>
      <p className="text-lg text-gray-700 mb-4">
        rEAP helps providers submit Employee Assistance Program (EAP) claims
        quickly, accurately, and without the hassle.
      </p>
      <p className="text-md text-gray-600">
        Get started by submitting a bill through our easy-to-use platform.
      </p>
    </div>
  );
}

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-6">
    {children}
  </div>
);

// --- Billing Form ---
function BillingForm({ onAddBill }) {
  const [formData, setFormData] = useState({
    providerName: "",
    clientName: "",
    dateOfService: "",
    serviceProvided: "",
    claimFrequency: "",
    diagnosisCode: "",
    authorizationNumber: "",
    placeOfService: "",
    procedureCode: "",
    modifiers: "",
    charges: "",
    units: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBill({ ...formData, status: "pending", id: Date.now() });
    alert("Billing form submitted!");
    setFormData({
      providerName: "",
      clientName: "",
      dateOfService: "",
      serviceProvided: "",
      claimFrequency: "",
      diagnosisCode: "",
      authorizationNumber: "",
      placeOfService: "",
      procedureCode: "",
      modifiers: "",
      charges: "",
      units: "",
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">EAP Billing Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="providerName"
          placeholder="Provider Name"
          value={formData.providerName}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="date"
          name="dateOfService"
          value={formData.dateOfService}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="serviceProvided"
          placeholder="Service Provided"
          value={formData.serviceProvided}
          onChange={handleChange}
          required
        />
        <select
          className="w-full p-2 border rounded"
          name="claimFrequency"
          value={formData.claimFrequency}
          onChange={handleChange}
          required
        >
          <option value="">Select Claim Frequency</option>
          <option value="initial">Initial</option>
          <option value="adjustment">Adjustment</option>
          <option value="void">Void</option>
        </select>
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="diagnosisCode"
          placeholder="Diagnosis Code"
          value={formData.diagnosisCode}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="authorizationNumber"
          placeholder="Authorization Number"
          value={formData.authorizationNumber}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="placeOfService"
          placeholder="Place of Service"
          value={formData.placeOfService}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="procedureCode"
          placeholder="Procedure Code"
          value={formData.procedureCode}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="modifiers"
          placeholder="Modifiers"
          value={formData.modifiers}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="number"
          step="0.01"
          name="charges"
          placeholder="Charges ($)"
          value={formData.charges}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="number"
          step="0.1"
          name="units"
          placeholder="Units (Hours)"
          value={formData.units}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-6">
    {children}
  </div>
);

// --- Previous Bills Page ---
function PreviousBills({ bills }) {
  const statusColor = {
    pending: "yellow",
    approved: "green",
    rejected: "red",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Previous Bills</h1>
      {bills.length === 0 && <p>No bills submitted yet.</p>}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Provider</th>
            <th className="border border-gray-300 p-2">Client</th>
            <th className="border border-gray-300 p-2">Date of Service</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td className="border border-gray-300 p-2">{bill.id}</td>
              <td className="border border-gray-300 p-2">{bill.providerName}</td>
              <td className="border border-gray-300 p-2">{bill.clientName}</td>
              <td className="border border-gray-300 p-2">{bill.dateOfService}</td>
              <td className="border border-gray-300 p-2 text-center">
                <span
                  className={`inline-block w-4 h-4 rounded-full bg-${statusColor[bill.status]}-500`}
                  title={bill.status}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-6">
    {children}
  </div>
);

// --- Profile Page ---
function ProfilePage({ profileData, setProfileData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={profileData.fullName}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={profileData.email}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={profileData.phone}
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 border rounded"
          name="bio"
          placeholder="Short Bio"
          rows={4}
          value={profileData.bio}
          onChange={handleChange}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => alert("Profile saved (not really, just demo)")}
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-6">
    {children}
  </div>
);

// --- About Us Page ---
function AboutUsPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About rEAP</h1>
      <p className="mb-2">
        rEAP is a billing and provider management platform designed specifically
        for Employee Assistance Programs. Our mission is to simplify and
        streamline EAP billing, reduce administrative overhead, and improve
        provider satisfaction.
      </p>
      <p>
        Founded by industry professionals, rEAP offers an easy-to-use,
        standardized platform that consolidates billing and provider management
        into one place.
      </p>
    </div>
  );
}

const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto my-6">
    {children}
  </div>
);

// --- Main App ---
export default function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bills, setBills] = useState([]);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bio: "",
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    setPage("home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("login");
  };

  const addBill = (bill) => {
    setBills((prev) => [bill, ...prev]);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div>
      <NavBar setPage={setPage} onLogout={handleLogout} />
      {page === "home" && <HomePage />}
      {page === "billing" && <BillingForm onAddBill={addBill} />}
      {page === "previous" && <PreviousBills bills={bills} />}
      {page === "profile" && (
        <ProfilePage profileData={profileData} setProfileData={setProfileData} />
      )}
      {page === "about" && <AboutUsPage />}
    </div>
  );
}
