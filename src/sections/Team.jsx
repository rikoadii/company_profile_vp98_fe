import GroupTeam from "../components/GroupTeam";
import HeaderSection from "../components/HeaderSection";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

export default function Team() {
  return (
    <div className="w-full mt-16 px-4 md:px-8 lg:px-18 team" id="team">
        <ScrollAnimationWrapper animation="scroll-slide-right">
            <HeaderSection title="Our Team" subtitle={"Victory Production"} />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="scroll-fade-in" delay={300}>
            <GroupTeam />
        </ScrollAnimationWrapper>
    </div>
  );
}