import React from "react";
import ReactDOM from "react-dom";
import { withFormik } from "formik";

const App = ({ values, handleChange }) => (
  <div>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
    />
  </div>
);

const FormikApp = withFormik({
  mapPropsToValues: ({ email }) => ({
    email: email || ""
  })
})(App);

ReactDOM.render(<FormikApp />, document.getElementById("root"));
