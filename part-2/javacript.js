async function Add(){

    var input = document.getElementById('input').value;
    var head = await fetch("https://6347eca8db76843976b5e973.mockapi.io/todos/" + input )
    .then(response => response.json())

    if((await fetch("https://6347eca8db76843976b5e973.mockapi.io/todos/" + input )).status == 200){
        var random_id = Math.floor(Math.random() * 100)

        var node = document.getElementById('col-cart')
        const div = document.createElement("div")
        const div2 = document.createElement("div")
        const div3 = document.createElement("div")

        div.setAttribute("id", random_id)
        div.setAttribute("class", "div1")
        div2.setAttribute("id", "div2")
        div3.setAttribute("id", "div3")

        const h2 = document.createElement("h2")
        h2.innerText = head.title
        h2.setAttribute("id", "my-h2")
        div2.append("title: ",h2)

        const p = document.createElement("p")
        p.innerText = head.description
        p.setAttribute("id", "my-p")
        div3.append("description: ",p)

        const img = document.createElement("img")
        img.setAttribute("src", "./trash3-fill.svg")
        img.setAttribute("class", "my-img")
        img.setAttribute("onclick", "deletebyid(id)")
        img.setAttribute("id", random_id)

        const button = document.createElement("button")
        button.setAttribute("type", "button")
        button.setAttribute("class", "btn btn-secondary")
        

        div.append(div2)
        div.append(div3)
        div.append(img)

        
        div.setAttribute("id", random_id)
        div.setAttribute("class", "my-div")
        node.append(div)  
    }
}

function deletebyid(id){
    var v = document.getElementById(id)
    var b = document.getElementById("cart")
    v.remove(b)
}

function deleteall(){
    var cart = document.getElementsByClassName("my-div")
    while(cart.length > 0){
        cart[0].parentNode.removeChild(cart[0]);
    }
}