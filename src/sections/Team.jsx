import TeamCarousel from "../components/TeamCarousel";
import HeaderSection from "../components/HeaderSection";

export default function Team() {
  return (
    <div className="w-full mt-16 px-4 md:px-8 lg:px-18 team" id="team">
        <HeaderSection title="Our Team" subtitle={"Victory Production"} />
        <TeamCarousel />
    </div>
  );
}