import ProjectImageLarge from "./ProjectImageLarge"
import ProjectImageSmall from "./ProjectImageSmall"

export default function GroupProjects({ projects = [] }) {
  // Jika tidak ada projects atau kurang dari 5, return empty atau fallback
  if (!projects || projects.length < 5) {
    return (
      <div className="my-16">
        <div className="max-w-7xl mx-auto px-4 pb-12">
          <p className="text-center text-gray-500">No projects available</p>
        </div>
      </div>
    )
  }

  // Split projects into sections of 5
  const section1 = projects.slice(0, 5); // Projects 1-5
  const section2 = projects.slice(5, 10); // Projects 6-10

return (
    <div className="my-16">
        <div className="max-w-7xl mx-auto px-4 pb-12 space-y-12">
            {/* Section 1: Large left, 4 small right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[422px]">
                {/* Large image on left - 50% */}
                <ProjectImageLarge project={section1[0]} />

                {/* 4 small images on right - 50% (2x2 grid) */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                    {section1.slice(1).map((project) => (
                        <ProjectImageSmall key={project.id} project={project} />
                    ))}
                </div>
            </div>

            {/* section 2 */}
            {section2.length >= 5 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[422px]">
                  {/* 4 small images on left - 50% (2x2 grid) */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
                      {section2.slice(1).map((project) => (
                          <ProjectImageSmall key={project.id} project={project} />
                      ))}
                  </div>

                  {/* Large image on right - 50% */}
                  <ProjectImageLarge project={section2[0]} />
              </div>
            )}

            
        </div>
    </div>
)
}
