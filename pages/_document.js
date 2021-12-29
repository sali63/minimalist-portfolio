import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html className='scroll-smooth'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;600&family=Public+Sans:wght@400;600;700&display=swap'
            rel='stylesheet'
          />
          {/* Uncomment to enable smooth scrolling—not working currently. 
          err: $ not defined. The class above, which sets 
          scroll-behavior property to 'smooth' on html element, isn't working either.
          
          */}
          {/* <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></Script>
          <script>
            $(document).ready(function()
            {
              // Add smooth scrolling to all links
              $('a').on('click', function (event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== '') {
                  // Prevent default anchor click behavior
                  event.preventDefault();

                  // Store hash
                  var hash = this.hash;

                  // Using jQuery's animate() method to add smooth page scroll
                  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                  $('html, body').animate(
                    {
                      scrollTop: $(hash).offset().top,
                    },
                    800,
                    function () {
                      // Add hash (#) to URL when done scrolling (default click behavior)
                      window.location.hash = hash;
                    }
                  );
                } // End if
              })
            }
            )
          </script> */}
        </Head>
        <body className='bg-secondary-gray-light' id='app'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
