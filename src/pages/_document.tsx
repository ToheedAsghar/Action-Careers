import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="Action Careers - Find your dream job with the UK's leading recruitment agency" />
          <meta name="keywords" content="jobs, careers, recruitment, hiring, employment, London, UK" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Add custom meta tags for SEO */}
          <meta property="og:title" content="Action Careers | Professional Recruitment Agency" />
          <meta property="og:description" content="Action Careers connects talented professionals with top employers across the UK. Find your dream job today!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://action-careers.co.uk" />
          <meta property="og:image" content="https://action-careers.co.uk/og-image.jpg" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Action Careers | Professional Recruitment Agency" />
          <meta name="twitter:description" content="Action Careers connects talented professionals with top employers across the UK. Find your dream job today!" />
          <meta name="twitter:image" content="https://action-careers.co.uk/twitter-image.jpg" />
          
          {/* Preload fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          
          {/* Script for animation on scroll */}
          <script dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const observerOptions = {
                  root: null,
                  rootMargin: '0px',
                  threshold: 0.1
                };
                
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                    }
                  });
                }, observerOptions);
                
                document.querySelectorAll('.animate-on-scroll').forEach(elem => {
                  observer.observe(elem);
                });
              });
            `
          }} />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 