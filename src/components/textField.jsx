import React from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return "form-control " + (error ? "is-invalid" : "");
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={getInputClasses()}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextField.defaultValues = {
  type: "text",
};

export default TextField;
