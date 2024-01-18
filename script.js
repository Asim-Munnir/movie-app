const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    const moiveBox = document.querySelector("#movie-box")

    const getMovies = async(api)=>{
    const response = await fetch(api)
    const data = await response.json();
    console.log(data.results)
  showMovies(data.results)
    }
    getMovies(APIURL)


    const showMovies = (data) =>{
 data.forEach((item)=>{
const box = document.createElement("div")
box.classList.add("box")
box.innerHTML=`
<img src="${IMGPATH+item.poster_path}" alt="" />
<div class="overlay">
<div class="title">
<h2>${item.title}</h2>
<span>9.5</span>
</div>
<h3>${item.overview}:</h3>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum, consequatur ex exercitationem 
ratione nihil explicabo labore aliquid quis, saepe ipsam assumenda id neque quidem.
</p>
</div>
`;
moiveBox.appendChild(box)
 })
    }