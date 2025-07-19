import React, { useState } from "react";

export default function BillingForm() {
  const [formData, setFormData] = useState({
    providerName: "",
    clientName: "",
    dateOfService: "",
    serviceProvided: "<select
  className="w-full p-2 border rounded"
  name="placeOfService"
  value={formData.placeOfService}
  onChange={handleChange}
  required
>
  <option value="">Select Place of Service</option>
  <option value="office">Office</option>
  <option value="home">Home</option>
  <option value="telehealth">Telehealth</option>
  <option value="hospital">Hospital</option>
</select>
",
    claimFrequency: "",
    diagnosisCode: "<select
  className="w-full p-2 border rounded"
  name="diagnosisCode"
  value={formData.diagnosisCode}
  onChange={handleChange}
  required
>
  <option value="">Select Diagnosis Code</option>
  <option value="F32.0">F32.0 - Mild Depressive Episode</option>
  <option value="F32.1">F32.1 - Moderate Depressive Episode</option>
  <option value="F32.2">F32.2 - Severe Depressive Episode</option>
  <option value="F33.1">F33.1 - Recurrent Depressive Disorder, Moderate</option>
  <option value="F41.1">F41.1 - Generalized Anxiety Disorder</option>
  <option value="F41.0">F41.0 - Panic Disorder</option>
  <option value="F43.10">F43.10 - Post-Traumatic Stress Disorder (PTSD)</option>
  <option value="F34.1">F34.1 - Dysthymia</option>
  <option value="F90.0">F90.0 - Attention-Deficit Hyperactivity Disorder</option>
  <option value="F50.9">F50.9 - Eating Disorder, Unspecified</option>
</select>
",
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
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="providerName"
          placeholder="Provider Name"
          value={formData.providerName}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="date"
          name="dateOfService"
          value={formData.dateOfService}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          name="serviceProvided"
          placeholder="Service Provided"
          value={formData.serviceProvided}
          onChange={handleChange}
        />
        <select
          className="w-full p-2 border rounded"
          name="claimFrequency"
          value={formData.claimFrequency}
          onChange={handleChange}
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
        />
        <input
          className="w-full p-2 border rounded"
          type="number"
          step="0.1"
          name="units"
          placeholder="Units (Hours)"
          value={formData.units}
          onChange={handleChange}
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
