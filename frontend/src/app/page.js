import Image from 'next/image';
import styles from './page.module.css';

// import hero from 'hero.png';

export default function Home() {
  return (
    <div className='home'>
      <div className='homeContent'>
        <h1>
          Advance your <br />
          <span> crop cultivation </span>
          <br />
          techniques.
        </h1>
        <p>
          Cropigo is a tool that provides guidance on the critical elements of
          your farming methods.
        </p>
      </div>
      <div className='homeImg'>
        {' '}
        <Image
          src={'hero.png'}
          alt='Picture of the author'
          width={500}

          // height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </div>
  );
}
