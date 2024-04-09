import React, { useState } from 'react';
import './compostyle/woolform.css';
import axios from 'axios';

export default function Woolform() {
  const [formData, setFormData] = useState({
    wools: '',
    cost: '',
    available: '',
    length: '',
    Vm: '',
    Country: '',
    Address: '',
    Email: '',
    Ph: '',
    farm: '',
    description: '', // Add description field to formData
  });

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        setImage(file);
        setImageName(file.name);
      } else {
        setValidationErrors({
          image: 'Only JPEG or JPG image formats are allowed.',
        });
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = ['wools', 'cost', 'available', 'length', 'Vm', 'Country', 'Address', 'Email', 'Ph', 'farm', 'description'];
    requiredFields.forEach(field => {
      const value = formData[field].trim();
      if (!value) {
        errors[field] = 'This field is required.';
      }
    });

    const phoneRegex = /^[0-9]{10}$/;
    const phoneValue = formData['Ph'].trim();
    if (!phoneRegex.test(phoneValue)) {
      errors['Ph'] = 'Invalid phone number. It should be 10 digits.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = formData['Email'].trim();
    if (!emailRegex.test(emailValue)) {
      errors['Email'] = 'Invalid email address.';
    }

    if (isNaN(formData['cost']) || formData['cost'] <= 0) {
      errors['cost'] = 'Cost must be a positive number.';
    }

    if (isNaN(formData['length']) || formData['length'] <= 0) {
      errors['length'] = 'Length must be a positive number.';
    }

    if (isNaN(formData['Vm']) || formData['Vm'] < 0 || formData['Vm'] > 6) {
      errors['Vm'] = 'VM must be a number between 0 and 6.';
    }
    if (isNaN(formData['available']) || formData['available'] < 10 ) {
      errors['available'] = 'Wool must be above 10 Tons';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getErrorForField = (field) => {
    return validationErrors[field] || '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const fm = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        fm.append(key, value);
      });
      fm.append("image", image);
      fm.append("userId", localStorage.getItem('userId'));

      axios.post('http://localhost:5000/formupload', fm)
        .then(res => { console.log(res) })
        .catch(err => { console.log(err) });
      handleClear();
    }
  };

  const handleClear = () => {
    setFormData({
      wools: '',
      cost: '',
      available: '',
      length: '',
      Vm: '',
      Country: '',
      Address: '',
      Email: '',
      Ph: '',
      farm: '',
      description: '', // Clear description field too
    });
    setValidationErrors({});
    setImage(null);
    setImageName('');
  };

  const formFields = [
    { id: 'wools', label: 'Wool Type:', type: 'select', options: ['Select Wool  ', 'Alpaca', 'Lambswool', 'Cashmere', 'Merino', 'Bluefaced', 'Shetland', 'Mohair', 'Romney'] },
    { id: 'cost', label: 'Cost per Ton:', type: 'text', placeholder: 'in Rs' },
    { id: 'available', label: 'Total Weight:', type: 'text', placeholder: 'in Tons' },
    { id: 'length', label: 'Length:', type: 'text', placeholder: 'in mm' },
    { id: 'Vm', label: 'VM:', type: 'text', placeholder: 'in %' },
    { id: 'Country', label: 'Country:', type: 'text' },
    { id: 'Address', label: 'Address:', type: 'text' },
    { id: 'Email', label: 'Email:', type: 'email' },
    { id: 'Ph', label: 'Phone:', type: 'Phone' },
    { id: 'farm', label: 'Farm Name:', type: 'text' },
    { id: 'description', label: 'Description:', type: 'textarea' }, // Add description field to formFields
  ];

  return (
    <div className="login-box">
      {formFields.map((field, index) => (
        <div key={index} className="form-group">
          {field.type === 'select' ? (
            <>
              <label htmlFor={field.id}>{field.label}</label>
              <select name={field.id} className="form-control" onChange={handleInputChange} value={formData[field.id]}>
                {field.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </>
          ) : field.type === 'textarea' ? (
            <>
              <label htmlFor={field.id}>{field.label}</label>
              <textarea
                id={field.id}
                name={field.id}
                className="form-control"
                onChange={handleInputChange}
                value={formData[field.id]}
              />
            </>
          ) : (
            <>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="form-control"
                placeholder={field.placeholder}
                onChange={handleInputChange}
                value={formData[field.id]}
              />
            </>
          )}
          <label className="error-message">{getErrorForField(field.id)}</label>
        </div>
      ))}

      <div className="form-group">
        <label htmlFor="woolimg">Wool images:</label>
        <div className="file-input-wrapper">
          <input
            type="file"
            id="woolimage"
            name="woolimage"
            className="form-control"
            accept="image/jpeg, image/jpg"
            onChange={handleImageChange}
          />
          <div className="file-input-text">Browse</div>
        </div>
        <label className="error-message">{validationErrors.image}</label>
      </div>
      {imageName && image && (
        <div>
          <p>Selected Image: {imageName}</p>
          <div className="image-previ">
            <img src={URL.createObjectURL(image)} alt="Selected Image" />
          </div>
        </div>
      )}

      <div className="button-group">
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
