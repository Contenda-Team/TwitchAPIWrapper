const axios = require('axios')

function getAuth(client_id, redirect_uri, scope_entities){
    var scope = scope_entities[0];
    for(var i = 1; i < scope_entities.length; i++){
        str = str.concat(encodeURIComponent(" ") + scope_entities[i]);
    }
    console.log("scope: " + scope);
    
    return `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;
}

async function get_tokens(twitch_client, twitch_secret, code, redirect, body){
    const raw = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${twitch_client}&client_secret=${twitch_secret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect}`, body);
		//console.log('twitch token resp: ', raw.data);
    return raw;
}

async function get_user_id(token, client_id){
    const raw_user_id = await axios({
        url: 'https://api.twitch.tv/helix/users?', 
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Client-Id': client_id,
        }
    });
    return raw_user_id;
}

async function get_user_subscription(channel_id, user_id, token, client_id){
    const raw_response = await axios({
        url: `https://api.twitch.tv/helix/subscriptions/user?broadcaster_id=${channel_id}&user_id=${user_id}`,
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Client-Id': `${client_id}`,
        }
    })
    return raw_response;
}

module.exports = {
	getAuth,
    get_tokens,
    get_user_id,
	get_user_subscription,

}