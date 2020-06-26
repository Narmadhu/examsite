import React from "react";
import "../pageStyle/Home.css";
import { FaDatabase, FaHandHolding, FaUsers, FaCheck } from "react-icons/fa";

function Home() {
  return (
    <div>
      <header>
        <div className="home-header ">
          <h2>Hire Job fit candidates</h2>
          <h3>
            The most comprehensive skills assessment solution with 1,500+ ready
            skills, enterprise assessment platform, ATS integrations and more.
          </h3>
          <button className="btn gray header-btn">Schedule a demo</button>
        </div>
      </header>
      <section class="serices">
        <div class="container grid-3 center">
          <div className="grid">
            <FaDatabase size={60} />

            <h1>Accomadation</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              quisquam deleniti! Cum aliquam aperiam impedit neque omnis itaque
              libero nesciunt facere distinctio! Voluptates ab eaque dolor in?
              Explicabo, temporibus laborum.
            </p>
          </div>
          <div className="grid">
            <FaHandHolding size={60} />
            <h1>Emergency Serives</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              quisquam deleniti! Cum aliquam aperiam impedit neque omnis itaque
              libero nesciunt facere distinctio! Voluptates ab eaque dolor in?
              Explicabo, temporibus laborum.
            </p>
          </div>
          <div className="grid">
            <FaUsers size={60} />
            <h1>Support</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
              quisquam deleniti! Cum aliquam aperiam impedit neque omnis itaque
              libero nesciunt facere distinctio! Voluptates ab eaque dolor in?
              Explicabo, temporibus laborum.
            </p>
          </div>
        </div>
      </section>
      <section class="about bg-light">
        <div class="container ">
          <div class="grid-2">
            <img src="/img/profilepic.jpg" alt="" />
            <div>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                soluta eos iste in dicta vero reprehenderit minus facere nemo
                harum. Doloremque, quod. Recusandae, quis asperiores dolorum
                iusto culpa nulla ullam.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Animi soluta eos iste in dicta vero
                reprehenderit minus facere nemo harum. Doloremque, quod.
                Recusandae, quis asperiores dolorum iusto culpa nulla
                ullam.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Animi soluta eos iste in dicta vero reprehenderit minus facere
                nemo harum. Doloremque, quod. Recusandae, quis asperiores
                dolorum iusto culpa nulla ullam.Doloremque, quod. Recusandae,
                quis asperiores dolorum iusto culpa nulla ullam.Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Animi soluta eos
                iste in dicta vero reprehenderit minus facere nemo harum.
                Doloremque, quod. Recusandae, quis asperiores dolorum iusto
                culpa nulla ullam.Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="trial">
        <div>
          <h1>Make Smart decitions</h1>
          <button className="btn">Start 14 day free trial</button>
        </div>
      </section>
      <section className="assessment">
        <div className="container grid-2 ">
          <div>
            <h1>Online assessment</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              illo quis odit exercitationem in neque eveniet. Earum ab harum
              laboriosam corrupti neque! Ipsum aspernatur, quaerat laborum
              voluptatibus consectetur sunt fugiat!
            </p>

            <ul className="list">
              <li>
                <span>
                  <FaCheck color="blue" />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </li>
              <li>
                <span>
                  <FaCheck color="blue" />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </li>
              <li>
                <span>
                  <FaCheck color="blue" />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </li>
              <li>
                <span>
                  <FaCheck color="blue" />
                </span>
                Lorem ipsum dolor sit amet consectetur
              </li>
            </ul>
          </div>
          <img src="/img/assessment.jpg" alt="" />
        </div>
      </section>

      <footer class="center bg-dark">
        <p>Examsite &copy;2020</p>
      </footer>
    </div>
  );
}

export default Home;
