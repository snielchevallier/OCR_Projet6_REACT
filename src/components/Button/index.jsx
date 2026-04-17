export default function Button({ children}) {
 
  return (
    <button className="bg-button text-button-text w-full h-[51px] hover:bg-button-hover cursor-pointer text-button-text py-2 px-4 rounded-xl duration-300" type="button">
      {children}
    </button>
  );
}