import './App.css'
import About from './components/About'
import SEO from './components/SEO'
import {Routes, Route, useNavigate} from 'react-router-dom'

const App = () => {
  const defaultSEOProps = {
    title: 'seyeong',
    description: 'seo 적용 테스트 페이지',
    faviconUrl: '/icons/favicon-16x16.png',
    keywords: 'seo, 항해, 가롬이, 가롬, test, 메타태그, 페이지로',
    imgsrc: 'https://react-seo-lyart.vercel.app/images/garom.jpeg',
    url: 'https://react-seo-lyart.vercel.app/'
  }
  const navigate = useNavigate()
  return (
    <div className='App'>
      <SEO options={{...defaultSEOProps}}></SEO>
      <h1>seyeong seo test</h1>
      <h4>페이지 이동 시, 타이틀 파비콘 메타태그 내 데이터 동적 변경!</h4>
      <button
        onClick={() => {
          navigate('/about')
        }}>
        <h2>About 페이지로 이동</h2>
      </button>
      <Routes>
        <Route element={<About />} path='/about' />
      </Routes>
    </div>
  )
}

export default App
