import React, { useState, useEffect } from 'react';

const ImageLightbox = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        default:
          break;
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2"
          aria-label="Previous image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2"
          aria-label="Next image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Main Image */}
      <div className="max-w-4xl max-h-4xl mx-4 flex flex-col items-center">
        <img
          src={currentImage.fullImageUrl}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Image Counter */}
        {images.length > 1 && (
          <div className="mt-4 text-white text-center">
            <span className="bg-black bg-opacity-50 px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all duration-200 ${
                index === currentIndex 
                  ? 'border-white shadow-lg' 
                  : 'border-gray-400 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={image.fullImageUrl}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close on click */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default ImageLightbox;
