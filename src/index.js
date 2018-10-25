import React from "react";
import ReactDOM from "react-dom";
import { withFormik } from "formik";

const App = () => <div>Formik email login</div>;

const FormikApp = withFormik({})(App);

ReactDOM.render(<FormikApp />, document.getElementById("root"));
