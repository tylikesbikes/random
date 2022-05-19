/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */


/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */

async function searchShows(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.
  const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);

  const showKeys = Object.keys(data);

  const shows = [];


  
  for (key of showKeys) {
    let id = data[key].show.id;
    let name = data[key].show.name;
    let summary = data[key].show.summary;
    let image;
    try {
    image = (data[key].show.image.medium);
    } catch(e) {
      console.log('Some Images not found');
    image = 'https://media2.giphy.com/media/11gZBGuDnYwdpu/200w.webp?cid=ecf05e47i5r9iq33dzkmpl5n5z254ky4lvnwmlto6ytwzdyr&rid=200w.webp&ct=g';  
  }

  shows.push({id,name,summary,image});
  }

  return shows;

  
 
  }



/*  return [
    {
      id: 1767,
      name: "The Bletchley Circle",
      summary: "<p><b>The Bletchley Circle</b> follows the journey of four ordinary women with extraordinary skills that helped to end World War II.</p><p>Set in 1952, Susan, Millie, Lucy and Jean have returned to their normal lives, modestly setting aside the part they played in producing crucial intelligence, which helped the Allies to victory and shortened the war. When Susan discovers a hidden code behind an unsolved murder she is met by skepticism from the police. She quickly realises she can only begin to crack the murders and bring the culprit to justice with her former friends.</p>",
      image: "http://static.tvmaze.com/uploads/images/medium_portrait/147/369403.jpg"
    }
  ]*/




/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <img class ="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button type="button" class="episodesBtn btn btn-primary" id="${show.id}" data-toggle="modal" data-target="#episodesModal">
  Show Episode List
</button>
             <!-- <button class = "episodesBtn btn btn-primary" id="${show.id}">Show Episodes</button> -->
           </div>
         </div>
       </div>
      `);

    $showsList.append($item);
    $(`button#${show.id}`).on('click', function(event) {
      event.preventDefault();
      populateEpisodes(event.target.id);
    });
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  // TODO: get episodes from tvmaze
  //       you can get this by making GET request to
  //       http://api.tvmaze.com/shows/SHOW-ID-HERE/episodes

  // TODO: return array-of-episode-info, as described in docstring above
  const {data:episodeData} = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

  const episodeKeys = Object.keys(episodeData);

  const episodeList = [];

  for (ep of episodeKeys) {
    let {id, name, season, number} = episodeData[ep];
    episodeList.push({id,name,season,number});
  }

  return episodeList;

}

async function populateEpisodes(showID) {
  $('#episodes-area').show();

  const episodes= await getEpisodes(showID);

  const epList = $('#episodes-list');
  $('#episodes-list').html('');

  const episodeKeys = Object.keys(episodes);

  //populate Season ULs
  for (let key in episodeKeys) {
    let season = episodes[key].season;
    if ($(`ul #season${season}`).length===0) {
      epList.append(`<ol id="season${season}"><p>Season ${season}</ol>`);
    }
  }


  for (let key in episodeKeys) {
    let season = episodes[key].season;
    let seasonUL = $(`ul #season${season}`);
    seasonUL.append(`<li>${episodes[key].name}`) ;
  }

  console.log(epList);
}

