import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Services = () => {  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://vksrajputt.me/ballonapi/public/api/products");
      if (componentMounted) {

        const services = [
          {
              id: 1,
              name: "Birthday Decoration",
              description: "shark style ballon",
              price: "200.00",
              category_id: "1",
              image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
          },
          {
            id: 2,
            name: "Wedding Decoration",
            description: "shark style ballon",
            price: "200.00",
            category_id: "1",
            image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
        },
        {
          id: 2,
          name: "Anniversary Decoration",
          description: "shark style ballon",
          price: "200.00",
          category_id: "1",
          image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
      },
      {
        id: 2,
        name: "Decoration",
        description: "shark style ballon",
        price: "200.00",
        category_id: "1",
        image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
    },
      ]
        setData(services);
        setFilter(services);
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowServices = () => {
    return (
      <>
        <div className="buttons text-center py-2">
          <button className="btn btn-outline-dark btn-sm m-1" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-1" onClick={() => filterProduct("baby shark")}>Baby Shark</button>
          <button className="btn btn-outline-dark btn-sm m-1" onClick={() => filterProduct("Boss Baby")}>
            Boss Baby
          </button>
          <button className="btn btn-outline-dark btn-sm m-1" onClick={() => filterProduct("jewelery")}>Cocomelon</button>
          <button className="btn btn-outline-dark btn-sm m-1" onClick={() => filterProduct("electronics")}>Unicorn</button>
          <button className="btn btn-outline-dark btn-sm m-1" onClick={() => filterProduct("jewelery")}>Cocomelon</button>
          <button className="btn btn-outline-dark btn-sm m-1" onClick={() => filterProduct("electronics")}>Unicorn</button>
     
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-3 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name.substring(0,30)}
                  </h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    View
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h4 className="display-8 text-center">Services </h4>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowServices />}
        </div>
      </div>
    </>
  );
};

export default Services;
