import { useState } from 'react';

export const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAIResponse = async (query: string, context: any = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/ai/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, context })
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message);
      
      return data.data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAIRecommendations = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/ai/recommendations', {
        headers: { 
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message);
      
      return data.data;
    } catch (err: any) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return { getAIResponse, getAIRecommendations, loading, error };
};
