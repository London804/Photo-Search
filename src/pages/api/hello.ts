// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from 'pexels';


const key = process.env.NEXT_PUBLIC_API_KEY;
const curatedURL = 'https://api.pexels.com/v1/curated';


export const getCuratedPhotos = async (page?: number) => {
  try {
    const response = createClient(key);
  
    if (!page) {
      return await response.photos.curated({ per_page: 10 });
    } else {
      return await response.photos.curated({ per_page: 10, page });
    }
  } catch (e) {
    console.log('error', e);
  }
}





