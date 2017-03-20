var http= require('http');
var o=0;
var n=0;
var vote= function(req, rep){
	if(req.url=='/'){
		rep.write('<h1>Bienvenue sur le serveur de vote.</h1>');
		rep.write('<h1>Veuillez votez:</h1>');
		rep.write('<a href="oui">oui</a> ou ');
		rep.write('<a href="non">non</a><br/>');
		rep.write('<a href="combien">Resultat</a>');
	}
	else if(req.url=='/oui'){
		o++;
		rep.write('<h1>Felicitation vous venez de votez oui.</h1>');
		rep.write('<a href="/">Acceuil</a>');
	}
	else if(req.url=='/non'){
		n++;
		rep.write('<h1>Felicitation vous venez de voter non.</h1>');
		rep.write('<a href="/">Acceuil</a>');
	}
	else if(req.url=='/combien'){
		rep.write('<h1>On comptabilise: '+o+ ' oui et '+n+' non.</h1>');
		rep.write('<a href="/">Acceuil</a>');
	}
	else {
		rep.write('<h1>Bienvenue sur le serveur de vote.</h1>');
		rep.write('<h1>Veuillez votez:</h1>');
		rep.write('<a href="oui">oui</a> ou ');
		rep.write('<a href="non">non</a><br/>');
		rep.write('<a href="combien">Resultat</a>');
	}
	rep.end();
};

console.log('Server tourne');

http.createServer(vote).listen(8888);