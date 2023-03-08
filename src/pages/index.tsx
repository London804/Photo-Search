import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css'
import { useEffect, useState, useRef, useCallback } from 'react';
import { getCuratedPhotos, getQueryPhotos } from './api/hello';
import {Paginate} from '../components/pagination.styles';
import Pagination from '@mui/material/Pagination';
import { Search } from '../components/search.styles';


const inter = Inter({ subsets: ['latin'] })
interface Photos {
  next_page: string;
  previous_page?: string;
  per_page: number;
  photos: Array<object>;
  total_results?: number;
}

export default function Home() {
  const [photos, setPhotos] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState<any | null>(undefined);
  const formQuery = useRef(null);

  const getPhotos = async (page?: number) => { 
    try {
      const data = await getCuratedPhotos(page)
      console.log('data', data);
      if (!data) {
        console.log('error');
      } else {
        setPhotos(data);
        setSearchQuery(null)
      }

    } catch (e) {
      console.log('error something went wrong', e);
    }
  }

  const queryPhotos = async (query: string, page?: number) => {
    try {
      const data = await getQueryPhotos(query, page)
      console.log('data', data);
      if (!data) {
        console.log('error');
      } else {
        setPhotos(data);
        
      }

    } catch (e) {
      console.log('error something went wrong', e);
    }
  }

  useEffect(() => {
    const pageNumber = sessionStorage.getItem('page');
    const searchQuery = sessionStorage.getItem('searchQuery');
    console.log('sessionStorage', Object.values(sessionStorage));
   
    if (searchQuery !== 'null') {
      console.log('searchQuery init', searchQuery);
      queryPhotos(searchQuery, Number(pageNumber))
      setSearchQuery(searchQuery);
    } else {
      if (pageNumber) {
        console.log('pageNumber', pageNumber);
        getPhotos(Number(pageNumber));
      } else {
        getPhotos();
      }
    }
  }, [])
  
  const changePage = ((event, page) => {
    console.log('searchQuery change page', searchQuery);
    if (!searchQuery) {
      getPhotos(page)
    } else {
      queryPhotos(searchQuery, page);
    }

  })

  const querySearch = ((query) => {
    query.preventDefault();

    console.log('query', query?.target[0].value);
    const searchText = query?.target[0].value
    setSearchQuery(searchText)
    queryPhotos(searchText)
  })

  useEffect(() => {
    sessionStorage.setItem('page', photos?.page);
    sessionStorage.setItem('searchQuery', searchQuery);
  }, [photos, searchQuery]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>

        <button onClick={getPhotos}>Home</button>
        <Search>
          <div className='search-container'>
            <form ref={formQuery} onSubmit={querySearch}>
              <input 
                className='search-bar' 
                type="text" 
                placeholder='Search...'
                name="search" >
              </input>
              <button className='search-button'>
                <span className="ico ico-mglass"></span>
              </button>
            </form>
              
          </div>
        </Search>


       
        <section className={styles.flex}>
          {photos?.photos?.map(photo => {
            return ( 
              <div className={styles.photo_container} key={photo.id}>
                <Image 
                  src={photo.src.large}
                  alt={photo.alt}
                  width={photo.width / 10}
                  height={photo.height / 10}
                  />
                  <div>
                    {photo.photographer &&
                      <p>{photo.photographer}</p>
                    }
                    {photo.url && 
                      <a href={photo.url} target="_blank">Link</a>
                    }
                  </div>
              </div>
            )
          })}
        </section>

        {photos && 
          <Paginate>
            <Pagination
              count={Math.floor(photos.total_results / photos.per_page)}
              page={photos.page}
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
