import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8000/api/center_image.php';

const useCenterImage = () => {
  const [centerImage, setCenterImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCenterImage = async () => {
      try {
        // Add timestamp to prevent caching
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success && data.data) {
          setCenterImage(data.data);
        } else {
          throw new Error(data.message || 'No image data found');
        }
      } catch (err) {
        console.error('Error fetching center image:', err);
        setError(err.message || 'Failed to fetch image. Please check your internet connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCenterImage();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, []);

  // Function to retry fetching
  const retryFetch = () => {
    setLoading(true);
    setError(null);
    setCenterImage(null);
  };

  return { centerImage, loading, error, retryFetch };
};

export default useCenterImage;
