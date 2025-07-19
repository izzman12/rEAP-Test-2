import React, { useState } from "react";

export default function BillingForm() {
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
    units: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Billing form submitted!");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">EAP Billing Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Provider Dropdown */}
        <select
          className="w-full p-2 border rounded"
          name="providerName"
          value={formData.providerName}
          onChange={handleChange}
          required
        >
          <option value="">Select Provider</option>
          <option value="ComPsych">ComPsych</option>
          <option value="Lyra Health">Lyra Health</option>
          <option value="Spring Health">Spring Health</option>
          <option value="Magellan Health">Magellan Health</option>
          <option value="Modern Health">Modern Health</option>
          <option value="CuraLinc Healthcare">CuraLinc Healthcare</option>
          <option value="Optum">Optum</option>
          <option value="BHS">BHS</option>
          <option value="Aetna Resources For Living">Aetna Resources For Living</option>
          <option value="Cigna EAP">Cigna EAP</option>
        </select>

        {/* Client Name */}
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />

        {/* Date of Service */}
        <input
          className="w-full p-2 border rounded"
          type="date"
          name="dateOfService"
          value={formData.dateOfService}
          onChange={handleChange}
        />

        {/* Service Provided Dropdown */}
        <select
          className="w-full p

