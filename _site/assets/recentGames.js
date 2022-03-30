const coverArt = document.querySelectorAll(".recent-game-mention");

console.log(coverArt)

let coverFunc = '/.netlify/functions/getGameCover?igdbid=';

coverArt.forEach(
    function(node) {
        coverUrl = coverFunc.concat(node.getAttribute("data-recent-mention-gameID"));
        console.log(coverUrl)

            loadImg(coverUrl).then(
                (data) => {
                     node.src = data
                    })
        }
    );


  async function loadImg(url) {
        const response = await fetch(url).then(
            response => response.json()
            )
            thisResponse = response[0]
            console.log(thisResponse)

            let coverID = thisResponse.image_id
            let coverUrl1 = "https://images.igdb.com/igdb/image/upload/t_cover_big/"
            let coverUrl2= ".png"

            return coverUrl1.concat(coverID).concat(coverUrl2)

      }