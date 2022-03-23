import React, { useState, useEffect } from 'react';


import { Events } from './Component/Events/Events';




export function EventsContainer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      let json;

      const url = `https://vef2-20222-v3-synilausn.herokuapp.com/events`;

      try {
        const result = await fetch(url);

        if (!result.ok) {
          throw new Error('result not ok');
        }

        json = await result.json();
      } catch (e) {
        setError('Gat ekki sótt gögn.');
        return;
      } finally {
        setLoading(false);
      }

      setData(json);
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <p>Villa kom upp: {error}</p>
    );
  }

  if (loading) {
    return (
      <p>Sæki gögn...</p>
    );
  }

 

  let events = data.items || [];



  return (
    <Events
      events={events}
    />
  );
}