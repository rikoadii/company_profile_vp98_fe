export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-[#FF0000] border-t-transparent rounded-full animate-spin"></div>
      </div>
      <span className="ml-4 text-gray-600 font-medium">Loading projects...</span>
    </div>
  );
}
