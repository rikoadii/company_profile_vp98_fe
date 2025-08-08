import CardGroupTeams from "../components/CardGroupTeams";
import CardTeam from "../components/CardTeam";
import HeaderSection from "../components/HeaderSection";

export default function Team() {
  return (
    <div className="w-full mt-16 px-18 bg-white team">
        <HeaderSection title="Our Team" subtitle={"Victory Production"} />
        <CardGroupTeams />
    </div>
  );
}