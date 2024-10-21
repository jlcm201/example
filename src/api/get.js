const urlTVShows = 'https://api.tvmaze.com/shows';

export const getTVShows = async () => {
  try {
    const response = await fetch(urlTVShows); // Endpoint de ejemplo
    if (!response.ok) {
        throw new Error('Error in the network: ' + response.status);
    }
    const data = await response.json(); // Esperar a que se convierta a JSON
    return data;
  } catch (error) {
      console.error('Error getting data:', error);
  }
};