"use strict";

$(document).ready(function() {

  let postsUrl = 'https://raw.githubusercontent.com/IkoYuki/yuki-blog/master/posts.json';
  let $postsDiv = $('#posts');

  $.get(postsUrl)
      .done(function(data) {
        console.log('data:', data);
        let posts = JSON.parse(data);
        for (let post of posts) {
          let $post = $('<div>');
          
          let $title = $('<h2>');
          $title.text(post.title);
          $post.append($title);

          let $content = $('<p>');
          $content.text(post.content);
          $post.append($content);

          let $picture = $('<img>');
          $picture.attr("src",post.picture);
          $post.append($picture);
          
// //IkoYuki [4:20 PM] 
// $pictureContainer.atphotoContainer("src", $("#PhotoURL").val());
//   let $row = $("#manyPictures");
//   $row.append($pictureContainer);
//   $("#PhotoURL").val("");


          $postsDiv.append($post);
        }
      })
      .fail(function(err) {
        console.log('There was an error fetching posts:', err);
      });

}


 let $datesUrl = 'https://raw.githubusercontent.com/IkoYuki/yuki-blog/master/posts.json';
 let $dates = $('#postDates');
 
 $.get(datesUrl)
      .done(function(data-two) {
 .done(function(data-two) {
        console.log('data-two:', data-two);
        let postDates = JSON.parse(data-two);
        for (let date of postDates) {
if(Month === 11){
  return 
}
   );
   
  // //function tempConvert(temp, tempType) {

  //   if (tempType === "F"){
  //       return  Math.floor((temp - 32) / 1.8);
  //   } else if(tempType === "C") {
  //       return  Math.floor(temp*9/5+32);
  //   }
}

