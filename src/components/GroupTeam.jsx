import CardTeam from './CardTeam';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import useTeams from '../hooks/useTeams';

export default function GroupTeam() {
  const { teams, loading, error } = useTeams();

  if (loading) {
    return <LoadingSpinner />;
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
          <div className="flex justify-center max-w-[200px] mx-auto">
            
              <CardTeam key={teams[0]?.id} member={teams[0]} />
            
          </div>

          {/* 3 card di tengah */}
          {teams.length > 1 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-8 max-w-4xl">
                {teams.slice(1, 4).map((member) => (
                  <CardTeam key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* 2 card terakhir */}
          {teams.length > 4 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-8 max-w-xl">
                {teams.slice(4, 6).map((member) => (
                  <div key={member.id} className="max-w-[200px]">
                    <CardTeam member={member} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile & Tablet Layout - Grid 2 Kolom */}
      <div className="lg:hidden">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {teams.map((member) => (
            <CardTeam key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
