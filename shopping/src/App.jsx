import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router";
import Login from './Page/Login';
import ProductAll from './Page/ProductAll';
import ProductDetail from './Page/ProductDetail';
import Navbar from './component/Navbar';
import { Container, Row, Col } from "react-bootstrap";


/* 
1. 전체상품페이지, 로그인, 상품상세페이지
1-1. 네비게이션바 만들기
2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
3. 상품디테일을 눌렀으나, 로그인이 안되어있을 경우, 로그인페이지 나온다
4. 로그인이 되어야 상품 디테일 페이지를 볼 수 있다
5. 로그아웃 버튼 클릭하면 로그아웃이 된다
5. 로그아웃이 되면 상품디테일페이지를 볼 수 없고 로그인 페이지로 넘어간다
6. 로그인을 하면 로그아웃, 로그아웃 하면 로그인하라고 글씨가 바뀐다
7. 상품을 검색할 수 있다 
*/

function App() {
  

  return (
    <div>
      <Container>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
      <Navbar />

      
     <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/product/:id" element={<ProductDetail/>} /> 
      </Routes>
    </div>
  )
}

export default App
