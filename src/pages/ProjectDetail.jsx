import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useChildProjects from '../hooks/useChildProjects';
import useProjects from '../hooks/useProjects';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import ImageLightbox from '../components/ImageLightbox';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Console log untuk debug
  console.log('ProjectDetail - Received ID from URL:', id);
  console.log('ProjectDetail - ID type:', typeof id);
  console.log('ProjectDetail - Parsed ID:', parseInt(id));
  
  const { projects, loading: projectsLoading, error: projectsError } = useProjects();
  const { childProjects, loading: childLoading, error: childError, totalRecords } = useChildProjects(id);
  
  // Lightbox state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Find the current project - try both string and number comparison
  const currentProject = projects.find(project => 
    project.id === parseInt(id) || project.id === id || project.id.toString() === id
  );
  
  // Console log untuk debug project finding
  console.log('ProjectDetail - All projects:', projects);
  console.log('ProjectDetail - Projects length:', projects.length);
  console.log('ProjectDetail - First few projects:', projects.slice(0, 3));
  console.log('ProjectDetail - Project IDs:', projects.map(p => ({ id: p.id, title: p.title, type: typeof p.id })));
  console.log('ProjectDetail - Looking for ID:', parseInt(id), 'Type:', typeof parseInt(id));
  console.log('ProjectDetail - Also trying string ID:', id, 'Type:', typeof id);
  console.log('ProjectDetail - Current project found:', currentProject);
  
  // Console log untuk debug child projects
  console.log('ProjectDetail - Child projects data:', childProjects);
  console.log('ProjectDetail - Child loading state:', childLoading);
  console.log('ProjectDetail - Child error state:', childError);
  console.log('ProjectDetail - Total records:', totalRecords);

  if (projectsLoading) {
    console.log('ProjectDetail - Projects still loading...');
    return <LoadingSpinner />;
  }

  if (projectsError) {
    console.log('ProjectDetail - Projects error:', projectsError);
    return <ErrorMessage message={projectsError} />;
  }

  if (!currentProject) {
    console.log('ProjectDetail - No current project found, available project IDs:', projects.map(p => p.id));
    console.log('ProjectDetail - Searched for ID:', id, 'parsed:', parseInt(id));
    return <ErrorMessage message="Project not found" />;
  }

  // Handle opening lightbox
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="project-detail">
      {/* Custom Header */}
      <header className="project-detail-header bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo_vp98.webp" 
                alt="Victory Production 98" 
                className="h-7 sm:h-8 md:h-10 w-auto cursor-pointer"
                onClick={() => window.location.href = '/'}
              />
            </div>
            
            {/* Navigation - Mobile Optimized */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Breadcrumb - Hidden on mobile */}
              <nav className="hidden lg:flex items-center space-x-2 text-sm text-gray-500">
                <button 
                  onClick={() => window.location.href = '/'}
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  Home
                </button>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <button 
                  onClick={() => window.history.back()}
                  className="hover:text-red-600 transition-colors duration-200"
                >
                  Projects
                </button>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 font-medium truncate max-w-xs">
                  {currentProject ? currentProject.title : 'Project Detail'}
                </span>
              </nav>
              
              {/* Back Button - Mobile Optimized */}
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-2 py-2 sm:px-3 text-gray-600 hover:text-red-600 font-medium transition-colors duration-200 border border-gray-300 rounded-lg hover:border-red-300"
              >
                <svg className="w-4 h-4 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back</span>
              </button>
              
              {/* Home Button - Mobile Optimized */}
              <button 
                onClick={() => window.location.href = '/'}
                className="inline-flex items-center px-2 py-2 sm:px-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="hidden sm:inline">Home</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Project Header */}
      <div className="project-header">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Project Image */}
            <div className="project-main-image order-1 lg:order-1">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Project Info */}
            <div className="project-info order-2 lg:order-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                {currentProject.title}
              </h1>
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {currentProject.category}
                </span>
              </div>
              {currentProject.location && (
                <p className="text-gray-600 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {currentProject.location}
                </p>
              )}
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {currentProject.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Child Projects Gallery */}
      <div className="child-projects-section bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Project Gallery
            </h2>
            {totalRecords > 0 && (
              <p className="text-gray-600 text-sm sm:text-base">
                {totalRecords} image{totalRecords > 1 ? 's' : ''} available
              </p>
            )}
          </div>

          {/* Loading State for Child Projects */}
          {childLoading && (
            <div className="flex justify-center py-8">
              <LoadingSpinner />
            </div>
          )}

          {/* Error State for Child Projects */}
          {childError && (
            <div className="px-4">
              <ErrorMessage message={`Failed to load gallery: ${childError}`} />
            </div>
          )}

          {/* Child Projects Grid - Mobile Optimized */}
          {!childLoading && !childError && childProjects.length > 0 && (
            <div className="child-projects-grid">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {childProjects.map((childProject, index) => (
                  <div 
                    key={childProject.id} 
                    className="child-project-item group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
                      <img 
                        src={childProject.fullImageUrl} 
                        alt={`${currentProject.title} - Image ${index + 1}`}
                        className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      {/* View Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State - Mobile Optimized */}
          {!childLoading && !childError && childProjects.length === 0 && (
            <div className="text-center py-8 sm:py-12 px-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No images available</h3>
              <p className="text-sm sm:text-base text-gray-600">This project doesn't have any gallery images yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={childProjects}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        initialIndex={lightboxIndex}
      />

      {/* Footer */}
      <footer className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center">
            <p className="text-sm sm:text-base">
              &copy; 2025 Victory Production. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;