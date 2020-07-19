window.addEventListener('load', () => { //Once this window loads, this function comes up

    let item1 = document.getElementById("item1text");
    let item2 = document.getElementById("item2text");
    let item3 = document.getElementById("item3text");
    let item4 = document.getElementById("item4text");
    let item5 = document.getElementById("item5text");
    let item6 = document.getElementById("item6text");
    let item7 = document.getElementById("item7text");
    let item8 = document.getElementById("item8text");

    //let proxy = "https://cors-anywhere.herokuapp.com/";
    let api = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=86b9ab1fbd724b78b9d96f466433e4a6';
    

    fetch (api)
    .then (response => {
        return response.json();
    })
    .then (data => {
        console.log(data);
        document.getElementById("item1anchor").textContent = data.articles[0].title;
        document.getElementById("item1anchor").href = data.articles[0].url;

        document.getElementById("item2anchor").textContent = data.articles[1].title;
        document.getElementById("item2anchor").href = data.articles[1].url;

        document.getElementById("item3anchor").textContent = data.articles[2].title;
        document.getElementById("item3anchor").href = data.articles[2].url;

        document.getElementById("item4anchor").textContent = data.articles[3].title;
        document.getElementById("item4anchor").href = data.articles[3].url;

        document.getElementById("item5anchor").textContent = data.articles[4].title;
        document.getElementById("item5anchor").href = data.articles[4].url;

        document.getElementById("item6anchor").textContent = data.articles[5].title;
        document.getElementById("item6anchor").href = data.articles[5].url;

        document.getElementById("item7anchor").textContent = data.articles[6].title;
        document.getElementById("item7anchor").href = data.articles[6].url;

        document.getElementById("item8anchor").textContent = data.articles[7].title;
        document.getElementById("item8anchor").href = data.articles[7].url;

        document.getElementById("item9anchor").textContent = data.articles[8].title;
        document.getElementById("item9anchor").href = data.articles[8].url;

        document.getElementById("item10anchor").textContent = data.articles[9].title;
        document.getElementById("item10anchor").href = data.articles[9].url;

        document.getElementById("item11anchor").textContent = data.articles[10].title;
        document.getElementById("item11anchor").href = data.articles[10].url;

        document.getElementById("item12anchor").textContent = data.articles[11].title;
        document.getElementById("item12anchor").href = data.articles[11].url;

        document.getElementById("item13anchor").textContent = data.articles[12].title;
        document.getElementById("item13anchor").href = data.articles[12].url;

        document.getElementById("item14anchor").textContent = data.articles[13].title;
        document.getElementById("item14anchor").href = data.articles[13].url;

        document.getElementById("item15anchor").textContent = data.articles[14].title;
        document.getElementById("item15anchor").href = data.articles[14].url;

        document.getElementById("item16anchor").textContent = data.articles[15].title;
        document.getElementById("item16anchor").href = data.articles[15].url;

        document.getElementById("item17anchor").textContent = data.articles[16].title;
        document.getElementById("item17anchor").href = data.articles[16].url;

        document.getElementById("item18anchor").textContent = data.articles[17].title;
        document.getElementById("item18anchor").href = data.articles[17].url;

        document.getElementById("item19anchor").textContent = data.articles[18].title;
        document.getElementById("item19anchor").href = data.articles[18].url;

        document.getElementById("item20anchor").textContent = data.articles[19].title;
        document.getElementById("item20anchor").href = data.articles[19].url;
    })

})


