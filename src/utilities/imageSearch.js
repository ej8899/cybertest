// imageSearch.js
import axios from 'axios';

const fetchImage = async (keyword) => {
  return;
  
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: keyword,
        orientation: 'portrait', // Landscape-oriented images
        w: 600, // Set the maximum width to 600 pixels
        client_id: 'ffdfdfdfdsfsd', // Replace with your Unsplash API key
      },
    });

    if (response.status === 200) {
      const image = response.data.urls.regular;
      return image;
    }
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
    return null;
  }
};

export { fetchImage };
