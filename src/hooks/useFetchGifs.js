import { useEffect } from 'react';
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImage = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setIsLoading(false);
  };

  useEffect(() => {
    getImage();
  }, []);
  return { images: images, isLoading: isLoading };
};
