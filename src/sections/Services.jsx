import CardGroupService from "../components/CardGroupService"
import HeaderSection from "../components/HeaderSection"
export default function Services(){
    return (
        <div className="w-full">
            <HeaderSection 
  title="Our Service" 
  subtitle="What We Do Best"
/>
            <CardGroupService />
        </div>
    )
}