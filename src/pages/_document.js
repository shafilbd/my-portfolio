import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="Professional Graphics Web Designer, Web Developer and Digital Consultant in Dubai, Abu Dhabi, Sharjah all over the UAE and. I work with many International and local clients, agency to grow the business in specific market place. Beside I provide SEO & Digital Marketing solution including social media manage, On page SEO development" />
          <meta name="keyword" content="freelance web designer dubai, freelance web developer dubai, web designer dubai,web developer uae, web developer sharjah, web developer dubai, seo and social media expert, expert digital marketer, seo expert in Dubai, digital consultant dubai, dubai digital consultant, AI developer uae, web developer uae" />
          <link rel="icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          
          <a target="_blank" className="whats-app" href="https://wa.me/+971525775990"> <i className="fab fa-whatsapp"></i></a>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;