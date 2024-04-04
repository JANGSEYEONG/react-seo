import {Helmet} from 'react-helmet-async'

const MataTag = props => {
  const options = props.options
  return (
    <Helmet>
      <title>{options.title}</title>
      <meta name='description' content={options.description} />
      <meta name='keywords' content={options.keywords} />
      {/* 파비콘은 쿼리 문자열을 추가하여 브라우저가 캐시를 무시하고 새로운 리소스로
      인식하도록 유도해야지 잘 바뀐다!! */}
      <link
        rel='icon'
        type='image/png'
        href={`${options.faviconUrl}?v=${Math.random()}`}
        sizes='16x16'></link>
      {/* 메타 태그 추가 */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={options.title} />
      <meta property='og:site_name' content={options.title} />
      <meta property='og:description' content={options.description} />
      <meta property='og:image' content={options.imgsrc} />
      <meta property='og:url' content={options.url} />
      {/* 트위터 태그 추가 */}
      <meta name='twitter:title' content={options.title} />
      <meta name='twitter:description' content={options.description} />
      <meta name='twitter:image' content={options.imgsrc} />
      <meta name='twitter:card' content='summary_large_image' />
      <link rel='canonical' href={options.url} />
    </Helmet>
  )
}

export default MataTag
