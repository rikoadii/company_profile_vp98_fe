export default function CardService({ title, secondTitle, content }){
    return (
    <div className="card flex-1 min-w-full sm:min-w-[280px] md:min-w-[300px] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#990000] to-[#FF0000] p-3 sm:p-4 md:p-6">
  <div className="card-body p-0">
    <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-[#E6E6E6] mb-2 sm:mb-3">{title}</h1>
    <h3 className="text-[#E6E6E6] font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">{secondTitle}</h3>
    <p className="text-[#E6E6E6] text-xs sm:text-sm md:text-base leading-relaxed">{content}</p>
  </div>
</div>
    )
}