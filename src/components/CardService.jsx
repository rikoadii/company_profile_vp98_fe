export default function CardService({ title, secondTitle, content }){
    return (
    <div className="card flex-1 rounded-3xl bg-gradient-to-b from-[#990000] to-[#FF0000] p-4">
  <div className="card-body">
    <h1 className="font-bold text-3xl text-[#E6E6E6]">{title}</h1>
    <h3 className="text-[#E6E6E6] font-semibold text-base">{secondTitle}</h3>
    <p className="text-[#E6E6E6]">{content}</p>
  </div>
</div>
    )
}