
let galleryarray = [
    {
        id:Math.random(),
        name:"Guantes de boxeo",
        src:"./img/products/boxing2.jpeg",
        description:"Guantes con máxima calidad y confort",
        precio:"₡15,000",
        tag:"Boxeo"
    },
    {
        id:Math.random(),
        name:"Guantes de boxeo",
        src:"./img/products/boxing3.jpeg",
        description:"Guantes con materiales veganos",
        precio:"₡35,000",
        tag:"Boxeo"
    },
    {
        id:Math.random(),
        name:"Muñequeras",
        src:"./img/products/crossfit1.jpeg",
        description:"Muñequeras marca Everless",
        precio:"₡5,000",
        tag:"CrossFit"
    },
    {
        id:Math.random(),
        name:"Muñequeras",
        src:"./img/products/crossfit2.jpeg",
        description:"Muñequeras marca Nike",
        precio:"₡5,000",
        tag:"CrossFit"

    },
    {
        id:Math.random(),
        name:"Muñequeras",
        src:"./img/products/crossfit3.jpeg",
        description:"Muñequeras marca Adidas",
        precio:"₡5,000",
        tag:"CrossFit"
    },
    {
        id:Math.random(),
        name:"Zapato Deportivo",
        src:"./img/products/outdoor1.png",
        description:"Nike revolution",
        precio:"₡35,000",
        tag:"Outdoor"
    },
    {
        id:Math.random(),
        name:"Zapato Deportivo",
        src:"./img/products/outdoor2.jpeg",
        description:"Fila exercise 20",
        precio:"₡35,000",
        tag:"Outdoor"
    },
    {
        id:Math.random(),
        name:"Zapato Deportivo",
        src:"./img/products/outdoor3.png",
        description:"Addidas Pro Mujer",
        precio:"₡35,000",
        tag:"Outdoor"
    },
    {
        id:Math.random(),
        name:"Math de Yoga",
        src:"./img/products/yoga1.png",
        description:"Math the yoga báscio",
        precio:"₡5,000",
        tag:"Yoga"
    },
    {
        id:Math.random(),
        name:"Equipo de Yoga",
        src:"./img/products/yoga2.jpg",
        description:"Set de yoga con ladrillo",
        precio:"₡10,000",
        tag:"Yoga"
    },
];


const showGallery = (currarray) => {
    currarray = currarray.sort(() => Math.random() - 0.5)
    document.getElementById("card").innerHTML =""
    currarray.forEach(element => {
        document.getElementById("card").innerHTML +=`
        <div class="col-md-4 mt-3 ">
        <div class="cardTesting">
                <img  src="${element.src}" alt="Product Image" width="50px" height="320px">
                <div class="card-content">
                    <div class="card-title">${element.name}</div>
                    <div class="card-description">${element.description}</div>
                    <div class="card-price">${element.precio}</div>
                    <button class="customBtn">Adquirir Producto</button>
                </div>
         </div>
    </div>
        `
    });
}


document.getElementById("select").addEventListener("change",function(){
    console.log(document.getElementById("select").value);
    let filter = document.getElementById("select").value
    if(filter === "All"){
        showGallery(galleryarray);
    }else{
        let newData = galleryarray.filter((element) => element.tag === filter);        
        showGallery(newData);
    }
    
})


showGallery(galleryarray);