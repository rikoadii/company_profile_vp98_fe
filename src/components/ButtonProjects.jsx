export default function ButtonProjects({ text }) {
  return (
    <button className="btn border-[#FF0000] btn-outline rounded-4xl border-2 text-base font-semibold text-neutral  px-9 hover:!bg-[#FF0000] active:!bg-[#FF0000] hover:!shadow-none hover:!text-white focus:!bg-[#FF0000] focus:!text-white mx-2">{text}</button>
  );
}