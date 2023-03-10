/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image1 from '../public/homepage/image1.jpg'
import telImage from "../public/homepage/tel.png"
import cv from "../public/homepage/cv.png"
import emailImage from '../public/homepage/email.png'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="p-20">
      <Head>
        <title>Olusola Ajayi - Software Developer</title>
        <meta name="description" content="Backend Engineer, Frontend Engineer, Fullstack Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='flex'>
          <div className="flex-1 w-32 ...">
            <Image
            src={image1}
            alt="Olusola Ajayi"
            loading='lazy'
            />
          </div>
          <div className="font-Dosis flex-1 w-64 px-32">
            <h1 className="text-6xl"> Olusola Ajayi</h1>
            <h2 className='text-2xl pt-4 text-slate-400'>Software Developer</h2>
            <div className='text-zinc-400 text-sm flex py-4 justify-between'>
              <Link href="https://www.cakeresume.com/olusola-ajayi" passHref={true}>
                <a className='flex' target="_blank" rel="noopener noreferrer">
                  <Image src={cv} width={20} height={20} alt="Download my CV" className='rounded-md' />
                  <p className='pl-2'>View Resume</p>
                </a>
                </Link>

              <Link href="mailto:ebenezerajayi@gmail.com" passHref={true}>
                <a className='flex' target="_blank" rel="noopener noreferrer">
                  <Image src={emailImage} width={20} height={20} alt="email me!" className='rounded-md' />
                  <p className='pl-2'>ebenezerajayi@gmail.com</p>
                </a>
                </Link>

              <Link href="https://wa.me/12495256115" passHref={true}>
                <a className='flex'>
                  <Image src={telImage} width={20} height={20} alt="whatsapp chat" className='rounded-md' />
                  <p className='pl-2'>Let's Chat!</p>
                </a>
                </Link>
            </div>
            <div>
              <p className='text-base text-zinc-400 tracking-wide py-8 text-justify'>
              Olusola is a Software Engineer with 7 years of professional experience. He is trained as a full-stack engineer (with a preference for the backend) responsible for solely seeing apps from idea conception to deployment, but is also very comfortable with working in a team.

He is proficient in JavaScript and TypeScript technologies such as Nodejs, Nestjs, ExpressJs, Reactjs, Nextjs, Redux, and Angular. A certified??AWS Cloud Practioner??and??Oracle Certified Professional Java SE 7 Programmer,??Olusola is also comfortable with deploying and maintaining applications.

He is a good communicator, an amazing team player, and always willing to learn, grow and be better.?? Olusola prefers to work in an environment that fosters teamwork, trust, and growth.
              </p>
            </div>
          </div>
        </div>
        
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}

export default Home
