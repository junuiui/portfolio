// Button.jsx
export default function Button({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
    >
      {name}
    </button>
  );
}
