var express 	= require('express');
var app   		= express();
var morgan  	= require('morgan');
var bodyParser 	= require('body-parser');
var cookieParser= require('cookie-parser');
var port 		= process.env.PORT || 3000;
var cors 		= require('cors');
var http 		= require('http');
var server 		= http.createServer(app);

app.use(express.static('./public'));
app.use(cors());

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.set('view engine','ejs');


app.get('/',function(req,res){
	res.render('index.ejs')
});

server.listen(port);
console.log('ContentHolmes app running on port ' + port);
