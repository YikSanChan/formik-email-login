import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";

const App = ({ values }) => (
  <Form>
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />
    <label>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Field component="select" name="plan">
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button type="submit">Submit</button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues: ({ email, password, newsletter, plan }) => ({
    email: email || "",
    password: password || "",
    newsletter: newsletter || false,
    plan: plan || "free"
  }),
  handleSubmit: values => {
    console.log(values);
  }
})(App);

ReactDOM.render(<FormikApp />, document.getElementById("root"));
