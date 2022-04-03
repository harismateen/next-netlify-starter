import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>
          <body>

              <script>
                  (function(d,t) {
        var BASE_URL="https://doc-livechat-2.herokuapp.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
                      window.chatwootSDK.run({
                          websiteToken: 'CNHXeo6MLyXiQMtKB1CAXQXS',
                          baseUrl: BASE_URL
                      })
                  }
      })(document,"script");
    </script>
          </body>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
          </main>

      <Footer />
    </div>
  )
}
