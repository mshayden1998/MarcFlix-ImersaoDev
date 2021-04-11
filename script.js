var movieList = [
    {
        "title": "Beverly Hills Cop",
        "title_pt-br": "Um Tira da Pesada",
        "image": "https://images03.military.com/sites/default/files/2020-01/bhcop1500.jpg",
        "cover": "https://i.pinimg.com/736x/ac/6e/c1/ac6ec14465aa151bd0bc27477bcdda40.jpg"
    },
    {
        "title": "Inception",
        "title_pt-br": "A Origem",
        "image": "https://www.thegoldentake.com/wp-content/uploads/Inception-Photo-by-Stephen-Vaughan-%C2%A9-2010-Warner-Bros.-Entertainment-Inc..jpg",
        "cover": "https://images-na.ssl-images-amazon.com/images/I/611ixoDpRLL._AC_.jpg"
    },
    {
        "title": "Nacho Libre",
        "title_pt-br": null,
        "image": "http://s2.glbimg.com/S-huszomqV-cdSZIam61hC9EYDY=/s.glbimg.com/og/rg/f/original/2015/11/06/nacho.jpg"
    },
    {
        "title": "School of Rock",
        "title_pt-br": "Escola de Rock",
        "image": "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV1Evu5pTDfJ_hjN2DepQx_8pHFfJZgT7tqCfwrOmQAUp3Kdzemz0Ux_zzZqNgbaZLRQLhEUaRz4LgemwHOGKX-sfbxf.jpg?r=4da"
    }
]

var catalogue = document.getElementById('catalogue')

function loadCatalogue() {
    for (let i = 0; i < movieList.length; i++) {
        catalogue.innerHTML += '<div class="film_card"><img src=' + movieList[i].image + '><span class="film_title">' + movieList[i].title + '</span><span class="film_title pt-br">' + movieList[i]["title_pt-br"] + '</span></div>'
    }
}

loadCatalogue()

function addFilm() {
    var title = prompt("Title of it")
    var question = confirm("It has a PT-BR title?")
    if (question == false) {
        title_ptbr = title;
    } else {
        var title_ptbr = prompt("The PT-BR title of it")
    }
    var image = prompt("A image to represent the title")

    movieList.push( {
        "title": title,
        "title_pt-br": title_ptbr,
        "image": image
    } )

    var lastElement = movieList[movieList.length - 1]
    console.log(lastElement.title)
    catalogue.innerHTML += '<div class="film_card"><img src=' + lastElement.image + '><span class="film_title">' + lastElement.title + '</span><span class="film_title pt-br">' + lastElement["title_pt-br"] + '</span></div>'
}