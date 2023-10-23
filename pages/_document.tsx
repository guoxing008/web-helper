import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' href='static/logo2.jpg' />
        <meta property="og:description" content="架构师外包，软件架构设计，付费咨询，前端付费咨询，有偿解决问题，有偿解决bug，程序员简历，程序员职业规划" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}