// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from 'pexels';


const key = process.env.NEXT_PUBLIC_API_KEY;
const client = createClient(key);

export const getCuratedPhotos = async (page?: number, query?: string) => {
  try {
    if (!page) {
      return await client.photos.curated({ per_page: 10 });
    } else {
      return await client.photos.curated({ per_page: 10, page });
    }
  } catch (e) {
    console.log('error', e);
  }
}


export const getQueryPhotos = async (query: string, page?: number,) => {
  console.log('hit')
  try {
    if (!page) {
      return await client.photos.search({ query, per_page: 10 });
    } else {
      return await client.photos.search({ query, per_page: 10, page });
    }
  } catch (e) {
    console.log('error', e);
  }
}





