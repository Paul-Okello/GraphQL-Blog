import React from 'react'
import Header from './Header'
import ParticlesBackground from './ParticlesBackground'

const Layout = ({ children }) => (
  <div className="relative min-h-screen">
    <ParticlesBackground />
    <Header />
    {children}
  </div>
)

export default Layout
