const axios = require('axios');
const sprintf = require('sprintf-js').sprintf;

exports.handler = async function (event) {

    let igdbid = event.queryStringParameters.igdbid;
    let someString = sprintf('fields image_id; where game = %i;', igdbid);

    const api = 'https://api.igdb.com/v4/covers'

    const response = await axios({
            method: 'post',
            url: api,
            headers: {"Client-ID": "r3d8id87llzz9sxqqgi0385jaet59e",
            "Authorization" : "Bearer 0zhmh87qo9rpkhy6auz6eq6jb9qmmt"}, 
            data: someString
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
}