import { useState } from 'react';
import './ChildProjectsGallery.css';
import ErrorMessage from './ErrorMessage';

const ChildProjectsGallery = ({ childProjects, loading, error, totalRecords, projectTitle }) => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({
      ...prev,
      [imageId]: true
    }));
  };

  const handleImageLoad = (imageId) => {
    setImageErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[imageId];
      return newErrors;
    });
  };

  if (loading) {
    return (
      <div className="child-projects-gallery-section bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Project Gallery
            </h2>
          </div>
          <div className="text-center text-gray-500">Loading gallery...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="child-projects-gallery-section bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Project Gallery
            </h2>
          </div>
          <ErrorMessage message={`Failed to load gallery: ${error}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="child-projects-gallery-section bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Project Gallery
          </h2>
          {totalRecords > 0 && (
            <p className="text-gray-600">
              {totalRecords} image{totalRecords > 1 ? 's' : ''} from {projectTitle}
            </p>
          )}
        </div>

        {/* Gallery Grid */}
        {childProjects.length > 0 ? (
          <div className="gallery-grid">
            {/* Featured Large Image (First Image) */}
            {childProjects.length > 0 && (
              <div className="featured-image mb-8">
                <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={childProjects[0].fullImageUrl}
                    alt={`${projectTitle} - Featured`}
                    className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(childProjects[0].id)}
                    onLoad={() => handleImageLoad(childProjects[0].id)}
                    onClick={() => window.open(childProjects[0].fullImageUrl, '_blank')}
                  />
                  {imageErrors[childProjects[0].id] && (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="text-gray-500 text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm">Image not available</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                      Click to view full size
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Thumbnail Grid (Remaining Images) */}
            {childProjects.length > 1 && (
              <div className="thumbnails-grid">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {childProjects.slice(1).map((childProject, index) => (
                    <div 
                      key={childProject.id}
                      className="thumbnail-item group cursor-pointer"
                      onClick={() => window.open(childProject.fullImageUrl, '_blank')}
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200">
                        <img 
                          src={childProject.fullImageUrl}
                          alt={`${projectTitle} - Image ${index + 2}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={() => handleImageError(childProject.id)}
                          onLoad={() => handleImageLoad(childProject.id)}
                        />
                        {imageErrors[childProject.id] && (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
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

            {/* Show All Images Button (if more than 6 images) */}
            {childProjects.length > 6 && (
              <div className="text-center mt-8">
                <button 
                  onClick={() => {
                    // You can implement a "show all" functionality here
                    const galleryWindow = window.open('', '_blank');
                    const html = `
                      <!DOCTYPE html>
                      <html>
                      <head>
                        <title>${projectTitle} - All Images</title>
                        <style>
                          body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
                          .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
                          .image-item { background: white; border-radius: 8px; padding: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
                          .image-item img { width: 100%; height: 200px; object-fit: cover; border-radius: 4px; }
                          h1 { text-align: center; color: #333; }
                        </style>
                      </head>
                      <body>
                        <h1>${projectTitle} - Complete Gallery</h1>
                        <div class="gallery">
                          ${childProjects.map((img, i) => `
                            <div class="image-item">
                              <img src="${img.fullImageUrl}" alt="Image ${i + 1}" />
                              <p>Image ${i + 1}</p>
                            </div>
                          `).join('')}
                        </div>
                      </body>
                      </html>
                    `;
                    galleryWindow.document.write(html);
                  }}
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  View All {totalRecords} Images
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No images available</h3>
            <p className="text-gray-600">This project doesn't have any gallery images yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChildProjectsGallery;
