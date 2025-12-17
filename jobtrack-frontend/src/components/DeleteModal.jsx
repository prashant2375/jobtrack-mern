export default function DeleteModal({ onClose, onConfirm }) {

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

      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Delete Job
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Are you sure you want to delete this job application?
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500 text-white rounded-lg transition"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
        >
          Delete
        </button>
      </div>

    </div>
  </div>
);

}