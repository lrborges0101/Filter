data = [
    {
        id:1,
        name:"Pink Cap Iphone SE",
        img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN6G3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645509710532",
        price:15,
        color:"Pink",

    },
    {
        id:2,
        name:"Black Cap Iphone SE",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrwRN6hdfG0Qq5zuZAzW8-k8s0i_m8-fO_vbKkeuodyD-fmOvZlcMkw7DzKEW3Gj5Epw&usqp=CAU",
        price:20,
        color:"Back",

    },
    {
        id:3,
        name:"Red Cap Iphone SE",
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6H3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1645509721263",
        price:18,
        color:"Red",

    },
    {
        id:4,
        name:"Blue Cap Iphone SE",
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MXYN2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1585892553038",
        price:22,
        color:"Blue",

    },
    {
        id:5,
        name:"White Cap Iphone Se",
        img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRW82?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1535671748920",
        price:30,
        color:"White",

    },

]

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const colorsConteiner = document.querySelector(".colors")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

  const displayProducts = (filteredProducts) =>{
    productsContainer.innerHTML = filteredProducts.map(
        (product) =>

        `<div class="product">
        <img src=${product.img}" alt="">
        <span class="name">${product.name}</span>
        <span class="value">$${product.price}</span>
    </div>`
        
        ).join("")
  };

  displayProducts(data);

  searchInput.addEventListener("keyup", (e)=>{
    value = e.target.value.toLowerCase();

    if(value){
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))
    }else{
        displayProducts(data)
    }
  });

  const setColors = () =>{
    const allColors = data.map((item)=> item.color);
    const colors = [
        "All",...allColors.filter((item, i)=>{
        return allColors.indexOf(item) ===i; 
                    }),
            ];
          colorsConteiner.innerHTML = colors.map(col=>
          `<span class="color">${col}</span>`
          ).join("");


          colorsConteiner.addEventListener('click',(e)=>{
            colorsSelected = e.target.textContent;
            colorsSelected ==='All'? displayProducts(data):displayProducts(data.filter((item) =>
            item.color === colorsSelected)
           ) })
  };


   const setPrices = () => {
    const priceList = data.map((item) => item.price)
    priceRange.min = Math.min(...priceList);
    priceRange.max = Math.max(...priceList);
    priceRange.value = Math.max(...priceList);

    priceValue.textContent = `$${priceRange.max}`

 priceRange.addEventListener('input',(e)=>{
     priceValue.textContent = `$`+ e.target.value
     displayProducts(data.filter((item) => item.price <= e.target.value))
 })


   }
  setPrices()
  setColors();


