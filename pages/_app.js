import '../styles/globals.scss'
import { Layout, ParticlesBackground } from '../components'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'

const colors = ['#FF715B', '#F9CB40', '#1982C4', '#59FFA0', 'C874D9']

function MyApp({ Component, pageProps }) {
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])

  const progress = new ProgressBar({
    size: 3,
    color: `${color}`,
    className: 'z-50',
    delay: 100,
  })

  Router.events.on('routeChangeStart', progress.start)
  Router.events.on('routeChangeComplete', progress.finish)
  Router.events.on('routeChangeError', progress.finish)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
