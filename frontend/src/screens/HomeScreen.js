import React,{useState,useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useSelector,useDispatch } from 'react-redux';
import {listProducts} from '../actions/productActions'
const HomeScreen = ({match}) => {
    const keyword=match.params.keyword
    const dispatch=useDispatch()
    const productList=useSelector(state=>state.productList)
    const {loading,error,products}=productList
    // const [products, setProducts] = useState([])
    useEffect(() => {
       dispatch(listProducts(keyword))
    }, [dispatch, keyword])
    // const products=[]
    return (
        <>
            <h1>Latest Product</h1>
            {loading?<h2><Loader /></h2>:error?<Message variant='danger'>{error}</Message >:<Row>
                {products.map(product =>(
                    <Col  key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>}
            
        </>
    )
}

export default HomeScreen
