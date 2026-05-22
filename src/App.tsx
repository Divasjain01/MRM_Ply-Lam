import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { AuthProvider } from '@/hooks/useAuth'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingSpinner from '@/components/LoadingSpinner'

// Import pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AccountPage from './pages/AccountPage'
import ContactPage from './pages/ContactPage'
import DownloadPage from './pages/DownloadPage'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import ProductsPage from './pages/ProductsPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import StoreLocatorPage from './pages/StoreLocatorPage'
import NotFoundPage from './pages/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/catalogs" element={<DownloadPage />} />
              <Route path="/index" element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<CategoryPage />} />
              <Route path="/products/:slug/:id" element={<ProductPage />} />
              <Route path="/store-locator" element={<StoreLocatorPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
