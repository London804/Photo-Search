import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { getCuratedPhotos } from './api/hello';
// import Pagination from '../components/Pagination';
import {Paginate} from '../components/pagination.styles';
import Pagination from '@mui/material/Pagination';



const inter = Inter({ subsets: ['latin'] })
interface Photos {
  next_page: string;
  previous_page?: string;
  per_page: number;
  photos: Array<object>;
  total_results?: number;
}

export default function Home() {
  const [curatedPhotos, setCuratedPhotos] = useState<any| null>(null);


  const getPhotos = async (page?: number) => {
    try {
      const data = await getCuratedPhotos(page)
      console.log('data', data);
      if (!data) {
        console.log('error');
      } else {
        console.log('gucci!')
        setCuratedPhotos(data);
      }

    } catch (e) {
      console.log('error something went wrong', e);
    }

  }
  useEffect(() => {
    getPhotos();
  },[])

  

  const changePage = ((event, page) => {
    console.log('page', page);
    getPhotos(page)
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
       
        <section className={styles.flex}>
          {curatedPhotos?.photos.map(photo => {
            return ( 
              <div className={styles.photo_container} key={photo.id}>
                <Image 
                  src={photo.src.large}
                  alt={photo.alt}
                  width={photo.width / 10}
                  height={photo.height / 10}
                  />
              </div>
            )
          })}
        </section>

        {curatedPhotos && 
          <Paginate>
            <Pagination
              count={curatedPhotos.total_results}
              page={curatedPhotos.page}
              siblingCount={3}
              size='large'
              onChange={changePage}
            />
          </Paginate>
        }     
      </main>
    </>
  )
}
