var express = require ("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/home',function(req,res){
  res.sendFile(__dirname + '/public/html/home.html');
});


app.get('/jovemtech/listaalunos',function(req,res){
  res.sendFile(__dirname + '/public/html/alunos.html');
});


app.get('/jovemtech/professores',function(req,res){
  res.sendFile(__dirname + '/public/html/porfessores.html');
});


app.get('/jovemtech/cursos',function(req,res){
  res.sendFile(__dirname + '/public/html/cursos.html');
});


app.get('/jovemtech/inscricao',function(req,res){
  res.sendFile(__dirname + '/public/html/inscricao.html');
});


app.get('/jovemtech/comentarios',function(req,res){
  res.sendFile(__dirname + '/public/html/comentarios.html');
});



app.listen(8080,function(){
    console.log("servidor rondando na porta http://localhost:8080/home");

});