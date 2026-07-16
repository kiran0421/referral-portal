import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Sidebar from './components/Sidebar/Sidebar'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Footer from './components/Footer/Footer'

function App() {
  const handleUsersClick = () => {
    console.log('Users modal will open here — see feature/11')
  }

  return (
    <>
      <Header onUsersClick={handleUsersClick} />

      <main>
        <Banner />

        <div className="app-container app-layout">
          <Sidebar />
          <ProductGrid />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App