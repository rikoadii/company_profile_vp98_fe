import CardGroupService from "../components/CardGroupService"
import HeaderSection from "../components/HeaderSection"
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper"

export default function Services(){
    return (
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-18 mt-8 sm:mt-12 md:mt-16" id="services">
            <ScrollAnimationWrapper animation="scroll-slide-left">
                <HeaderSection 
                    title="Our Service" 
                    subtitle="What We Do Best"
                />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper animation="scroll-scale" delay={300}>
                <CardGroupService />
            </ScrollAnimationWrapper>
        </div>
    )
}