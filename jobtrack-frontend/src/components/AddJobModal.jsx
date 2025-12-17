import { useState } from "react";
import { jobSchema } from "../validation/jobSchema";

export default function AddJobModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((s) => ({ ...s, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const result = jobSchema.safeParse(form);

    if (!result.success) {
      const mapped = {};
      const issueList = result.error.errors ?? result.error.issues ?? [];

      issueList.forEach((err) => {
        const key = err.path?.[0] ?? "_form";
        mapped[key] = err.message;
      });

      setErrors(mapped);
      return;
    }

    // VALID → return data to Dashboard
    onAdd(form);
    onClose();
  };

  const showError = (field) => submitted && errors[field];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
    >
      <div
        className="
    bg-white dark:bg-gray-800
    w-full max-w-md rounded-lg p-6 shadow-lg
    transform transition-all duration-200
    scale-100 opacity-100
  "
      >


        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Add Job</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Company */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Company</label>
            <input
              type="text"
              value={form.company}
              onChange={handleChange("company")}
              className="w-full px-3 py-2 
border border-gray-300 dark:border-gray-700 
bg-white dark:bg-gray-800 
text-gray-800 dark:text-gray-100 
placeholder-gray-400 dark:placeholder-gray-400
rounded-lg 
focus:outline-none focus:border-blue-500"
              placeholder="Enter company name"
            />
            {showError("company") && (
              <p className="text-red-600 dark:text-red-400 text-sm">{errors.company}</p>
            )}
          </div>

          {/* Role */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Role</label>
            <input
              type="text"
              value={form.role}
              onChange={handleChange("role")}
              className="w-full px-3 py-2 
border border-gray-300 dark:border-gray-700 
bg-white dark:bg-gray-800 
text-gray-800 dark:text-gray-100 
placeholder-gray-400 dark:placeholder-gray-400
rounded-lg 
focus:outline-none focus:border-blue-500"
              placeholder="Enter job role"
            />
            {showError("role") && (
              <p className="text-red-600 dark:text-red-400 text-sm">{errors.role}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Status</label>
            <select
              value={form.status}
              onChange={handleChange("status")}
              className="w-full px-3 py-2 
  border border-gray-300 dark:border-gray-700 
  bg-white dark:bg-gray-800 
  text-gray-800 dark:text-gray-100 
  rounded-lg"
            >
              <option>Applied</option>
              <option>Interview</option>
              <option>Selected</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={handleChange("date")}
              className="w-full px-3 py-2 
border border-gray-300 dark:border-gray-700 
bg-white dark:bg-gray-800 
text-gray-800 dark:text-gray-100 
placeholder-gray-400 dark:placeholder-gray-400
rounded-lg 
focus:outline-none focus:border-blue-500"
            />
            {showError("date") && (
              <p className="text-red-600 text-sm">{errors.date}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="
      px-4 py-2 rounded-lg
      bg-gray-200 text-gray-700
      hover:bg-gray-300
      dark:bg-gray-700 dark:text-gray-200
      dark:hover:bg-gray-600
      transition
    "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
      px-4 py-2 rounded-lg
      bg-blue-600 text-white
      hover:bg-blue-700
      dark:bg-blue-500 dark:hover:bg-blue-600
      transition
    "
            >
              Add Job
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
