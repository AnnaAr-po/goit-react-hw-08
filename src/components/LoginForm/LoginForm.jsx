import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";


const LoginForm = () => {
    const dispatch = useDispatch();
    
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6, "enter more than 6 values").required("Required"),
    });

      const handleSubmit = (values, { resetForm }) => {
    dispatch(loginThunk(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <label className={css.labelReg}>
            Email:
            <Field type="email" name="email" className={css.input}
              placeholder="Введіть email"/>
            <ErrorMessage
              name="email"
              component="div"
              className={css.error}
            />
          </label>
          <label className={css.labelReg}>
            Password:
            <Field type="password" name="password" className={css.input}
              placeholder="Введіть password"/>
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </label>
          <button type="submit" className={css.button}>Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
