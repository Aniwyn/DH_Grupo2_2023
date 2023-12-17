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
  const [users, setUsers] = useState(Object)
  const [genres, setGenres] = useState(Object)

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/api/genres')
    .then(response => response.json())
    .then(data => setGenres(data))
  }, [])

  return (
    <main className='App'>
        <div className='content__main'>
          <div className='left__panel'>
            <div className='total__items'>
              {console.log("PRODUCTOS",products)}
              {(Object.keys(products).length === 0) ? ("Cargando") : (
                <Card name="Productos" value={ products.meta.total } key="1"></Card>
              )}
              {(Object.keys(users).length === 0) ? ("Cargando") : (
                <Card name="Usuarios" value={ users.meta.total } key="2"></Card>
              )}
              {(Object.keys(genres).length === 0) ? ("Cargando") : (
                <Card name="Generos" value={ genres.meta.total } key="3"></Card>
              )}
            </div>
            <div className='left__bottom'>
              
              {(Object.keys(genres).length === 0) ? ("Cargando") : (
                <GenreDashboard genres={ genres.data }></GenreDashboard>
              )}
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
            {(Object.keys(users).length === 0) ? ("Cargando") : (
                <UserCard user={ users.data[users.data.length - 1]}></UserCard>
            )}
            
          </div>
        </div>
    </main>
  );
}

export default App;
