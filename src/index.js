import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const App = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <div>
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues: ({ email, password, newsletter, plan }) => ({
    email: email || "",
    password: password || "",
    newsletter: newsletter || false,
    plan: plan || "free"
  }),
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup
      .string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required")
  }),
  handleSubmit: (values, { resetForm, setErrors, setSubmitting }) => {
    // set timeout to mock API call
    setTimeout(() => {
      if (values.email === "evan.chanyiksan@gmail.com") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(App);

ReactDOM.render(<FormikApp />, document.getElementById("root"));
