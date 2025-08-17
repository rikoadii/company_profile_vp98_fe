export default function CardTeam({ member }) {
  // Fallback jika member tidak ada
  if (!member) {
    return (
      <div className="card bg-white w-full max-w-[240px] sm:max-w-[260px] mx-auto border-4 sm:border-6 border-white rounded-3xl sm:rounded-4xl shadow-md sm:shadow-lg">
        <div className="card-body items-center text-center p-4 sm:p-6">
          <p className="text-gray-500 text-sm sm:text-base">No member data</p>
        </div>
      </div>
    );
  }

  return (
      <div className="card bg-white w-full max-w-[240px] sm:max-w-[260px] mx-auto border-4 sm:border-6 border-white rounded-3xl sm:rounded-4xl shadow-md sm:shadow-lg md:shadow-[0px_4px_75px_-16px_rgba(0,0,0,0.102)]">
  <figure className="px-2 sm:px-3 pt-2 sm:pt-3 h-32 sm:h-40 md:h-48">
    <img
      src={member.image}
      alt={member.name}
      className="rounded-2xl sm:rounded-3xl w-full h-full object-cover object-top" 
      onError={(e) => {
            console.error('Image failed to load:', member.image);
            e.target.style.display = 'none';
          }}/>
  </figure>
  <div className="card-body items-center text-center px-2 sm:px-3 py-3 sm:py-4">
    <h2 className="card-title text-sm sm:text-base md:text-[18px] leading-[16px] sm:leading-[18px] md:leading-[24px] text-black font-semibold">{member.name}</h2>
    <p className="text-xs sm:text-sm md:text-[14px] leading-[14px] sm:leading-[16px] md:leading-[20px] text-[#6A6A6A] mt-1">{member.jabatan}</p>
  </div>
</div>
  );
}