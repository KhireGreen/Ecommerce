let http = new XMLHttpRequest(); //creating a new xmlhttp-request object

http.open('get', 'products.json', true); // 1st argument sets the http method. 2nd arguement is passing the file where the data is stored. True set the request to be async

http.send(); //sending request

http.onload = function(){ //catching response
    if(this.readyState == 4 && this.status == 200){ //checks readyState and status properties
        let products = JSON.parse(this.responseText); //if the response is successful, this will parse the json data and convert them into a js array
        
        let output = ""; //empty variable is to add the incoming data

        for (let item of products){ // this is to loop through the products and for every iteration is adds an html template to the output variable
            output += `
            <div class="products">
                <img src="${item.image}" alt="${item.image}">
                <p class="title">${item.title}</p>
                <p class="description">${item.description}</p>
                <p class="price">
                <span>${item.price}</span>
                </p>
                <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>
            `;
        }

        document.querySelector(".products").innerHTML = output; //targeting the products container and add the data that the output variable holds
    }
}