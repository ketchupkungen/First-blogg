var bloggData;

$.getJSON("json/posts.json",function(data){
  bloggData = data.reverse(); //bloggData = data.reverse(); för att vända upp och ned

  $(start);
});

function start(){

    $('.leftmenu').on('click','a',function(){
    var me = $(this);
    visaBloggPost(me.data('bloggPost'));
  });

  bloggData.forEach(function(bloggPost){
    console.log(bloggPost);
    $('.leftmenu').append('<li role="presentation" class="myButtons"><a href=#'+ bloggPost.title + '>' + bloggPost.title + '</a></li>');
    $('.leftmenu a').last().data('bloggPost',bloggPost);
  });
}

function visaBloggPost(bloggPost){
  console.log(bloggPost);
}



var posts, template;

loadJSON();

function loadJSON(){
  $.getJSON('json/posts.json',function(data){
    posts = data.reverse();  //posts = data.reverse(); för att vända upp och ned
    loadTemplate();
  });
}

function loadTemplate(){
  $.get('template.html',function(data){
    template = data;

    showPosts();
  });
}

function showPosts(){

  posts.forEach(function(post){

    $('.main-content').append(template);
    
    $('.main-content a').last().attr('name',post.title);
    $('.main-content .prop-title').last().text(post.title);
    $('.main-content .prop-author').last().text("Author: "+ post.author);
    $('.main-content .prop-date').last().text("Date: "+post.date);
    if (post.image) {
      $('.main-content .prop-image').last().attr("src", post.image);

    } else {
      $('.main-content .prop-image').last().remove();      
    }
    $('.main-content .prop-content').last().text(post.content);
  });

  $('body').on('click','a', function() {
    var post = $(this).data("bloggPost");
    $('.selected').append(template);

    $('.selected a').last().attr('name', post);
    $('.selected .prop-title').last().text(post.title);
    $('.selected .prop-author').last().text("Author: "+ post.author);
    $('.selected .prop-date').last().text("Date: "+post.date);
    $('.selected .prop-image').last().attr("src", post.image);
    $('.selected .prop-content').last().text(post.content);

    $('.selected').show(500);
    $(this).css({'background-color':'#fff'});
    });

    $('body').on('click','.selected', function() {
      $('.selected .panel').remove();
      $(this).hide(500);
    }); 
}