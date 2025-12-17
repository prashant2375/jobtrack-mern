import { useState } from "react";
import Navbar from "../components/Navbar";
import AddJobModal from "../components/AddJobModal";
import EditJobModal from "../components/EditJobModal";
import DeleteModal from "../components/DeleteModal";
import Toast from "../components/Toast";




export default function Dashboard() {
  const [jobs, setJobs] = useState([
    { id: 1, company: "Google", role: "Software Engineer", status: "Applied", date: "2025-01-12" },
    { id: 2, company: "Amazon", role: "Frontend Developer", status: "Interview", date: "2025-01-18" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editJob, setEditJob] = useState(null);
  const [deleteJob, setDeleteJob] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };




  const handleAddJob = (data) => {
    setJobs((prev) => [
      ...prev,
      { id: Date.now(), ...data }
    ]);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter ? job.status === statusFilter : true;

    return matchesSearch && matchesStatus;
  });


  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-900 dark:text-gray-100">

        <Navbar />

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Your Job Applications</h2>

            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setShowModal(true)}
            >
              + Add Job
            </button>
          </div>

          {/* FILTER BAR */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by company or role..."

              className="w-full px-3 py-2
border border-gray-300 dark:border-gray-700
bg-white dark:bg-gray-800
text-gray-800 dark:text-gray-100
placeholder-gray-400 dark:placeholder-gray-400
rounded-lg focus:outline-none focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Status Filter */}
            <select
              className="px-3 py-2
border border-gray-300 dark:border-gray-700
bg-white dark:bg-gray-800
text-gray-800 dark:text-gray-100
rounded-lg"

              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>


          {/* TABLE */}
          
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-x-auto border border-gray-200 dark:border-gray-700">


            <table className="w-full text-left text-gray-700 dark:text-gray-200">

              <thead className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">

                <tr>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredJobs.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-10 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl">📭</span>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">No jobs found</p>
                        <p className="text-gray-400 dark:text-gray-500 text-sm">
                          Try adjusting filters or add a new job application.
                        </p>

                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredJobs.map((job) => (
                    <tr key={job.id} className="
    border-b border-gray-200 dark:border-gray-700
    hover:bg-gray-50 dark:hover:bg-gray-800
    transition
  ">
                      <td className="px-4 py-3 font-medium">{job.company}</td>
                      <td className="px-4 py-3">{job.role}</td>
                      <td className="px-4 py-3">

                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                              ${job.status === "Applied"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300"
                              : job.status === "Interview"
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300"
                                : job.status === "Rejected"
                                  ? "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300"
                                  : "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
                            }`}
                        >
                          {job.status}
                        </span>



                      </td>
                      <td className="px-4 py-3">{job.date}</td>

                      <td className="px-4 py-3 flex justify-center gap-3">
                        <button
                          className="
    px-3 py-1.5 text-sm rounded-md
    bg-yellow-500 text-white
    hover:bg-yellow-600
    transition
  "
                          onClick={() => setEditJob(job)}
                        >
                          Edit
                        </button>

                        <button
                          className="
    px-3 py-1.5 text-sm rounded-md
    bg-red-500 text-white
    hover:bg-red-600
    transition
  "
                          onClick={() => setDeleteJob(job)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>


            </table>
          </div>

          {showModal && (
            <AddJobModal
              onClose={() => setShowModal(false)}
              onAdd={(data) => {
                handleAddJob(data);
                showToast("Job added successfully!", "success");
              }}
            />
          )}

          {editJob && (
            <EditJobModal
              job={editJob}
              onClose={() => setEditJob(null)}
              onUpdate={(updated) => {
                setJobs((prev) =>
                  prev.map((j) =>
                    j.id === editJob.id ? { ...j, ...updated } : j
                  )
                );
                showToast("Job updated!", "info");
              }}
            />
          )}

          {deleteJob && (
            <DeleteModal
              onClose={() => setDeleteJob(null)}
              onConfirm={() => {
                setJobs((prev) => prev.filter((j) => j.id !== deleteJob.id));
                setDeleteJob(null);
                showToast("Job deleted!", "error");
              }}
            />
          )}

        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}






