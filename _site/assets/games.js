const critScore = document.getElementById('crit-score')
const numCrits = document.getElementById('num-crits')
const gameSummary = document.getElementById('summary-text')
const subTitle = document.querySelector(".sub-title")

const coverArt = document.querySelector(".cover-art");

let gameFunc = '/.netlify/functions/getGameInfo?igdbid=';
gameUrl = gameFunc.concat(igdbID);

let coverFunc = '/.netlify/functions/getGameCover?igdbid=';
coverUrl = coverFunc.concat(igdbID);

    async function loadGameFacts() {
        const response = await fetch(gameUrl).then(
            response => response.json()
        )
        
        thisResponse = response[0]
        numCrits.innerText = thisResponse.aggregated_rating_count
        critScore.innerText = Math.round(thisResponse.aggregated_rating)
        gameSummary.innerText = thisResponse.summary
        subTitle.innerText = "(" + new Date(thisResponse.first_release_date*1000).getFullYear() + ")"
      }

      async function loadImg() {
        const response = await fetch(coverUrl).then(
            response => response.json()
            )
            thisResponse = response[0]
            let coverID = thisResponse.image_id
            let coverUrl1 = "https://images.igdb.com/igdb/image/upload/t_cover_big/"
            let coverUrl2= ".png"

            coverFull = coverUrl1.concat(coverID).concat(coverUrl2);
            coverArt.src = coverFull;

            const content = document.querySelectorAll(".hidden");
            content.forEach(element => {
                element.classList.remove("hidden");
            });
      }
      
      loadGameFacts();
      loadImg();
