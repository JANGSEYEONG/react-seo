import SEO from './SEO'
import {useNavigate} from 'react-router-dom'

const About = () => {
  const aboutSEOProps = {
    title: 'seyeong-about',
    description: 'seo routing 적용 테스트 페이지',
    faviconUrl: '/icons/favicon2-16x16.png',
    keywords: 'seo2, 항해2, 가롬이2, 가롬2, about, test, 메타태그, 페이지로',
    imgsrc: 'https://react-seo-lyart.vercel.app/images/garom.jpeg',
    url: 'https://react-seo-lyart.vercel.app/about'
  }
  const navigate = useNavigate()
  return (
    <>
      <SEO options={{...aboutSEOProps}}></SEO>
      <h1>가롬이입니다.</h1>
      <h2>가롬이는 귀엽다.</h2>

      <button
        onClick={() => {
          navigate('/')
        }}>
        <h2>뒤로가기</h2>
      </button>
    </>
  )
}

export default About
