import { teamMembers } from '../data/teamData';
import CardTeam from './CardTeam';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

export default function CardGroupTeams() {
  // Split team members into groups
  const firstMember = teamMembers[0]; // Card pertama
  const middleMembers = teamMembers.slice(1, 4); // 3 card di tengah (index 1-3)
  const lastMembers = teamMembers.slice(4, 6); // 2 card terakhir (index 4-5)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Card pertama - paling atas */}
        <ScrollAnimationWrapper animationType="scroll-scale">
          <div className="flex justify-center">
            <CardTeam key={firstMember.id} member={firstMember} />
          </div>
        </ScrollAnimationWrapper>

        {/* 3 card di tengah */}
        <ScrollAnimationWrapper animationType="scroll-fade-in" delay={0.2}>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
              {middleMembers.map((member, index) => (
                <ScrollAnimationWrapper 
                  key={member.id}
                  animationType="scroll-slide-left" 
                  delay={0.3 + (index * 0.1)}
                >
                  <CardTeam member={member} />
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        {/* 2 card terakhir */}
        <ScrollAnimationWrapper animationType="scroll-fade-in" delay={0.4}>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {lastMembers.map((member, index) => (
                <ScrollAnimationWrapper 
                  key={member.id}
                  animationType="scroll-slide-right" 
                  delay={0.5 + (index * 0.1)}
                >
                  <CardTeam member={member} />
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}