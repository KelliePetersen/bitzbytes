import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Bitzbytes</title>
      </Head>
      <Navbar />
      <div className="container">
        {props.children}
      </div>

      <style jsx>{`
        .container {
          width: 960px;
          max-width: 80%;
          margin: 50px auto;
        }
      `}</style>
    </div>
  )
}

export default Layout
