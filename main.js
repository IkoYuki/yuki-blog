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

});

$(function ($) {

  let $years      = $('.year-select').children(),
      $yearLists  = $years.children('li'),
      $selectYear = $yearLists.children('a'),
      $months     = $('.monthly-archives').children();

  // 年リストのアイテム1つ分と全部表示しているときの高さ
  let singleHeight = $yearLists.height(),
      totalHeight  = singleHeight * $yearLists.length;

  // 年リストの最初に active というクラス名をつける
  $yearLists.eq(0).addClass('active');

  // 年リストと年別アーカイブの最初以外を隠す
  $yearLists.filter(':gt(0)').hide();
  $months.filter(':gt(0)').hide();

  // 年リストの高さをアイテム1つ分に
  $years.css('height', singleHeight);

  // 年リストにホバーしたときの動作
  $years.hover(
    function () {
      // 年リストを全表示
      $yearLists.show();
      // 年リストの高さを全表示分まで変更
      $(this).stop().animate({'height': totalHeight});
    },
    function () {
      // 年リストで active というクラスがないものは非表示に
      $yearLists.filter(':not(.active)').hide();
      // 年リストの高さをアイテム1つ分に変更
      $(this).stop().animate({'height': singleHeight});
    }
  );

  // 年リストのアイテムをクリックしたときの動作
  $selectYear.click(function (e) {

    // リンクを無効にする
    e.preventDefault();

    // 表示中のアイテムだったら何もしない
    if($(this).parent().hasClass('active')) return;

    // クリックした a の親 li のインデックス番号
    var target = $(this).parent().index();

    // active というクラス名を全体から削除
    $yearLists.removeClass('active');
    // クリックした a の親 li に active というクラス名をつける
    $(this).parent().addClass('active');

    // 年別アーカイブの表示しいている部分をフェードアウト
    $months.filter(':not(:hidden)').fadeOut();
    // 年リストと同じインデックス番号の年別アーカイブを表示
    $months.eq(target).fadeIn();
  });

});;



$(function(){
    if($('#year2017').children().hasClass('Nov')) {
        $('p').text('見つかりました');
    } else {
        $('p').text('見つかりませんでした');
    }
});

function addNumber(months){ // 要素の文字色を変更する処理です。
    var months = document.getElementById("months"); // 要素を取得します。要素が取得できなかった場合『null』が返ってきます。
    if("months" === "nov") 
    return months = (+1);
}



// let $datesUrl = 'https://raw.githubusercontent.com/IkoYuki/yuki-blog/master/posts.json';
// let $dates = $('#postDates');
 
// $.get(datesUrl)
//       .done(function(data-two) {
// .done(function(data-two) {
//         console.log('data-two:', data-two);
//         let postDates = JSON.parse(data-two);
//         for (let date of postDates) {
// if(Month === 11){
//   return 
// }
//   );
   
  // //function tempConvert(temp, tempType) {

  //   if (tempType === "F"){
  //       return  Math.floor((temp - 32) / 1.8);
  //   } else if(tempType === "C") {
  //       return  Math.floor(temp*9/5+32);
  //   }