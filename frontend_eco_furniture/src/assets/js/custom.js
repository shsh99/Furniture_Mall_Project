import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.module";


/* eslint-disable */
export default function initCustom() {
  
  (function () {
    "use strict";

    var tinyslider = function () {
      var el = document.querySelectorAll(".testimonial-slider");

      if (el.length > 0) {
        var slider = tns({
          container: ".testimonial-slider",
          items: 1,
          axis: "horizontal",
          controlsContainer: "#testimonial-nav",
          swipeAngle: false,
          speed: 700,
          nav: true,
          controls: true,
          autoplay: true,
          autoplayHoverPause: true,
          autoplayTimeout: 3500,
          autoplayButtonOutput: false,
        });
      }
    };
    tinyslider();

    $(document).ready(function () {
      var owl = $(".owl-carousel");
      owl.owlCarousel({
        items: 3, // 한번에 보여지는 이미지 수
        margin: 10,
        loop: true, // 항목들을 무한으로 반복하여 보여줄지 여부
        autoplay: true, // 자동으로 슬라이드 쇼를 시작할지 여부
        autoplayTimeout: 3000, // 다음 이미지로 넘어가는 시간 (단위 : 밀리초)
        autoplayHoverPause: true, // 마우스가 이미지에 위에 있을 때 자동 슬라이드를 일시중지 할지 여부
        nav: true,
      });
    });

    var sitePlusMinus = function () {
      var value,
        quantity = document.getElementsByClassName("quantity-container");

      function createBindings(quantityContainer) {
        var quantityAmount =
          quantityContainer.getElementsByClassName("quantity-amount")[0];
        var increase = quantityContainer.getElementsByClassName("increase")[0];
        var decrease = quantityContainer.getElementsByClassName("decrease")[0];
        increase.addEventListener("click", function (e) {
          increaseValue(e, quantityAmount);
        });
        decrease.addEventListener("click", function (e) {
          decreaseValue(e, quantityAmount);
        });
      }

      function init() {
        for (var i = 0; i < quantity.length; i++) {
          createBindings(quantity[i]);
        }
      }

      function increaseValue(event, quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        console.log(quantityAmount, quantityAmount.value);

        value = isNaN(value) ? 0 : value;
        value++;
        quantityAmount.value = value;
      }

      function decreaseValue(event, quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        value = isNaN(value) ? 0 : value;
        if (value > 0) value--;

        quantityAmount.value = value;
      }

      init();
    };
    sitePlusMinus();

    $(document).ready(function () {
      var owl = $(".owl-carousel");

      owl.owlCarousel({
        items: 3, // 한번에 보여줄 아이템 수
        loop: true, // 반복여부
        margin: 35, // 오른쪽 간격
        autoplay: true, // 자동재생 여부
        autoplayTimeout: 1800, // 재생간격
        autoplayHoverPause: true, //마우스오버시 멈출지 여부
        nav: true,      
      });

      // $(".customNextBtn").click(function () {
      //   owl.trigger("next.owl.carousel");
      // });

      // $(".customPrevBtn").click(function () {
      //   owl.trigger("prev.owl.carousel", [300]);
      // });
    });
  })();

 
 
}
