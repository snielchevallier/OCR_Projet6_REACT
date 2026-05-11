import Header from '../components/Sections/header'
import Footer from '../components/Sections/footer'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-purple-light  min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>  
  )
}

export default MainLayout