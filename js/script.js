const foods = [

{ name: "Apple Pie", image: "images/foods/Apple Pie.webp", link: "recipes/applepie.html" },
{ name: "Arancini", image: "images/foods/Arancini.webp", link: "recipes/arancini.html" },
{ name: "Barbecue Ribs", image: "images/foods/Barbecue Ribs.webp", link: "recipes/barbecueribs.html" },
{ name: "Biryani", image: "images/foods/Biryani.jpg", link: "recipes/biryani.html" },
{ name: "Bistecca alla Fiorentina", image: "images/foods/Bistecca Alla Florentina.webp", link: "recipes/bisteccaallafiorentina.html" },
{ name: "Buffalo Chicken Wings", image: "images/foods/Buffalo Chicken Wings.webp", link: "recipes/buffalochickenwings.html" },
{ name: "Butter Chicken", image: "images/foods/Butter Chicken.webp", link: "recipes/butterchicken.html" },
{ name: "Caprese Salad", image: "images/foods/Caprese Salad.webp", link: "recipes/capresesalad.html" },
{ name: "Chicken Fried Steak", image: "images/foods/Chicken Fried Steak.webp", link: "recipes/chickenfriedsteak.html" },
{ name: "Chilaquiles", image: "images/foods/Chilaquiles.webp", link: "recipes/chilaquiles.html" },
{ name: "Chiles en Nogada", image: "images/foods/Chiles En Nogada.webp", link: "recipes/chilesennogada.html" },
{ name: "Chow Mein", image: "images/foods/Chow Mein.webp", link: "recipes/chowmein.html" },
{ name: "Churros", image: "images/foods/Churros.webp", link: "recipes/churros.html" },
{ name: "Cochinita Pibil", image: "images/foods/Cochinita Pibil.webp", link: "recipes/cochinitapibil.html" },
{ name: "Dim Sum", image: "images/foods/Dim Sum.webp", link: "recipes/dimsum.html" },
{ name: "Dumplings", image: "images/foods/Dumplings.webp", link: "recipes/dumplings.html" },
{ name: "Elote", image: "images/foods/Elote.webp", link: "recipes/elote.html" },
{ name: "Enchiladas", image: "images/foods/Enchiladas.webp", link: "recipes/enchiladas.html" },
{ name: "Focaccia", image: "images/foods/Focaccia.webp", link: "recipes/focaccia.html" },
{ name: "Gelato", image: "images/foods/Gelato.webp", link: "recipes/gelato.html" },
{ name: "Guacamole", image: "images/foods/Guacamole.webp", link: "recipes/guacamole.html" },
{ name: "Hamburger", image: "images/foods/Hamburger.webp", link: "recipes/hamburger.html" },
{ name: "Hot Pot", image: "images/foods/Hot Pot.webp", link: "recipes/Hot Pot.html" },
{ name: "Hot Dog", image: "images/foods/Hot Dog.webp", link: "recipes/hotdog.html" },
{ name: "Japanese Curry Rice", image: "images/foods/Japanese Curry Rice.webp", link: "recipes/japanesecurryrice.html" },
{ name: "Jianbing", image: "images/foods/Jianbing.webp", link: "recipes/jianbing.html" },
{ name: "Kung Pao Chicken", image: "images/foods/Kung Pao Chicken.webp", link: "recipes/kungpaochicken.html" },
{ name: "Lasagna alla Bolognese", image: "images/foods/Lasagna Alla Bolognese.webp", link: "recipes/lasagnaallabolognese.html" },
{ name: "Lobster Roll", image: "images/foods/Lobster Roll.webp", link: "recipes/lobsterroll.html" },
{ name: "Macaroni and Cheese", image: "images/foods/Macaroni and Cheese.webp", link: "recipes/macaroniandcheese.html" },
{ name: "Mapo Tofu", image: "images/foods/Mapo Tofu.webp", link: "recipes/mapotofu.html" },
{ name: "Mochi Desserts", image: "images/foods/Mochi Desserts.webp", link: "recipes/mochidesserts.html" },
{ name: "Mole Poblano", image: "images/foods/Mole Poblano.webp", link: "recipes/molepoblano.html" },
{ name: "Okonomiyaki", image: "images/foods/Okonomiyaki.webp", link: "recipes/okonomiyaki.html" },
{ name: "Onigiri", image: "images/foods/Onigiri.webp", link: "recipes/onigiri.html" },
{ name: "Pasta Carbonara", image: "images/foods/Pasta Carbonara.webp", link: "recipes/pastacarbonara.html" },
{ name: "Peking Duck", image: "images/foods/Peking Duck.webp", link: "recipes/pekingduck.html" },
{ name: "Philly Cheesesteak", image: "images/foods/Philly Cheesesteak.webp", link: "recipes/phillycheesesteak.html" },
{ name: "Pizza (American Style)", image: "images/foods/Pizza(American Style).webp", link: "recipes/pizza(americanstyle).html" },
{ name: "Pizza Margherita", image: "images/foods/Pizza Margherita.webp", link: "recipes/pizzamargherita.html" },
{ name: "Polenta", image: "images/foods/Polenta.webp", link: "recipes/polenta.html" },
{ name: "Pozole", image: "images/foods/Pozole.webp", link: "recipes/pozole.html" },
{ name: "Quesadillas", image: "images/foods/Quesadillas.webp", link: "recipes/quesadillas.html" },
{ name: "Ramen", image: "images/foods/Ramen.webp", link: "recipes/ramen.html" },
{ name: "Risotto alla Milanese", image: "images/foods/Risotto Alla Milanese.webp", link: "recipes/risottoallamilanese.html" },
{ name: "Rou Jia Mo", image: "images/foods/Rou Jia Mo.webp", link: "recipes/roujiamo.html" },
{ name: "Smores", image: "images/foods/S'mores.webp", link: "recipes/smores.html" },
{ name: "Southern Fried Chicken", image: "images/foods/Southern Fried Chicken.webp", link: "recipes/southernfriedchicken.html" },
{ name: "Stinky Tofu", image: "images/foods/Stinky Tofu.webp", link: "recipes/stinkytofu.html" },
{ name: "Sushi & Sashimi", image: "images/foods/Sushi&Sashimi.webp", link: "recipes/sushi&sashimi.html" },
{ name: "Sweet and Sour Pork", image: "images/foods/Sweet and Sour Pork.webp", link: "recipes/sweetandsourpork.html" },
{ name: "Tacos al Pastor", image: "images/foods/Tacos Al Pastor.webp", link: "recipes/tacosalpastor.html" },
{ name: "Takoyaki", image: "images/foods/Takoyaki.webp", link: "recipes/takoyaki.html" },
{ name: "Tamales", image: "images/foods/Tamales.webp", link: "recipes/tamales.html" },
{ name: "Tempura", image: "images/foods/Tempura.webp", link: "recipes/tempura.html" },
{ name: "Tiramisu", image: "images/foods/Tiramisu.webp", link: "recipes/tiramisu.html" },
{ name: "Tonkatsu", image: "images/foods/Tonkatsu.webp", link: "recipes/tonkatsu.html" },
{ name: "Tortellini in Brodo", image: "images/foods/Tortellini in Brodo.webp", link: "recipes/tortelliniinbrodo.html" },
{ name: "Udon", image: "images/foods/Udon.webp", link: "recipes/udon.html" },
{ name: "Wagyu Beef", image: "images/foods/Wagyu Beef.webp", link: "recipes/wagyubeef.html" },
{ name: "Wonton Soup", image: "images/foods/Wonton Soup.webp", link: "recipes/wontonsoup.html" },
{ name: "Yakitori", image: "images/foods/Yakitori.webp", link: "recipes/yakitori.html" },



{ name: "Chole Bhature", image: "images/foods/Chole Bhature.webp", link: "recipes/cholebhature.html" },
{ name: "Dhokla", image: "images/foods/Dhokla.webp", link: "recipes/dhokla.html" },
{ name: "Dosa", image: "images/foods/Dosa.jpg", link: "recipes/dosa.html" },
{ name: "Gulab Jamun", image: "images/foods/Gulab Jamun.webp", link: "recipes/gulabjamun.html" },
{ name: "Idli Sambar", image: "images/foods/Idli Sambar.webp", link: "recipes/idlisambar.html" },
{ name: "Masala Dosa", image: "images/foods/Masala Dosa.webp", link: "recipes/masaladosa.html" },
{ name: "Paneer Tikka Malai", image: "images/foods/Paneer Tikka Malai.webp", link: "recipes/paneertikkamalai.html" },
{ name: "Pani Puri", image: "images/foods/Pani Puri.webp", link: "recipes/panipuri.html" },
{ name: "Rogan Josh", image: "images/foods/Rogan Josh.webp", link: "recipes/roganjosh.html" },
{ name: "Samosas", image: "images/foods/Samosas.webp", link: "recipes/samosas.html" },
{ name: "Vada Pav", image: "images/foods/Vada Pav.webp", link: "recipes/vadapav.html" }

];
function searchFood(){

let input = document.getElementById("search").value.toLowerCase();

let resultsDiv = document.getElementById("search-results");

resultsDiv.innerHTML = "";

let found = false;

foods.forEach(function(food){

if(food.name.toLowerCase().includes(input)){

found = true;

resultsDiv.innerHTML += `
<a href="${food.link}" class="food-card">
<div class="circle">
<img src="${food.image}">
</div>
<div class="food-name">${food.name}</div>
</a>
`;

}

});

if(!found){
resultsDiv.innerHTML = "<p>No food item found</p>";
}

}