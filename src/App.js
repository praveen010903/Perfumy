import Navbar from './components/Navbar';
import Searchbar from './components/Search';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
function App()
{
    return(
        <div>
        <Navbar></Navbar>
        <Searchbar></Searchbar>
        <Products></Products>
        <About></About>
        <Footer></Footer>
      </div>
    )
}
export default App