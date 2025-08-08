export default function CardTeam({ member }) {
  // Fallback jika member tidak ada
  if (!member) {
    return (
      <div className="card bg-white w-66 border-6 border-white shadow-[0px_4px_75px_-16px_rgba(0,0,0,0.102)] rounded-4xl">
        <div className="card-body items-center text-center">
          <p className="text-gray-500">No member data</p>
        </div>
      </div>
    );
  }

  return (
      <div className="card bg-white w-66 border-6 border-white shadow-[0px_4px_75px_-16px_rgba(0,0,0,0.102)] rounded-4xl">
  <figure className="px-3 pt-3 h-60">
    <img
      src={member.image}
      alt={member.name}
      className="rounded-3xl w-full h-full object-cover object-top" 
      onError={(e) => {
            console.error('Image failed to load:', member.image);
            e.target.style.display = 'none';
          }}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-[20px] leading-[28px] text-black">{member.name}</h2>
    <p className="text-[16px] leading-[24px] text-[#6A6A6A]">{member.jabatan}</p>
  </div>
</div>
  );
}