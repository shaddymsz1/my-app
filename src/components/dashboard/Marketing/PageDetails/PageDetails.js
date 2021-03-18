import React from "react";
import seven from "../../../../assets/images/other-images/profile-style-img.png";
// import blog from "../../../../assets/images/blog/blog-5.png";
import Photo from "../../../../assets/images/user/3.png";

import Slider from "react-slick";
import CountUp from "react-countup";

import {
  DollarSign,
  MapPin,
  X,
  TrendingDown,
  ArrowUp,
  ShoppingCart,
  Percent,
  PlusCircle,
  User,
} from "react-feather";

const PageDetails = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="col-sm-12">
        <div style={{ padding: "60px" }} className="card">
          <div className="profile-img-style">
            <div className="row">
              <div className="col-sm-8">
                <div className="media">
                  <div className="media-body align-self-center">
                    <h5 className="mt-0 user-name">Xpc 1</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 align-self-center">
                <div className="float-sm-right">
                  <button
                    className="btn btn-square btn-lg btn-primary-gradien"
                    type="link"
                  >
                    Promote
                  </button>
                  <button
                    className="btn btn-square btn-lg btn-primary-gradien"
                    type="link"
                    style={{ marginLeft: "22px" }}
                    onClick={() => props.history.push("/dashboard/editor")}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-12 col-xl-4">
                <div id="aniimated-thumbnials-3">
                  <a href="#javascript">
                    <img
                      className="img-fluid rounded"
                      src={Photo}
                      alt="gallery"
                    />
                  </a>
                </div>
                <div className="like-comment mt-4 like-comment-lg-mb">
                  <ul className="list-inline">
                    <li className="list-inline-item border-right pr-3">
                      <label className="m-0">
                        <a href="#javascript">
                          <i className="fa fa-heart"></i>
                        </a>
                          Like
                      </label>
                      <span className="ml-2 counter">{"2659"}</span>
                    </li>
                    <li className="list-inline-item ml-2">
                      <label className="m-0">
                        <a href="#javascript">
                          <i className="fa fa-comment"></i>
                        </a>
                          Comment
                      </label>
                      <span className="ml-2 counter">{"569"}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6">
                <p>URL</p>
                <p>
                  <a href="https://drive.google.com/file/d/1y5svNb_SJKwQFKfnwy-Mx1oIdg242B8i/view?ts=5fdf4c1a">
                    https://drive.google.com/file/d/1y5svNb_SJKwQFKfnwy-Mx1oIdg242B8i/view?ts=5fdf4c1a
                  </a>
                </p>
                <p>
                  {
                    " Details: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="itemGrid">
        <div className="item">
          <div className="card">
            <div className="card-body ecommerce-icons text-center">
              <User />
              <div>
                <span>New Customers</span>
              </div>
              <h4 className="font-primary mb-0">
                <CountUp className="counter" end={72} />
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="card-body ecommerce-icons text-center">
              <Percent />
              <div>
                <span>Exits Per Page Views</span>
              </div>
              <h4 className="font-primary mb-0">
                <CountUp className="counter" end={65} />
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="card-body ecommerce-icons text-center">
              <Percent />
              <div>
                <span>Average Bounce Rate</span>
              </div>
              <h4 className="font-primary mb-0">
                <CountUp className="counter" end={96} />
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="card-body ecommerce-icons text-center">
              <PlusCircle />
              <div>
                <span>New Contancts</span>
              </div>
              <h4 className="font-primary mb-0">
                <CountUp className="counter" end={89} />
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="card-body ecommerce-icons text-center">
              <DollarSign />
              <div>
                <span>Total Form Submission</span>
              </div>
              <h4 className="font-primary mb-0">
                <CountUp className="counter" end={72} />
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="card-body ecommerce-icons text-center">
              <MapPin />
              <div>
                <span>Page Views</span>
              </div>
              <h4 className="font-primary mb-0">
                <CountUp className="counter" end={65} />
              </h4>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="card-body ecommerce-icons text-center">
              <ShoppingCart />
              <div>
                <span>Entrances</span>
              </div>
              <h4 className="font-primary mb-0">
                <CountUp className="counter" end={96} />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
