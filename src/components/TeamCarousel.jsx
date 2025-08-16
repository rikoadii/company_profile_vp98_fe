import CardTeam from './CardTeam';
import { teamMembers } from '../data/teamData';

export default function TeamCarousel() {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
      {/* Desktop Layout - Grid seperti sebelumnya */}
      <div className="hidden lg:block">
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Card pertama - paling atas */}
          <div className="flex justify-center max-w-[240px] mx-auto">
            <CardTeam key={teamMembers[0].id} member={teamMembers[0]} />
          </div>

          {/* 3 card di tengah */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              {teamMembers.slice(1, 4).map((member) => (
                <CardTeam key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* 2 card terakhir */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-xl">
              {teamMembers.slice(4, 6).map((member) => (
                <div key={member.id} className="max-w-[240px]">
                  <CardTeam member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout - Grid 2 Kolom */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {teamMembers.map((member) => (
            <CardTeam key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
