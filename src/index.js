import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";

const App = ({ values, handleChange, handleSubmit }) => (
  <Form>
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />
    <button type="submit">Submit</button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues: ({ email, password }) => ({
    email: email || "",
    password: password || ""
  }),
  handleSubmit: values => {
    console.log(values);
  }
})(App);

ReactDOM.render(<FormikApp />, document.getElementById("root"));
