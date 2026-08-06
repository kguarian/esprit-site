import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './styles.css'

function Layout({ title, children }) {
  return (
    <div className="page">
      <header>
        <h1>🎉 Happy 25th Birthday 🎉</h1>
        <p>Personal site scaffold for a data analyst.</p>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/kenton">Kenton</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/links">Links</Link>
        <Link to="/code">Code</Link>
        <Link to="/more">More</Link>
      </nav>

      <main>
        <h2>{title}</h2>
        {children}
      </main>
    </div>
  )
}

function Home() {
  return (
    <Layout title="Home">
      <p>Welcome. This is the starter React scaffold.</p>
    </Layout>
  )
}

function Kenton() {
  return (
    <Layout title="Kenton">
      <p>About page scaffold.</p>
    </Layout>
  )
}

function Contact() {
  return (
    <Layout title="Contact">
      <p>Contact page scaffold.</p>
    </Layout>
  )
}

function Links() {
  return (
    <Layout title="Links">
      <p>Links page scaffold.</p>
    </Layout>
  )
}

function Code() {
  return (
    <Layout title="Code">
      <p>Code/projects page scaffold.</p>
    </Layout>
  )
}

function More() {
  return (
    <Layout title="More">
      <p>Extra page scaffold.</p>
    </Layout>
  )
}

function NotFound() {
  return (
    <Layout title="Not Found">
      <p>That page does not exist.</p>
    </Layout>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kenton" element={<Kenton />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/links" element={<Links />} />
        <Route path="/code" element={<Code />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
