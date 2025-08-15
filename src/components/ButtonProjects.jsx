export default function ButtonProjects({ text }) {
  return (
    <button className="btn border-[#FF0000] btn-outline rounded-2xl sm:rounded-3xl lg:rounded-4xl border-2 text-xs sm:text-sm md:text-base font-semibold text-neutral px-3 sm:px-6 md:px-9 py-2 sm:py-3 hover:!bg-[#FF0000] active:!bg-[#FF0000] hover:!shadow-none hover:!text-white focus:!bg-[#FF0000] focus:!text-white transition-all duration-200 whitespace-nowrap flex-shrink-0">
      {text}
    </button>
  );
}