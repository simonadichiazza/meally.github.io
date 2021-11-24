/*document.getElementById("mainbutton").addEventListener("click", function () {
  document.querySelector(".popup").getElementsByClassName.display = "flex";
});*/

var currentChoice = 0;
console.log(currentChoice);

function addActiveClass(id) {
  console.log("icon" + id);
  for (var i = 1; i <= 3; i++) {
    document.getElementById("icon" + i).style.border = "";
  }
  document.getElementById("icon" + id).style.border = "1px solid black";
  currentChoice = id;
  console.log(currentChoice);
}

function moveToSecondPage() {
  if (currentChoice == 0) alert("You have to choose a diet");
  else window.location.href = "pages/secondpage.html?" + currentChoice;
}

function getCurrentChoice() {
  var url = window.location.href;
  console.log(url);
  var url2 = url.split("?");
  console.log(url2[1]);

  //ANYTHING
  if (url2[1] == 1) {
    document.getElementById("container").innerHTML =
      '      <div id="list">        <div class="daylist">          <div class="list1">            <h4>MONDAY</h4>            <p>Chicken Wok Mix</p>          </div>          <button class="btn">            <a href="thirdpage.html" target="_blank">RECIPE </a>          </button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list2">            <h4>TUESDAY</h4>            <p>Zucchini and Mushrooms Pasta</p>          </div>          <button class="btn">            <a href="thirdpage1.html" target="_blank">RECIPE</a>          </button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list3">            <h4>WEDNESDAY</h4>            <p>Tuna Wraps</p>          </div>          <button class="btn">            <a href="thirdpage2.html" target="_blank">RECIPE</a>          </button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list4">            <h4>THURSDAY</h4>            <p>Kale Pie with Feta Cheese</p>          </div>          <button class="btn">            <a href="thirdpage3.html" target="_blank">RECIPE</a>          </button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list5">            <h4>FRIDAY</h4>            <p>Chicken Curry with Rice</p>          </div>          <button class="btn">            <a href="thirdpage4.html" target="_blank">RECIPE</a>          </button>        </div>        <hr class="line" />      </div>';
    document.getElementById("box").innerHTML =
      '<div id="crossButton" onclick="hideShoppingList()"> X </div><ul id="ingredients">            <li>Red pepper (1)</li>            <li>Yellow onion (2)</li>              <li>Tuna in water (1 can)</li>              <li>Creme fraiche (1 can)</li>              <li>Curry powder</li>               <li>Sallad</li>              <li>Flatbreads (2)</li>              <li>Apple (1)</li>              <li>Ginger (1)</li>              <li>Soybeans (125g)</li>               <li>Sweet chili sauce</li>              <li>Soya</li>              <li>Chicken (500 g)</li>               <li>Egg noodles (2 packages)</li>               <li>Garlic</li>              <li>Mushrooms (100g)</li>              <li>Zucchini (1)</li>               <li>Sunflower seeds</li>               <li>Oat milk</li>              <li>Grated cheese (100g)</li>              <li>Pasta </li>              <li>Pie dough (230 g)</li>              <li>Cream</li>               <li>Vegetable broth (1)</li>               <li>Rice</li>              <li>Eggs (5)</li>              <li>Milk</li>              <li>Kale (500 g)</li>              <li>Basil (1 pot)</li>              <li>Feta cheese (150 g)</li>          </ul>';
  }
  //VEGETARIAN
  if (url2[1] == 2) {
    document.getElementById("container").innerHTML =
      '      <div id="list">        <div class="daylist">          <div class="list1">            <h4>MONDAY</h4>            <p>Zucchini and Mushrooms Pasta</p>          </div>          <button class="btn"><a href="veget1.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list2">            <h4>TUESDAY</h4>            <p>Halloumi Wok Mix</p>          </div>          <button class="btn"><a href="veget2.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list3">            <h4>WEDNESDAY</h4>            <p>Tofu Curry with Rice</p>          </div>          <button class="btn"><a href="veget3.html" target="_blank"> RECIPE </a></button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list4">            <h4>THURSDAY</h4>            <p>Carrot and Lentil Steaks</p>          </div>          <button class="btn"><a href="veget4.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list5">            <h4>FRIDAY</h4>            <p>Kale Pie with Feta Cheese</p>          </div>          <button class="btn"><a href="veget5.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />      </div>';
    document.getElementById("box").innerHTML =
      '<div id="crossButton" onclick="hideShoppingList()"> X </div>          <ul id="ingredients">            <li>1 package red lentils               <li>Carrots</li>               <li>Garlic</li>               <li>Peanut butter</li>               <li>Parsley (frozen or fresh)</li>               <li>Potato flour</li>              <li>Sesame seeds</li>              <li>Tofu</li>               <li>Yellow onion (2)</li>               <li>Curry powder</li>              <li>Apple (1)</li>              <li>Vegetable broth</li>               <li>Rice</li>              <li>Mushrooms (100g)</li>              <li>Zucchini (1)</li>               <li>Grated cheese</li>               <li>Pasta of your choice</li>              <li>Chilled pie dough (1)</li>               <li>Eggs (5)</li>               <li>Milk</li>               <li>Cream</li>               <li>Frozen kale (500g)</li>               <li>Basil (1 pot)</li>               <li>Feta cheese </li>              <li>Red pepper (1)</li>               <li>Ginger</li>              <li>Frozen soybeans (125g) </li>              <li>Sweet chili sauce </li>              <li>Soya</li>               <li>Halloumi (1)</li>               <li>Egg noodles</li>          </ul>';
  }
  //VEGAN
  if (url2[1] == 3) {
    //HERE IS WHERE YOU PUT IN THE RECEPIES AS ONE LINE (EVERYTHING IIIINSIIIIDE THE CONTAINER DIV)
    document.getElementById("container").innerHTML =
      '<div id="list">        <div class="daylist">          <div class="list1">            <h4>MONDAY</h4>            <p>Carrot and Lentil Steaks</p>          </div>          <button class="btn">            <a href="veget4.html" target="_blank"> RECIPE</a>          </button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list2">            <h4>TUESDAY</h4>            <p>Pasta with Eggplant</p>          </div>          <button class="btn"><a href="vegan2.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list3">            <h4>WEDNESDAY</h4>            <p>Black Bean Chili</p>          </div>          <button class="btn"><a href="vegan3.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list4">            <h4>THURSDAY</h4>            <p>Tofu Wok Mix</p>          </div>          <button class="btn"><a href="vegan4.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />        <div class="daylist">          <div class="list5">            <h4>FRIDAY</h4>            <p>Bean Wraps</p>          </div>          <button class="btn"><a href="vegan5.html" target="_blank">RECIPE</a></button>        </div>        <hr class="line" />      </div>';
    document.getElementById("box").innerHTML =
      '<div id="crossButton" onclick="hideShoppingList()" > X </div>          <ul id="ingredients">                        Red lentils             <li>Carrots</li>            <li>Garlic</li>            <li>Peanut butter</li>            <li>Parsley (fresh or frozen)</li>             <li>Potato flour</li>            <li>Sesame seeds</li>            <li>Mixed beans (1 tetra)</li>            <li>Corn</li>             <li>Tomatoes (2)</li>             <li>Avocado (1)</li>            <li>Onion (3)</li>            <li>Tortilla bread</li>            <li>Red pepper</li>             <li>Ginger</li>            <li>Soybeans (125g)</li>            <li>Sweet chili sauce</li>            <li>Soya</li>            <li>Tofu</li>             <li>Glas noodles</li>             <li>Chilli powder</li>            <li>Cumin</li>            <li>Brown sugar</li>            <li>Chopped tomatoes (1 canx400g)</li>            <li>Crushed tomatoes (195g)</li>            <li>Black beans (1 canx400g)</li>            <li>Aubergine (1)</li>             <li>Pasta of your choice</li>            <li>Basil (1 pot)</li>           </ul>';
  }
}

function showShoppingList() {
  console.log(document.querySelector(".bg-popContainer"));
  document.querySelector(".bg-popContainer").style.visibility = "visible";
}

function hideShoppingList() {
  document.querySelector(".bg-popContainer").style.visibility = "hidden";
}
