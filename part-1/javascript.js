async function show(){
    var input_id = document.getElementById('input-text').value;
    var json_data = await fetch('https://dummyjson.com/products/' + input_id).then(result => result.json());

    if((await fetch('https://dummyjson.com/products/' + input_id)).status == 200){
        document.getElementById('img').src = json_data.images[0];
        document.getElementById('title').innerHTML = json_data.title;
        document.getElementById('description').innerHTML = json_data.description;
        document.getElementById('price').innerHTML = json_data.price;

    }else{
        document.getElementById('output').innerHTML = "notvalid";
    }
}