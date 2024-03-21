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
              image: "./assets/themes/cocomelon.avif",
          },
          {
            id: 2,
            name: "Krishna",
            image: "./assets/themes/krishna.avif",
        },
        {
          id: 2,
          name: "Butterfly",
          image: "./assets/themes/butterfly.avif",
      },
      {
        id: 2,
        name: "Candy",
        image: "./assets/themes/candyland.avif",
    },
    {
      id: 2,
      name: "Poppit",
      image: "./assets/themes/cocomelon.avif",
  },
  {
    id: 2,
    name: "Memaid",
    image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Frozen",
  image: "./assets/themes/frozen.avif",
},
{
  id: 2,
  name: "Teddy",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Barbie",
  image: "./assets/themes/barbie.avif",
},
{
  id: 2,
  name: "Unicorn",
  image: "./assets/themes/unicorn.avif",
},
{
  id: 2,
  name: "Jungle",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Avengers",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Marvel",
  image: "./assets/themes/marvel.avif",
},
{
  id: 2,
  name: "Princess",
  image: "./assets/themes/princess.avif",
},
{
  id: 2,
  name: "Astronaut",
  image: "./assets/themes/astronaut.avif",
},
{
  id: 2,
  name: "Mickey Mouse",
  image: "./assets/themes/mickymouse.avif",
},
{
  id: 2,
  name: "Boss Baby",
  image: "./assets/themes/bossbaby.avif",
},
{
  id: 2,
  name: "Fairy",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Nursery",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Car theme",
  image: "./assets/themes/car.avif",
},
{
  id: 2,
  name: "Winnie pooh",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Tomen & Jerry",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Environmental",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Baby Shark",
  image: "./assets/themes/babyshark.avif",
},
{
  id: 2,
  name: "Paw Petrol",
  image: "./assets/themes/pawpetrol.avif",
},
{
  id: 2,
  name: "Honey",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "carnival",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Prince Theme",
  image: "./assets/themes/prince.avif",
},
{
  id: 2,
  name: "Pokemon",
  image: "./assets/themes/pokemon.avif",
},
{
  id: 2,
  name: "Minnie Mouse",
  image: "./assets/themes/minniemouse.avif",
},
{
  id: 2,
  name: "Star & Moon",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Pac man",
  image: "./assets/themes/pokemon.avif",
},
{
  id: 2,
  name: "Thomas",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Chhota Bheem",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Scooby Doo",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "ben 10",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Roll No 21",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Motu Patlu",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Pakdam Pakdai",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Doraemon",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Mr. Bean",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Doora The Explorer",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Sally Bollywood",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Donald Duck",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Alvin the Chipmunk",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Doraemon",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Goofy",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Sylvester",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Shrek",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Bob-the Builder",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Ninja Hatori",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Aladdin",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Pikachu",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Road Runner",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Tweety Bird",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "The Powerpuff Girls",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Garfield",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Marvin the Martin",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Peppa Pig",
  image: "./assets/themes/cocomelon.avif",
},
{
  id: 2,
  name: "Cardcaptor Sakura",
  image: "./assets/themes/cocomelon.avif",
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
