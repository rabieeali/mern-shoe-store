const Input = ({ formik, placeholder, name, label, type = "text" }) => {
  return (
    <div className="my-2">
      <label className="form-label fw-bold text-white" htmlFor={name}>
        {label}
      </label>
      <input
        className="form-control signup-input border-radius-half"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="on"
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span className="fs-10 text-capitalize text-red">
          {formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default Input;
