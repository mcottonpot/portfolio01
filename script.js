console.log("外部ファイル読み込み完了");

// ハンバーガー
$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {

    $('.hamburger-nav').toggleClass('is-open');
    $('.hamburger-menu').toggleClass('hamburger-menu--open');
  });
});

// MVのスライダー
window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true // 重なりを防ぎ、綺麗に透過させる
    },
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});

// スクロールでふわっと表示させる
// $(function(){
//   $(".inview").on("inview", function (event, isInView) {
//     if (isInView) {
//       $(this).stop().addClass("is-show");
//     } else {
//       $(this).stop().removeClass("is-show");
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  // 監視するオプション（画面に10%入ったら発動）
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  // クラスを付け外しする命令
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面に入ったら「is-show」を追加
        entry.target.classList.add("is-show");
      } else {
        // 画面から出たら「is-show」を消す（繰り返し動かしたい場合）
        entry.target.classList.remove("is-show");
      }
    });
  }, options);

  // 「inview」というクラスがついた要素をすべて監視対象にする
  const targets = document.querySelectorAll('.inview');
  targets.forEach(target => {
    observer.observe(target);
  });
});

// アコーディオン
$(function () {
  // 【重要】まず一度、すべての回答を非表示にする（念のため）
  $('.accordion-content').hide();

  // 1. 最初の項目だけ表示し、アイコンを「−」にするクラス（open）をつける
  $('.accordion-item:first-child .accordion-content').show();
  $('.accordion-item:first-child .question').addClass('open');

  // 2. 質問をクリックした時の処理
  $('.question').on('click', function () {
    const $answer = $(this).next('.accordion-content');

    // 他の開いている項目を閉じる
    $('.question').not(this).removeClass('open');
    $('.accordion-content').not($answer).slideUp();

    // クリックした項目の開閉を切り替える
    $(this).toggleClass('open');
    $answer.slideToggle();
  });
});