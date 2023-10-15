
let galleryarray = [
    {
        id:Math.random(),
        name:"Guantes de boxeo",
        src:"./img/products/boxing2.jpeg",
        tag:"Boxeo"
    },
    {
        id:Math.random(),
        name:"Guantes de boxeo",
        src:"./img/products/boxing3.jpeg",
        tag:"Boxeo"
    },
    {
        id:Math.random(),
        name:"Muñequeras",
        src:"./img/products/crossfit1.jpeg",
        tag:"CrossFit"
    },
    {
        id:Math.random(),
        name:"Muñequeras",
        src:"./img/products/crossfit2.jpeg",
        tag:"CrossFit"

    },
    {
        id:Math.random(),
        name:"Muñequeras",
        src:"./img/products/crossfit3.jpeg",
        tag:"CrossFit"
    },
    {
        id:Math.random(),
        name:"Zapato Deportivo",
        src:"./img/products/outdoor1.png",
        tag:"Outdoor"
    },
    {
        id:Math.random(),
        name:"Zapato Deportivo",
        src:"./img/products/outdoor2.jpeg",
        tag:"Outdoor"
    },
    {
        id:Math.random(),
        name:"Zapato Deportivo",
        src:"./img/products/outdoor3.png",
        tag:"Outdoor"
    },
    {
        id:Math.random(),
        name:"Math de Yoga",
        src:"./img/products/yoga1.png",
        tag:"Yoga"
    },
    {
        id:Math.random(),
        name:"Equipo de Yoga",
        src:"./img/products/yoga2.jpg",
        tag:"Yoga"
    },
];


const showGallery = (currarray) => {
    currarray = currarray.sort(() => Math.random() - 0.5)
    document.getElementById("card").innerHTML =""
    currarray.forEach(element => {
        document.getElementById("card").innerHTML +=`
            <div class="col-md-4 mt-3">
                <div class="card p-3 ps-5 pe-5">
                    <h4 class="text-capitalize text-center">
                        ${element.name}
                    </h4>              
                    <div class="inner">
                        <img src="${element.src}" width="100%" height="320px"/>
                    </div>
                    <button style="margin-top:10px" class="btn btn-primary w-100 mx-auto">Comprar</button>
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