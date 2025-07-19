import React, { useState } from 'react';

export default function BillingForm() {
  const [form, setForm] = useState({
    eapCompany: '',
    sessionDate: '',
    sessionTime: '',
    serviceType: '',
    notes: '',
    documentName: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, documentName: files[0]?.name || '' }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Claim submitted!\n
      EAP Company: ${form.eapCompany}
      Session Date: ${form.sessionDate}
      Session Time: ${form.sessionTime}
      Service Type: ${form.serviceType}
      Notes: ${form.notes}
      Attached Document: ${form.documentName || 'None'}
    `);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem', border: '1px solid #ddd', borderRadius: 6, backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>Submit EAP Billing Claim</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: 8 }}>
          EAP Company
          <input
            type="text"
            name="eapCompany"
            value={form.eapCompany}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
            placeholder="Enter EAP Company Name"
          />
        </label>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <label style={{ flex: 1 }}>
            Session Date
            <input
              type="date"
              name="sessionDate"
              value={form.sessionDate}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>
          <label style={{ flex: 1 }}>
            Session Time
            <input
              type="time"
              name="sessionTime"
              value={form.sessionTime}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8, marginTop: 4 }}
            />
          </label>
        </div>

        <label style={{ display: 'block', marginBottom: 8 }}>
          Service Type
          <input
            type="text"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            required
            placeholder="e.g., Individual Counseling"
            style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 8 }}>
          Session Notes (optional)
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Add session notes if applicable..."
            rows={4}
            style={{ width: '100%', padding: 8, marginTop: 4, boxSizing: 'border-box' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: 16 }}>
          Attach Documentation
          <input
            type="file"
            name="document"
            onChange={handleChange}
            style={{ display: 'block', marginTop: 4 }}
          />
          {form.documentName && <small>Selected file: {form.documentName}</small>}
        </label>

        <button type="submit" style={{ width: '100%', padding: 12, backgroundColor: '#2563eb', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: 4, cursor: 'pointer' }}>
          Submit Claim
        </button>
      </form>
    </div>
  );
}
