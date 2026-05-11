export default function Button({ children, onClick, type, disabled }) {
 
  return (
    <button type={type} disabled={disabled} className="bg-button text-button-text w-full h-[51px] hover:bg-button-hover cursor-pointer text-button-text py-2 px-4 rounded-xl duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:hover:bg-gray-700" onClick={onClick}>
      {children}
    </button>
  );
}