import React, { useState } from "react";

export default function BillingForm() {
  const providerOptions = [
    "ComPsych",
    "Magellan Health",
    "Beacon Health Options",
    "Optum",
    "Cigna EAP",
    "Ceridian LifeWorks",
    "Morneau Shepell",
    "Modern Health",
    "Lyra Health",
    "Spring Health"
  ];

  const serviceOptions = [
    "Counseling Session",
    "Critical Incident Debrief",
    "Assessment/Intake",
    "Referral Coordination",
    "Follow-Up Session",
    "Group Counseling",
    "Crisis Counseling",
    "Telephone Consultation",
    "Substance Use Assessment",
    "Workplace Mediation"
  ];

  const diagnosisOptions = [
    "F32.0 - Mild Depression",
    "F32.1 - Moderate Depression",
    "F33.1 - Major Depressive Disorder, recurrent",
    "F41.1 - Generalized Anxiety Disorder",
    "F41.0 - Panic Disorder",
    "F43.21 - Adjustment Disorder w/ Anxiety",
    "F43.23 - Adjustment Disorder w/ Mixed Anxiety & Depressed Mood",
    "F90.0 - ADHD, Predominantly Inattentive",
    "F84.0 - Autism Spectrum Disorder",
    "F34.1 - Dysthymia"
  ];

  const procedureOptions = [
    "90791 - Psychiatric diagnostic evaluation",
    "90832 - Psychotherapy, 30 minutes",
    "90834 - Psychotherapy, 45 minutes",
    "90837 - Psychotherapy, 60 minutes",
    "90846 - Family psychotherapy (without patient)",
    "90847 - Family psychotherapy (with patient)",
    "90853 - Group psychotherapy",
    "96130 - Psychological testing evaluation",
    "96136 - Neuropsychological test administration",
    "99406 - Tobacco cessation counseling"
  ];

  const modifierOptions = [
    "GT - Telehealth via interactive audio and video",
    "95 - Synchronous telemedicine service",
    "AJ - Clinical Social Worker",
    "HO - Master’s Degree Level",
    "HN - Bachelor's Degree Level",
    "HE - Mental health program",
    "U1 - Medicaid Level of Care 1",
    "U2 - Level of Care 2",
    "UC - Medicaid",
    "HA - Child/Adolescent Program"
  ];

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
        <select
          className="w-full p-2 border rounded"
          name="providerName"
          value={formData.providerName}
          onChange={handleChange}
          required
        >
          <option value="">Select Provider</option>
          {providerOptions.map((provider) => (
            <option key={provider} value={provider}>{provider}</option>
          ))}
        </select>

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

        <select
          className="w-full p-2 border rounded"
          name="serviceProvided"
          value={formData.serviceProvided}
          onChange={handleChange}
          required
        >
          <option value="">Select Service Provided</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>

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

        <select
          className="w-full p-2 border rounded"
          name="diagnosisCode"
          value={formData.diagnosisCode}
          onChange={handleChange}
          required
        >
          <option value="">Select Diagnosis Code</option>
          {diagnosisOptions.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>

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

        <select
          className="w-full p-2 border rounded"
          name="procedureCode"
          value={formData.procedureCode}
          onChange={handleChange}
          required
        >
          <option value="">Select Procedure Code</option>
          {procedureOptions.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>

        <select
          className="w-full p-2 border rounded"
          name="modifiers"
          value={formData.modifiers}
          onChange={handleChange}
        >
          <option value="">Select Modifier (if any)</option>
          {modifierOptions.map((mod) => (
            <option key={mod} value={mod}>{mod}</option>
          ))}
        </select>

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
