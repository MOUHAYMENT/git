import React from "react";

function Hero() {
  return (
    <div>
      {" "}
      <section id="hero">
        <div id="img-box">
          <img
            src="https://media.discordapp.net/attachments/1201467357277716497/1242444146359275560/ss.png?ex=664e8487&is=664d3307&hm=14de4bbaf391044cc8110fceef99656c236f2730c8a64428784f938969d0489a&=&format=webp&quality=lossless&width=547&height=593"
            alt=""
            srcset=""
          />
        </div>
        <div id="hero-details">
          <div>
            <h1>We deserve tasty food and drinks 24/07</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              illum.
            </p>
          </div>

          <div id="links-box">
            <a id="hero-link-1" href="#">
              JOIN NOW
            </a>
            <a id="hero-link-2" href="#">
              TRACK YOUR ORDER
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
