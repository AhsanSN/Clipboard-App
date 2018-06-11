var commonHeader = { 'Content-Type': 'html' };
const render = require('./render');

function home(req, res)
{
	res.writeHead(200, commonHeader);
	//home page
	if (req.url === "/") 
	{
		render.view("home", {homepage: 1}, res);
		res.write("This is our home page");
		res.end();
	}
	else{
		//some response
		res.write("This is our the requested page");
		req.on("data", function (postBody) {
        var query = querystring.parse(postBody.toString());
        res.writeHead(303, { "location": "/" + query.message });
        res.end();
      	})
	}
}

module.exports.home = home;
