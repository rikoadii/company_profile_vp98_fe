export default function ButtonProjects({ text, isActive = false, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`btn border-[#FF0000] rounded-2xl sm:rounded-3xl lg:rounded-4xl border-2 text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-6 md:px-9 py-2 sm:py-3 transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
        isActive 
          ? 'bg-[#FF0000] text-white border-[#FF0000] hover:!bg-red-600 hover:!border-red-600' 
          : 'btn-outline text-neutral hover:!bg-[#FF0000] hover:!text-white hover:!shadow-none focus:!bg-[#FF0000] focus:!text-white active:!bg-[#FF0000]'
      }`}
    >
      {text}
    </button>
  );
}