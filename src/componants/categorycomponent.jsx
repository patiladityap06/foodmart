import React, { useRef } from "react";
import "./category.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Category cards data
const cardData = [
  {
    img: "./icon-vegetables-broccoli.png",
    title: "Fruits & Veges",
  },
  {
    img: "./icon-bread-baguette.png",
    title: "Breads & Sweets",
  },
  {
    img: "./icon-soft-drinks-bottle.png",
    title: "Drinks & Beverages",
  },
  {
    img: "./icon-wine-glass-bottle.png",
    title: "Wines & Spirits",
  },
  {
    img: "./icon-vegetables-broccoli.png",
    title: "Fruits & Veges",
  },
  {
    img: "./icon-bread-herb-flour.png",
    title: "Herbs & Flour",
  },
  {
    img: "./icon-vegetables-broccoli.png",
    title: "Organic Goods",
  },
];

// Honey cards data
const honeyCardData = [
  {
    img: "images/product-thumb-11.jpg",
    subtitle: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: "images/product-thumb-12.jpg",
    subtitle: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: "images/product-thumb-13.jpg",
    subtitle: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: "images/product-thumb-14.jpg",
    subtitle: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: "images/product-thumb-11.jpg",
    subtitle: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
  {
    img: "images/product-thumb-12.jpg",
    subtitle: "Amber Jar",
    title: "Honey best nectar you wish to get",
  },
];

export default function CategorySlider() {
  const categoryPrevRef = useRef(null);
  const categoryNextRef = useRef(null);
  const honeyPrevRef = useRef(null);
  const honeyNextRef = useRef(null);

  return (
    <>
      {/* CATEGORY SECTION */}
      <div className="section-header d-flex justify-content-between align-items-center">
        <p className="section-title">Category</p>
        <div className="categories d-flex align-items-center gap-2">
          <p className="mb-0 view-all">
            View All Categories <FaArrowRightLong />
          </p>
          <button ref={categoryPrevRef} className="nav-button transparent-button">
            <MdArrowBackIosNew />
          </button>
          <button ref={categoryNextRef} className="nav-button transparent-button">
            <GrNext />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={30}
        navigation={{
          prevEl: categoryPrevRef.current,
          nextEl: categoryNextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = categoryPrevRef.current;
          swiper.params.navigation.nextEl = categoryNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="category-swiper"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="category-card square-card d-flex flex-column align-items-center justify-content-center p-3 shadow rounded-4">
              <img src={card.img} alt={card.title} className="category-icon mb-2" />
              <h6 className="category-title text-center mb-0">{card.title}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* HONEY PRODUCTS SECTION */}
      <div className="p2">
        <div className="section-header d-flex justify-content-between align-items-center" style= {{marginTop: "40px"}}>
          <p className="section-title">Newly Arrived Brands</p>
          <div className="categories d-flex align-items-center gap-2">
            <p className="mb-0 view-all">
              View All Categories <FaArrowRightLong />
            </p>
            <button ref={honeyPrevRef} className="nav-button transparent-button">
              <MdArrowBackIosNew />
            </button>
            <button ref={honeyNextRef} className="nav-button transparent-button">
              <GrNext />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            prevEl: honeyPrevRef.current,
            nextEl: honeyNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = honeyPrevRef.current;
            swiper.params.navigation.nextEl = honeyNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="honey-swiper"
        >
          {honeyCardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="card mb-3 p-3 rounded-4 shadow border-0">
                <div className="row g-0"> 
                  <div className="col-md-4">
                    <img src={card.img} className="img-fluid" alt={card.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body py-0">
                      <p className="text-muted mb-0">{card.subtitle}</p>
                      <h5 className="card-title">{card.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
