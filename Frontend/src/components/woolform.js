import React, { useState } from 'react';
import './compostyle/woolform.css';

export default function Woolform() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  const handleImageChange = (e) => {
    const files = e.target.files;
    const uniqueFiles = [];
    const errors = {};

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        if (!selectedImages.some(img => img.name === file.name)) {
          uniqueFiles.push(file);
        } else {
          errors['image'] = 'Duplicate images are not allowed.';
        }
      } else {
        errors['image'] = 'Only JPEG or JPG image formats are allowed.';
      }
    }

    setSelectedImages([...selectedImages, ...uniqueFiles]);
    setValidationErrors(errors);
  };

  const validateForm = () => {
    const errors = {};

    // Validate required fields
    const requiredFields = ['cost', 'length', 'Vm', 'Microns', 'Country', 'Address', 'Postalcode', 'Email', 'Ph', 'farm', 'des'];
    requiredFields.forEach(field => {
      const value = document.getElementById(field).value.trim();
      if (!value) {
        errors[field] = 'This field is required.';
      }
    });

    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    const phoneValue = document.getElementById('Ph').value.trim();
    if (!phoneRegex.test(phoneValue)) {
      errors['Ph'] = 'Invalid phone number. It should be 10 digits.';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = document.getElementById('Email').value.trim();
    if (!emailRegex.test(emailValue)) {
      errors['Email'] = 'Invalid email address.';
    }

    setValidationErrors(errors);

    // Return true if no validation errors, false otherwise
    return Object.keys(errors).length === 0;
  };

  const getErrorForField = (field) => {
    return validationErrors[field] || '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Handle form submission logic here
      // ...
    }
  };

  const handleClear = () => {
    // Clear all input values
    const inputFields = document.querySelectorAll('.form-control');
    inputFields.forEach((field) => {
      field.value = '';
    });

    // Clear selected images and validation errors
    setSelectedImages([]);
    setValidationErrors({});
  };

  const formFields = [
    { id: 'wools', label: 'Wool Type:', type: 'select', options: ['Merino', 'Lambswool', 'Cashmere', 'Alpaca', 'Bluefaced', 'Shetland', 'Mohair', 'Romney'] },
    { id: 'cost', label: 'Cost per Ton:', type: 'text' },
    { id: 'length', label: 'Length:', type: 'text' },
    { id: 'Vm', label: 'VM:', type: 'text' },
    { id: 'Microns', label: 'Microns:', type: 'text' },
    { id: 'Country', label: 'Country:', type: 'text' },
    { id: 'Address', label: 'Address:', type: 'text' },
    { id: 'Postalcode', label: 'PostalCode:', type: 'text' },
    { id: 'Email', label: 'Email:', type: 'email' },
    { id: 'Ph', label: 'Phone:', type: 'Phone' },
    { id: 'farm', label: 'Farm Name:', type: 'text' },
    { id: 'des', label: 'Description:', type: 'text' },
  ];

  return (
    <div className="login-box">
      {formFields.map((field, index) => (
        <div key={index} className="form-group">
          {field.type === 'select' ? (
            <>
              <label htmlFor={field.id}>{field.label}</label>
              <select name={field.id} className="form-control">
                {field.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="form-control"
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
            id="woolimg"
            name="woolimage"
            className="form-control"
            accept="image/jpeg, image/jpg"
            multiple
            onChange={handleImageChange}
          />
          <div className="file-input-text">Browse</div>
        </div>
        <label className="error-message">{getErrorForField('image')}</label>
      </div>

      {selectedImages.length > 0 && (
        <div>
          <p>Selected Images:</p>
          <div className="image-previ">
            {selectedImages.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
            ))}
          </div>
        </div>
      )}

      <div className="button-group">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
