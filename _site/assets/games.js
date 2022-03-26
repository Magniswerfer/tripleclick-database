console.log("I'm running!");


(async () => {
    const response = await fetch("https://api.igdb.com/v4/games", {
        method: 'POST',
        headers: {
        'Client-ID': 'r3d8id87llzz9sxqqgi0385jaet59e',
        'Authorization': 'Bearer rf390w4ci6ftilogrj8baiyyyxyxlz'
        },
        body: `fields name; where id = (8,9,11);`,
    });

    response.json().then( data => {
        console.log(data);
    });
})();
