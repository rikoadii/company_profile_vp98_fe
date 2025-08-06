export default function HeaderSection({ title, subtitle }){
    return (
        <div className="items-center text-center mb-8">
        <h1 className="text-4xl font-bold text-neutral mb-1">{title}</h1>
        <h3 className="text-lg font-semibold text-neutral">{subtitle}</h3>
        </div>
    )
}