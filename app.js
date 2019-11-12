$(document).ready(function () {

  let url="https://newsapi.org/v2/everything?q=vacina&pagesize=8&apiKey=1b4daadecf204f77a36feec53d87e539";

  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
    },

    complete: function () {
      $(".progress").hide();
    },

    success: function (newsdata) {
      let output = "";
      let latestNews = newsdata.articles;
      for (var i in latestNews) {
        output += `
        <center>
       <div class="col-sm">
        <div class="row align-items-start">
        
        <div class="card" style="width: 50rem"; style="padding-left: 80px;">
        <img  class="card-img-top" src="${latestNews[i].urlToImage}" alt="${latestNews[i].title}">
        <div class="card-body">
        <h6 class="card-text">Titulo: <a href="${latestNews[i].url}" title="${latestNews[i].title}">${latestNews[i].title}</a></h6>         
        
        <p><b>Fonte</b>: ${latestNews[i].source.name} </p>
        <date-util format="dd/MM/yyyy"><b>Publicado</date-util>: ${latestNews[i].publishedAt} </p>
        <p><b>Descrição</b>: ${latestNews[i].description}</p>
        <a href="${latestNews[i].url}" target="_self" class="btn btn-info btn-lg">Ir para Noticia</a>
        </div>
        
      </div>
      
        </div>
        <span class="p-5 mb-5"></span>

        </div>
      
        `;
      }

      if (output !== "") {
        $("#newsResults").html(output);
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Some error occured</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});