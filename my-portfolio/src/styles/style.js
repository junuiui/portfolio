export const hoverStyle = ({ isActive }) =>
    `transition-colors duration-200 ${isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-500"
    }`;
