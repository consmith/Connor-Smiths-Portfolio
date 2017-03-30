/*Home Page Sections */

$('#AboutMePlaceholder').click(function(){
  $('#AboutMePlaceholder').fadeOut("normal", function(){
    $('#AboutMe').fadeIn("normal");
  });
})

$('#AboutMe').click(function(){
  $('#AboutMe').fadeOut("normal", function(){
    $('#AboutMePlaceholder').fadeIn("normal");
  });
})

$('#ContactPlaceholder').click(function(){
  $('#ContactPlaceholder').fadeOut("normal", function(){
    $('#Contact').fadeIn("normal");
  });
})

/* Allows links to be clicked without fading back out */

hover = false;

$('#ContactLink').hover(function(){
  hover = true;
});
$('#ContactLink').mouseleave(function(){
  hover = false;
});


$('#Contact').click(function(){

  if (hover == false) {
    $('#Contact').fadeOut("normal", function(){
      $('#ContactPlaceholder').fadeIn("normal");
    });
  }
})

/*
  function OpenSection(oldsection,newsection) {
    document.getElementById(oldsection).style.display = 'none';
    document.getElementById(newsection).style.display = 'block';

    document.getElementById(oldsection).style.transition = '2s';
  } */


/*Projects*/

$('#Broken_Link_one').click(function(){
  $('#Broken_Link_one').html('This link does not exist yet :(');
});


/*

$('#Top').hover(function(){
  var original = $('#Title').html();
  $('#Title').html('Connor Smith');
}, function(){
  $('#Title').html(original);
})

*/

/*
function SecretTitleFunction (pagename) {
  if (secret === false){
    secret = true;
    document.getElementById('Title').innerHTML ='Connor Smith' ;
  }
  else {
    secret = false;
    document.getElementById('Title').innerHTML = pagename;
  }
}
*/
