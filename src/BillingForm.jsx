import React, { useState } from "react";

export default function BillingForm() {
  const [formData, setFormData] = useState({
    providerName: "<select
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
",
    clientName: "",
    dateOfService: "",
    serviceProvided: "<select
  className="w-full p-2 border rounded"
  name="serviceProvided"
  value={formData.serviceProvided}
  onChange={handleChange}
  required
>
  <option value="">Select Service Provided</option>
  <option value="Individual Counseling">Individual Counseling</option>
  <option value="Couples Counseling">Couples Counseling</option>
  <option value="Family Counseling">Family Counseling</option>
  <option value="Substance Use Counseling">Substance Use Counseling</option>
  <option value="Critical Incident Stress Debriefing (CISD)">Critical Incident Stress Debriefing (CISD)</option>
  <option value="Workplace Mediation">Workplace Mediation</option>
  <option value="Supervisor Consultation">Supervisor Consultation</option>
  <option value="Wellness Workshop">Wellness Workshop</option>
  <option value="Manager Referral Session">Manager Referral Session</option>
  <option value="Assessment & Referral">Assessment & Referral</option>
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
    placeOfService: "<select
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
</select>",
    procedureCode: "<select
  className="w-full p-2 border rounded"
  name="procedureCode"
  value={formData.procedureCode}
  onChange={handleChange}
  required
>
  <option value="">Select Procedure Code</option>
  <option value="90791">90791 – Psychiatric Diagnostic Evaluation</option>
  <option value="90832">90832 – Psychotherapy, 30 minutes</option>
  <option value="90834">90834 – Psychotherapy, 45 minutes</option>
  <option value="90837">90837 – Psychotherapy, 60 minutes</option>
  <option value="90846">90846 – Family Psychotherapy (w/o patient)</option>
  <option value="90847">90847 – Family Psychotherapy (with patient)</option>
  <option value="90853">90853 – Group Psychotherapy</option>
  <option value="96130">96130 – Psychological Testing Evaluation</option>
  <option value="99406">99406 – Smoking Cessation (3–10 mins)</option>
  <option value="99407">99407 – Smoking Cessation (10+ mins)</option>
</select>
",
    modifiers: "<select
  className="w-full p-2 border rounded"
  name="modifiers"
  value={formData.modifiers}
  onChange={handleChange}
>
  <option value="">Select Modifier (if any)</option>
  <option value="GT">GT – Telehealth via interactive audio and video</option>
  <option value="95">95 – Synchronous Telemedicine Service</option>
  <option value="HJ">HJ – Employee Assistance Program (EAP) services</option>
  <option value="HE">HE – Mental Health Program</option>
  <option value="U1">U1 – State-defined modifier (often used by Medicaid/EAP)</option>
  <option value="U2">U2 – State-defined modifier (alt
",
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
