import './assets/css/App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Card from './components/Card/Card';
import GenreDashboard from './components/GenreDashboard/GenreDashboard';
import ProductCard from './components/Card/ProductCard';
import UserCard from './components/Card/UserCard';
import Table from './components/Table/Table';

import { useState, useEffect } from 'react'


function App() {

  const [products, setProducts] = useState(Object)

  useEffect(() => {
    fetch('http://localhost:5000/api/apiProvisoria')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])



  return (
    <main className='App'>
        <div className='content__main'>
          <div className='left__panel'>
            <div className='total__items'>
              {console.log("PRODUCTOS",products)}
              <Card 
                name="Productos"
                value={ (Object.keys(products).length === 0) ? (
                  "Cargando"
                ) : (
                  products.meta.total
                )}
                key="1"
              ></Card>
              <Card name="Usuarios" value="13" key="2"></Card>
              <Card name="Categorias" value="9" key="3"></Card>
            </div>
            <div className='left__bottom'>
              <GenreDashboard></GenreDashboard>
            </div>
            <div className='left__bottom'>
              {(Object.keys(products).length === 0) ? ("Cargando") : (
                <Table products={ products.data }></Table>
              )}
            </div>
          </div>
          <div className='rigth__panel'>
            {(Object.keys(products).length === 0) ? ("Cargando") : (
                <ProductCard product={ products.data[products.data.length - 1] }></ProductCard>
            )}
            <UserCard></UserCard>
          </div>
        </div>
    </main>
  );
}

export default App;
