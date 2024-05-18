
fetch('https://coding-week-2024-api.onrender.com/api/data').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    document.querySelector('.main h1').innerHTML = data[0].headline;
    document.querySelector('.main img').setAttribute('src',data[0].image);
    document.querySelector('.main #cult').innerHTML = data[0].type;
    document.querySelector('.main .day').innerHTML = data[0].date;
    document.querySelector('.main .author').innerHTML = data[0].author;
    document.querySelector('.sec h3').innerHTML = data[2].headline;
    document.querySelector('.sec img').setAttribute('src',data[2].image);
    document.querySelector('.sec #cult').innerHTML = data[2].type;
    document.querySelector('.sec .day').innerHTML = data[2].date;
    document.querySelector('.sec .author').innerHTML = data[2].author;
    document.querySelector('.add .third h4').innerHTML = data[1].headline;
    document.querySelector('.add .third img').setAttribute('src',data[1].image);
    document.querySelector('.add .third #cult').innerHTML = data[1].type;
    document.querySelector('.add .third .day').innerHTML = data[1].date;
    document.querySelector('.add .third .author').innerHTML = data[1].author;
    document.querySelector('.fourth h4').innerHTML = data[6].headline;
    document.querySelector('.fourth img').setAttribute('src',data[6].image);
    document.querySelector('.fourth #cult').innerHTML = data[6].type;
    document.querySelector('.fourth .day').innerHTML = data[6].date;
    document.querySelector('.fourth .author').innerHTML = data[6].author;
    document.querySelector('.a').innerHTML = data[4].headline;
    document.querySelector('.b').setAttribute('src',data[4].image);
    document.querySelector('.c').innerHTML = data[4].date;
    document.querySelector('.d').innerHTML = data[5].headline;
    document.querySelector('.e').setAttribute('src',data[5].image);
    document.querySelector('.f').innerHTML = data[5].date;
    document.querySelector('.g').innerHTML = data[3].headline;
    document.querySelector('.h').setAttribute('src',data[3].image);
    document.querySelector('.i').innerHTML = data[3].date;
    document.querySelector('.j').innerHTML = data[7].headline;
    document.querySelector('.k').setAttribute('src',data[7].image);
    document.querySelector('.l').innerHTML = data[7].date;
    document.querySelector('.m').innerHTML = data[8].headline;
    document.querySelector('.n').setAttribute('src',data[8].image);
    document.querySelector('.o').innerHTML = data[8].date;
    document.querySelector('.p').innerHTML = data[9].headline;
    document.querySelector('.q').setAttribute('src',data[9].image);
    document.querySelector('.r').innerHTML = data[9].date;



}).catch((err) => {
    console.log('rejected', err);
});
