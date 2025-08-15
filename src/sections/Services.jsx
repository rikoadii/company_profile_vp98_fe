import CardGroupService from "../components/CardGroupService"
import HeaderSection from "../components/HeaderSection"
export default function Services(){
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 mt-8 sm:mt-12 md:mt-16">
            <HeaderSection 
  title="Our Service" 
  subtitle="What We Do Best"
/>
            <CardGroupService />
        </div>
    )
}