import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerSchema } from "../validation/authSchemas";
console.log("Schema:", registerSchema);


export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate whole form whenever form changes
  useEffect(() => {
    const result = registerSchema.safeParse(form);
    if (result.success) {
      setErrors({});
    } else {
      const mapped = {};
      const issueList = result.error.errors ?? result.error.issues ?? [];

      issueList.forEach((err) => {
        const key = err.path?.[0] ?? "_form";
        mapped[key] = err.message;
      });

      setErrors(mapped);

    }
  }, [form]);

  const handleChange = (field) => (e) => {
    setForm((s) => ({ ...s, [field]: e.target.value }));
  };

  const handleBlur = (field) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);           // show all errors after first submit
    const result = registerSchema.safeParse(form);
    if (!result.success) return;  // errors state already set by useEffect
    // validated -> proceed
    console.log("Register Validated:", form);
    // TODO: call backend
  };

  const showError = (field) => {
    // show error if field touched OR form was submitted
    return (touched[field] || submitted) && errors[field];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              value={form.name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
            />
            {showError("name") && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
            />
            {showError("email") && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
            />
            {showError("password") && (
              <p className="text-red-600 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 outline-none"
            />
            {showError("confirmPassword") && (
              <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
