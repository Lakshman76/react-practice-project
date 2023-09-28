import { useFormik } from "formik";
const Registration = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  return (
    <div className="flex flex-col justify-center items-center gap-4 m-4 p-2">
      <h1 className="font-bold text-xl">This is Registration form</h1>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="name">Enter Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border"
        />
        <label htmlFor="email">Enter Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border"
        />
        <button type="submit" className="bg-blue-600 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
