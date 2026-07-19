import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import ProductGrid from './components/ProductGrid/ProductGrid'
import UsersModal from './components/UsersModal/UsersModal'
import Footer from './components/Footer/Footer'

function App() {
  const [isUsersModalOpen, setIsUsersModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <Header
        onUsersClick={() => setIsUsersModalOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <main>
        <Banner/>
        <div className="app-container app-layout">
          <ProductGrid searchTerm={searchTerm} />
        </div>
      </main>
      <Footer />
      <UsersModal
        isOpen={isUsersModalOpen}
        onClose={() => setIsUsersModalOpen(false)}
      />
    </>
  )
}

export default App