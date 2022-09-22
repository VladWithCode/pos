import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple POS</title>
        <meta
          name='description'
          content='El sistema de Punto de Venta más sencillo en México.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='p-3'>Hello World</h1>
    </div>
  );
}
