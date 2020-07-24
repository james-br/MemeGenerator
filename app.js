document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");
    const result = document.querySelector(".result");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        
        const img = document.querySelector("#img")
        const top = document.querySelector("#top");
        const bot = document.querySelector("#bot");
        const newDiv = document.createElement("div");
        newDiv.className = "holder";

        console.log(img.value);

        const topW = document.createElement("div");
        topW.className = "topW";
        topW.innerText = top.value;

        const x = document.createElement("div");
        x.className = "hover";
        x.innerText = "Close";
        x.addEventListener("click", function(event){
            event.target.parentElement.remove();
        })
       

        const botW = document.createElement("div");
        botW.className = "botW";
        botW.innerText = bot.value;
        let linky = new URL(img.value);
        newDiv.style.backgroundImage = `url("${linky}")`;
        
    

        newDiv.append(topW);
        newDiv.append(x);
        newDiv.append(botW);
        result.append(newDiv);
        form.reset();

    });
    result.addEventListener("onClick", function(event){

    });
});
