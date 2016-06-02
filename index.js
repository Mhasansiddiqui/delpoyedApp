var express = require('express');
var bodyParser =require('body-parser');
var mail = require('./mservice');
var progressive = require('./pservice');


var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');




var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set("port", (process.env.PORT  || 5000));


app.post('/sendMail',function(req,res){
   /*console.log(req.body.endpoint);
   console.log();*/

/*---------- sending mail start-----------*/


var SCOPES = [
    'https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send'
];

var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs-quickstart.json';

// Load client secrets from a local file.
   var senderemail =   req.body.user.email; 
   var sendername =   req.body.user.name;
   var senderphone =   req.body.user.phone;
   var endpoint = req.body.endpoint;

var name = makeBody(['hasancomsoft@gmail.com'], senderemail , sendername , senderphone);

var readFileAndSendEmail = function(){
  var name ="hasan siddiqui" ;
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
  if (err) {
    console.log('Error loading client secret file: ' + err);
    return;
  }
  
   authorize(JSON.parse(content), sendMessage , name);
  });
}
          readFileAndSendEmail();
function authorize(credentials, callback) {
  var clientSecret = credentials.installed.client_secret;
  var clientId = credentials.installed.client_id;
  var redirectUrl = credentials.installed.redirect_uris[0];
  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
         callback(oauth2Client , name);
    }
  });
}

function getNewToken(oauth2Client, callback) {
  var authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

function makeBody(to, from, subject, message) {
    var str = ["Content-Type: text/plain; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", to, "\n",
        "from: ", from, "\n",
        "subject: ", subject, "\n\n",
        message
    ].join('');

    var encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
        return encodedMail;
}

function sendMessage(auth, a) {
      
    var raw = a;
    var gmail = google.gmail('v1');
    gmail.users.messages.send({
        auth: auth,
        userId: 'me',
        resource: {
            raw: raw
        }
    }, function(err, response) {
       console.log(response);
    });
}


/*---------- sending mail end-----------*/



  var gcm = require('node-gcm');
    var message = new gcm.Message({
        data: { key1: 'msg1' }
    });    
  // Set up the sender with you API key, prepare your recipients' registration tokens.
    var sender = new gcm.Sender('AIzaSyDOFS42pZs4-iCI3SqsaJRbYBi6rgdwNhM');
    var regTokens = [endpoint.toString()];

    sender.send(message, { registrationTokens: regTokens }, function (err, response) {
        if(err) console.error(err);
        else    console.log(response);
   });












})



app.listen(app.get("port"), function () {
    console.log('running server on 5000');
});