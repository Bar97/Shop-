let bassket = document.querySelector(".bassket");
let basket_icon = document.querySelector(".icon-basket");

let count = document.querySelector(".count");

bassket.addEventListener("click", (e) => {
  basket_icon.classList.toggle("openBaskIcon");
});

let input = document.getElementById("inp");
let btn = document.getElementById("Button");
input.addEventListener("input", () => {
  let searchInput = input.value;
  let list = document.querySelector(".list");

  let arr = [...list.children];
  if (searchInput.length < 3) {
    list = arr.map((item) => {
      let text = item?.children[1]?.innerHTML;

      if (!text.includes(searchInput)) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
      return item;
    });
    list.innerHTML = "";
    list.appendChild(...list);
  }
});

btn.addEventListener("click", () => {
  let searchInput = input.value;
  let list = document.querySelector(".list");

  let arr = [...list.children];
  if (searchInput.length >= 3) {
    list = arr.map((item) => {
      let text = item?.children[1]?.innerHTML;

      if (!text.includes(searchInput)) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
      return item;
    });
    list.innerHTML = "";
    list.appendChild(...list);
  }
});

//                     code   for website

let baskText = document.querySelector(".baskText");

function getData() {
  return fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
      let list = document.createElement("div");
      list.setAttribute("class", "list");
      for (let i = 1; i < res.length; i++) {
        let name = document.createElement("div");
        let prices = document.createElement("span");
        name.setAttribute("class", "names");

        let addDiv = document.createElement("div");
        addDiv.setAttribute("class", "addDiv");

        let add = document.createElement("img");

        add.setAttribute("src", "../Promises/images/bask.png");
        add.setAttribute("class", "add");
        addDiv.appendChild(add);
        addDiv.append;
        // basket.append(addDiv);
        addDiv.addEventListener("click", () => {
          count.innerHTML++;

          let prod = document.createElement("div");
          let close = document.createElement("img");

          close.setAttribute("src", "../Promises/images/canc1.png");

          prod.setAttribute("class", "prod");
          let productBasket = addDiv.parentElement.cloneNode(true);

          prod.append(close);
          prod.appendChild(productBasket);

          close.addEventListener("click", () => {
            prod.remove();
            --count.innerHTML;
          });

          basket_icon.appendChild(prod);
          prod.style.margin = "10px";

          if (basket_icon.length === 0) {
            baskText.firstElementChild.innerText = "";
            baskText.children[1].remove();
          } else {
            basket_icon.append(baskText);
          }
        });

        prices.setAttribute("class", "prices");
        name.innerText = res[i - 1].name;
        prices.innerText = res[i].price;

        let products = document.createElement("div");
        products.setAttribute("class", "products");

        let imageDiv = document.createElement("div");
        imageDiv.setAttribute("class", "Vaxo");
        let avatar = document.createElement("img");
        avatar.setAttribute("src", res[i].src);

        imageDiv.appendChild(avatar);

        products.appendChild(imageDiv);
        products.appendChild(name);
        products.appendChild(prices);
        products.appendChild(addDiv);

        list.appendChild(products);
      }

      document.body.appendChild(list);
    });
}
getData();

// basket_icon.children[1].addEventListener("click", () => {

// });
