let url="https://api.coincap.io/v2/assets"
let response =fetch(url)
let card = document.querySelector(".card-container")


response.then((value)=>{
    return value.json()
}).then((val)=>{
    let data =val.data
    insertHTML=""
    data.map((item)=>{
        // console.log(item.name);
        insertHTML +=`
        <div class="container">
        <div class="img">
            <div class="nameContainer">
                <h3>${item.name}</h3>
            </div>
            <div class="img-Container">
                <div class="imgContainer">
                    <img src="https://coinicons-api.vercel.app/api/icon/${item.symbol.toLowerCase() }" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="textsContainer">
            <h1>$${Math.round(item.priceUsd*100)/100}</h1>
            <h3>Price</h3>
        </div>
        <div class="textsContainer">
            <h1>$${Math.floor(item.volumeUsd24Hr)*10}</h1>
            <h3>volume 24hr</h3>
        </div>
        <div class="buttonsContainer">
            <div class="leftButton">
                <a href="${item.explorer}" target="_blank"><button class="btn">Explore</button></a>
            </div>
            <div class="rightButton">
                <a href="${item.explorer}" target="_blank"><button class="btn">Follow Me</button></a>
            </div>
        </div>
    </div>
        `
    })
    card.innerHTML=insertHTML
})