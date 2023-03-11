import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', place: '' });
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', place: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter The Name</span>
          <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        </label>
        <label>
          <span>Enter The Place</span>
          <input type="text" value={formData.place} onChange={(e) => setFormData({ ...formData, place: e.target.value })} />
        </label>
        <input type="submit" />
      </form>
      <div>
        <h1>Submitted Data:</h1>
        {submittedData.length > 0 ? (
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                Name: {data.name}, Place: {data.place}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data submitted yet</p>
        )}
      </div>
    </div>
  );
};

export default Form;
