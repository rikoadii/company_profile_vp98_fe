// src/hooks/useService.js
import { useEffect, useState } from 'react';

const useService = (serviceId = null) => {
  const [services, setServices] = useState([]);
  const [serviceDetail, setServiceDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);

        // API endpoint backend PHP kamu
        let apiUrl = "https://admin.victoryproduction98.com/api/service.php";
        if (serviceId) {
          apiUrl += `?id=${serviceId}`;
        }

        console.log("useService - Fetching from:", apiUrl);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("useService - API response:", data);

        if (data.success) {
          if (serviceId) {
            // Kalau ambil detail by ID
            setServiceDetail(data.data);
          } else {
            // Kalau ambil semua
            setServices(data.data || []);
            setTotalRecords(data.total_records || 0);
          }
        } else {
          throw new Error(data.message || "Failed to fetch services");
        }
      } catch (err) {
        console.error("useService - Error:", err);
        setError(err.message);
        setServices([]);
        setServiceDetail(null);
        setTotalRecords(0);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [serviceId]);

  return {
    services,       // untuk list semua services
    serviceDetail,  // untuk detail jika serviceId diberikan
    loading,
    error,
    totalRecords,
  };
};

export default useService;
