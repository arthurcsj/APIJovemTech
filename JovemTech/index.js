var express = require ("express");
var app = express();

app.get('/home',function(req,res){
  res.send('paguina inicial')
});


app.get('/jovemtech/listaalunos',function(req,res){
  res.send('Página para listar alunos matriculados')
});


app.get('/jovemtech/professores',function(req,res){
  res.send('Página para listar professores')
});


app.get('/jovemtech/cursos',function(req,res){
  res.send('Página informar cursos ofertados')
});


app.get('/jovemtech/inscricao',function(req,res){
  res.send('Página de inscrição')
});


app.get('/jovemtech/comentarios',function(req,res){
  res.send('Página para deixar seu comentário')
});



app.listen(8081,function(){
    console.log("servidor rondando na porta http://localhost:8081/");

});