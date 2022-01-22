import Head from 'next/head'
import Calculator from '../components/Calculator'


export default function Home() {
  return (
    <>
      <Head>
        <title>React Calculator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet" />
      </Head>

      <Calculator />
    </>
  )
}
