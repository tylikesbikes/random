//GIPHY API KEY
const api_key = '0hYw0mYPjGoSv4dTSf4If8rSo5qHvJWr';


console.log("Let's get this party started!");

$('#searchBtn').on('click', function(e) {
    e.preventDefault();
    const searchBox = $('#gifSearch');
    findGif(searchBox.val());    

    searchBox.val('');
    searchBox.focus();
})


$('#clearBtn').on('click', function(e) {
    e.preventDefault();
    $('#imageArea').html('');
})

async function findGif(tag) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {api_key,tag,rating:'g'}});
    if(res.data.data.length===0) {
        alert('No search results found');
        return;
    }
    addImage(res.data.data.images.original.url);

}

function addImage(url) {
    $('#imageArea').append(`<img src="${url}" max-height="300px" max-width="300px">`)
}

