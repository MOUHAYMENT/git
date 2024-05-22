import React from "react";

function Menu() {
  return (
    <div>
      <section id="menu">
        <h1>Popular food & drinks this week</h1>
        <div id="menu-items">
          <div class="item">
            <img
              src="https://www.whiskaffair.com/wp-content/uploads/2018/03/Chicken-Hakka-Noodles-2-3.jpg"
              alt=""
            />
            <h4>Chicken Noodles</h4>
          </div>
          <div class="item">
            <img
              src="https://omnivorescookbook.com/wp-content/uploads/2020/06/200430_Beef-Pan-Fried-Noodles_550.jpg"
              alt=""
            />
            <h4>Beef Noodles</h4>
          </div>
          <div class="item">
            <img
              src="https://www.triedandtruerecipe.com/wp-content/uploads/2021/02/Vegan-Mushroom-Taco-Meat_MidPage-%E2%80%93-1-1.jpg"
              alt=""
            />
            <h4>mushroom & meat</h4>
          </div>
          <div class="item">
            <img
              src="https://www.allrecipes.com/thmb/WSSoRAz2IygrMPkiJxHPbt9gqMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8635-southern-fried-chicken-ddmfs_4x3-90736ab31a7a4bb59eb04e2380ccebe7.jpg"
              alt=""
            />
            <h4>Fried chicken</h4>
          </div>
          <div class="item">
            <img
              src="https://www.budgetbytes.com/wp-content/uploads/2022/04/Vegetable-Beef-Soup-bowl.jpg"
              alt=""
            />
            <h4>Beef soup</h4>
          </div>
          <div class="item">
            <img
              src="https://healthyfitnessmeals.com/wp-content/uploads/2022/05/Fruit-salad-recipe-3.jpg"
              alt=""
            />
            <h4>Fruit salad</h4>
          </div>
        </div>
        <div>
          <button>Our Menu</button>
        </div>
      </section>
    </div>
  );
}

export default Menu;
