import { useState, useEffect } from 'react';

const useContact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://admin.victoryproduction98.com/api/contact.php');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          setContact(data.data.contact);
        } else {
          throw new Error(data.message || 'Failed to fetch contact');
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching contact:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  return { contact, loading, error };
};

export default useContact;
