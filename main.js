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
          
          let $months = $('<h6>');
          $months.text(post.months);
          
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

});

$(function ($) {

  let $years      = $('.year-select').children(),
      $yearLists  = $years.children('li'),
      $selectYear = $yearLists.children('a'),
      $months     = $('.monthly-archives').children();

  // set the height of the archive buttons (single - total)
  let singleHeight = $yearLists.height(),
      totalHeight  = singleHeight * $yearLists.length;

  // add class "active" to the first year button
  $yearLists.eq(0).addClass('active');

  //hide all buttons except the first Year and Month
  $yearLists.filter(':gt(0)').hide();
  $months.filter(':gt(0)').hide();

  //set the height of Year button
  $years.css('height', singleHeight);

  // WHen hvering on Year buttn
  $years.hover(
    function () {
      // Show year list
      $yearLists.show();
      // Expand the height of year button 
      $(this).stop().animate({'height': totalHeight});
    },
    function () {
      // hide year buttons that aren't active
      $yearLists.filter(':not(.active)').hide();
      // stop expanding the height of year buttons
      $(this).stop().animate({'height': singleHeight});
    }
  );

  // events when clicking year buttons
  $selectYear.click(function (e) {

    // deactivate the link
    e.preventDefault();

    // if the button was already selected do nothing
    if($(this).parent().hasClass('active')) return;

    // the target has index number of clicked a's parent li 
    let target = $(this).parent().index();

    // remove the class active from the whole list
    $yearLists.removeClass('active');
    //add class "active" to the clicked a's parent li
   $(this).parent().addClass('active');

    // fadeout the year button that is showing
    $months.filter(':not(:hidden)').fadeOut();
    // show months that has the same index with the selected year
    $months.eq(target).fadeIn();
  });

//want to show the article titles of the month.
//when clicked the month
  $selectMonths.click(function (e) {

   
    e.preventDefault();

    if($(this).parent().hasClass('active')) return;

      var target = $(this).parent().index();

    $monthLists.removeClass('active');
  
      $(this).parent().addClass('active');

    $months.eq(target).fadeIn();
  });
  
  
   $selectTitles.click(function (e) {

   
    e.preventDefault();

    if($(this).parent().hasClass('active')) return;

      var target = $(this).parent().index();

    $titleLists.removeClass('active');
  
      $(this).parent().addClass('active');
       
       let months = $(this).attr($months);
    
        if(typeof months == 'Nov'){
        
            console.log($title);
             $post.append($title);
        
        }else {
            console.log('');
        }
  });

});



// $(function(){
//     if($('#year2017').children().hasClass('Nov')) {
//         $('p').text('見つかりました');
//     } else {
//         $('p').text('見つかりませんでした');
//     }
// });


//   $("#months").on("click", function() {


//     function selectMonth() {
//     let isSelected = $(this).hasClass("monthly-archives"); // photoContainerue or false;
//     if (isSelected) {
//       $(this).append("title");
//     }
//     else {
//       $(this).addClass("selected");
//     }

//     }



// // let $datesUrl = 'https://raw.githubusercontent.com/IkoYuki/yuki-blog/master/posts.json';
// // let $dates = $('#postDates');
 
// // $.get(datesUrl)
// //       .done(function(data-two) {
// // .done(function(data-two) {
// //         console.log('data-two:', data-two);
// //         let postDates = JSON.parse(data-two);
// //         for (let date of postDates) {
// // if(Month === 11){
// //   return 
// // }
// //   );
   
//   // //function tempConvert(temp, tempType) {

  //   if (tempType === "F"){
  //       return  Math.floor((temp - 32) / 1.8);
  //   } else if(tempType === "C") {
  //       return  Math.floor(temp*9/5+32);
  //   }