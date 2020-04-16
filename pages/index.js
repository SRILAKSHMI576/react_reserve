import React from "react"
import axios from "axios"
import ProductList from "../components/Index/ProductList"
import baseUrl from "../utils/baseUrl"

function Home({ products }) {
  // console.log("props", products)
  // React.useEffect(() => {
  //   getProducts()
  // }, [])

  // async function getProducts(){
  //   const url = "http://localhost:3000/api/products"
  //   const response = await axios.get(url)
  //   console.log("----------", response.data)
  // }

  return <ProductList products={ products } />;
}

Home.getInitialProps = async () => {
    //fetch data on server
    const url = `${baseUrl}/api/products`
    const response = await axios.get(url)
    return {products: response.data}
    //return resonse data as an object
   
    //note: this object will be merged with eisting props
}

export default Home;
