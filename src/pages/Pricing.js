import React from "react";
import "../pageStyle/Pricing.css";
import { FaCheck } from "react-icons/fa";

function Pricing() {
  return (
    <div>
      <section className="price">
        <h1>Plans & Pricing</h1>
      </section>
      <section className="plans">
        <div className="container grids">
          <div className="box">
            <h2>Discovery Plan</h2>
            <div className="plan">
              <h1>Price $99</h1>
              <p>Per Month</p>
            </div>

            <div>
              <ul>
                <li>
                  <span>
                    <FaCheck color="green" paddingRight="30px" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
              </ul>
            </div>
            <div>
              <button className="plan-btn">Buy Now</button>
            </div>
          </div>
          <div className="box box-special">
            <div className="plan-special">
              <h2>Essential Plan</h2>
              <div className="plan">
                <h1>Price $249</h1>
                <p>Per Month</p>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
              </ul>
            </div>
            <div>
              <button className="plan-btn">Buy Now</button>
            </div>
          </div>
          <div className="box">
            <h2>Optimal Plan</h2>
            <div className="plan">
              <h1>Price $549</h1>
              <p>Per Month</p>
            </div>
            <div>
              <ul>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  {" "}
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
                <li>
                  <span>
                    <FaCheck color="green" />
                  </span>
                  Lorem ipsum dolo
                </li>
              </ul>
            </div>
            <div>
              <button className="plan-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-info gray">
          <h2>Have a high traffic Assessment Requirement ?</h2>
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            odio, aliquid.
          </h3>
          <div>
            <button className="btn black ">Contact Us</button>
            <button className="btn ">Schedule a demo</button>
          </div>
        </div>
      </section>
      <footer class="center bg-dark">
        <p>Examsite &copy;2020</p>
      </footer>
    </div>
  );
}

export default Pricing;
