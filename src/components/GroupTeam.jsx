import useTeams from '../hooks/useTeams';
import CardTeam from './CardTeam';
import ErrorMessage from './ErrorMessage';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';

export default function GroupTeam() {
  const { teams, loading, error } = useTeams();

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Loading teams...</div>;
  }

  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={() => window.location.reload()} 
      />
    );
  }

  if (!teams || teams.length === 0) {
    return (
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="text-center">
          <p className="text-gray-500">No team members available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-5">
      {/* Desktop Layout - Grid seperti sebelumnya */}
      <div className="hidden lg:block">
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Card pertama - paling atas */}
          <ScrollAnimationWrapper animationType="scroll-scale">
            <div className="flex justify-center max-w-[200px] mx-auto">
              <CardTeam key={teams[0]?.id} member={teams[0]} />
            </div>
          </ScrollAnimationWrapper>

          {/* 3 card di tengah */}
          {teams.length > 1 && (
            <ScrollAnimationWrapper animationType="scroll-fade-in" delay={0.2}>
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-8 max-w-4xl">
                  {teams.slice(1, 4).map((member, index) => (
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
          )}

          {/* 2 card terakhir */}
          {teams.length > 4 && (
            <ScrollAnimationWrapper animationType="scroll-fade-in" delay={0.4}>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-8 max-w-xl">
                  {teams.slice(4, 6).map((member, index) => (
                    <ScrollAnimationWrapper 
                      key={member.id}
                      animationType="scroll-slide-right" 
                      delay={0.5 + (index * 0.1)}
                    >
                      <div className="max-w-[200px]">
                        <CardTeam member={member} />
                      </div>
                    </ScrollAnimationWrapper>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          )}
        </div>
      </div>

      {/* Mobile & Tablet Layout - Grid 2 Kolom */}
      <ScrollAnimationWrapper animationType="scroll-fade-in">
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {teams.map((member, index) => (
              <ScrollAnimationWrapper 
                key={member.id}
                animationType="scroll-scale" 
                delay={index * 0.1}
              >
                <CardTeam member={member} />
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
