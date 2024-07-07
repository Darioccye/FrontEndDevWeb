import { useParams } from "react-router-dom";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import useSingularProduto from "../hooks/useSingularProduto"
import React, { useEffect, useState } from 'react';

const ProdutoPage = () => {
  const { id } = useParams();
  const IdNumber = Number(id)
  const recuperaProduto= useSingularProduto(IdNumber)
  
  console.log(recuperaProduto)
  console.log(id)

  return (
    <>
<div className="card">
  <div className="card-header">
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
    )
};
export default ProdutoPage;