import React, { FormEvent, useRef } from "react";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* All below was made possible with the following shortcut:
          "div.mb-3>label.form-label+input.form-control"  
      */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      {/* shortcut: button.btn.btn-primary */}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
