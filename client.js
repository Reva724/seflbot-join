function JOIN(invite, token) {
request.post(`https://discordapp.com/api/invites/${invite}`, {
  headers: {
      "Authorization": token
  }
}, (error, response, body) => {
   if(error) {
       console.log(error);
       return;
   }
   console.log(body, response.statusMessage, response.statusCode);
})
}
