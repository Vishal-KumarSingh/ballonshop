import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Themes = () => {  
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
              name: "Cocomelon",
              image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
          },
          {
            id: 2,
            name: "Krishna",
            image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
        },
        {
          id: 2,
          name: "Butterflu",
          image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
      },
      {
        id: 2,
        name: "Candy",
        image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
    },
    {
      id: 2,
      name: "Poppit",
      image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
  },
  {
    id: 2,
    name: "Memaid",
    image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Frozen",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Teddy",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Barbie",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Unicorn",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Jungle",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Avengers",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Marvel",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Princess",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Astronaut",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Mickey Mouse",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Boss Baby",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Fairy",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Nursery",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Car theme",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Winnie pooh",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Tomen & Jerry",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Environmental",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Baby Shark",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Paw Petrol",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Honey",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "carnival",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Prince Theme",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Pokemon",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Minnie Mouse",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Star & Moon",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Pac man",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Thomas",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Chhota Bheem",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Scooby Doo",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "ben 10",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Roll No 21",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Motu Patlu",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Pakdam Pakdai",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Doraemon",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Mr. Bean",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Doora The Explorer",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Sally Bollywood",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Donald Duck",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Alvin the Chipmunk",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Doraemon",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Goofy",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Sylvester",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Shrek",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Bob-the Builder",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Ninja Hatori",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Aladdin",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Pikachu",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Road Runner",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Tweety Bird",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "The Powerpuff Girls",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Garfield",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Marvin the Martin",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Peppa Pig",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
},
{
  id: 2,
  name: "Cardcaptor Sakura",
  image: "https:\/\/haplun.in\/uploads\/product_images\/large\/1698407941_5388722267.webp",
}
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
  const ShowThemes = () => {
    return (
      <>
        

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-2 col-sm-6 col-xs-8 col-6 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={100}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.name}
                  </h5>
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
            <h4 className="display-8 text-center">Themes </h4>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowThemes />}
        </div>
      </div>
    </>
  );
};

export default Themes;
