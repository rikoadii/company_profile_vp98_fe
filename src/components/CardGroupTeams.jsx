import CardTeam from './CardTeam';
import { teamMembers } from '../data/teamData';

export default function CardGroupTeams() {
  // Split team members into groups
  const firstMember = teamMembers[0]; // Card pertama
  const middleMembers = teamMembers.slice(1, 4); // 3 card di tengah (index 1-3)
  const lastMembers = teamMembers.slice(4, 6); // 2 card terakhir (index 4-5)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8 max-w-6xl mx-auto">
        {/* Card pertama - paling atas */}
        <div className="flex justify-center">
          <CardTeam key={firstMember.id} member={firstMember} />
        </div>

        {/* 3 card di tengah */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {middleMembers.map((member) => (
            <CardTeam key={member.id} member={member} />
          ))}
        </div>

        {/* 2 card terakhir */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto">
          {lastMembers.map((member) => (
            <CardTeam key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}