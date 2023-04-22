const largeImage = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
const thumbnail = ["images/image-product-1-thumbnail.jpg","images/image-product-2-thumbnail.jpg","images/image-product-3-thumbnail.jpg","images/image-product-4-thumbnail.jpg"];
var seeCounter = 0;
var mobCounter = 0;
const noa = document.getElementById("#numofarticle");
var numOfArticle = 0;
const min = document.getElementById("min");
const plus = document.getElementById("plus");
const cartNum = document.getElementById("cartnum");
const amount = document.getElementById("amount");
const quantity = document.getElementById("quantity");

$(document).ready(function(){
  $("#open").click(function() {
    $("#menu").css("display","block");
  })

  $("#close").click(function() {
    $("#menu").css("display","none");
  });

  $("#mpic").click(function() {
    $("#see").css("display","block");
    $("#smpic").children(".ref").attr("src", $(this).attr("src"));
    $(".spic").filter(function() {
      return $(this).children("img").attr("src") === thumbnail[largeImage.indexOf($("#smpic").children(".ref").attr("src"))];
    }).click();
  });

  $(".smpic").click(function() {
    $(".smpic").removeClass("active");
    $(this).addClass("active");
    $("#mpic").attr("src", largeImage[thumbnail.indexOf($(this).children("img").attr("src"))]);
  });

  $("#min").click(function() {
    numOfArticle--;
    if(numOfArticle < 0) {
      numOfArticle = 0;
    }
    $("#quantity").text(numOfArticle);
  });

  $("#plus").click(function() {
    numOfArticle++;
    $("#quantity").text(numOfArticle);
  });

  $("#mngarticle button").click(function() {
    if(numOfArticle) {
      $("#notif").css("display","inline");
      $("#notif").text(numOfArticle);
      $("#empty").css("display","none");
      $("#product").css("display","flex");
      $("#insidecart button").css("display","block");
      $("#cartnum").text(`$125.00 x ${numOfArticle}`);
      $("#amount").text(`$${125 * numOfArticle}.00`);
    }else{
      $("#product").css("display","none");
      $("#insidecart button").css("display","none");
      $("#empty").css("display","inline");
      $("#notif").css("display","none");
    }
  });

  $("#delete").click(function() {
    numOfArticle = 0;
    $("#product").css("display","none");
    $("#insidecart button").css("display","none");
    $("#empty").css("display","inline");
    $("#notif").css("display","none");
  });

  $("#cartimg").click(function() {
    $("#insidecart").toggle();
  })

  $("main section:first-of-type .prev").click(function() {
    mobCounter--;
    if(mobCounter < 0) {
      mobCounter = largeImage.length - 1;
    }
    $("#mobpic").attr("src", largeImage[mobCounter]);
  });

  $("main section:first-of-type .next").click(function() {
    mobCounter++;
    if(mobCounter >= largeImage.length) {
      mobCounter = 0;
    }
    $("#mobpic").attr("src", largeImage[mobCounter]);
  });

  $("#see .close").click(function() {
    $("#see").css("display", "none");
  });

  $("#see .prev").on({
    mouseenter: function() {
      $(this).children("img").attr("src","images/icon-previous-orange.svg");
    },
    mouseleave: function() {
      $(this).children("img").attr("src","images/icon-previous.svg");
    },
    click: function() {
      seeCounter--;
      if(seeCounter < 0) {
        seeCounter = largeImage.length - 1;
      }
      $("#smpic").children(".ref").attr("src", largeImage[seeCounter]);
      $(".spic").filter(function() {
        return $(this).children("img").attr("src") === thumbnail[seeCounter];
      }).click();  
    }
  });

  $("#see .next").on({
    mouseenter: function() {
      $(this).children("img").attr("src","images/icon-next-orange.svg");
    },
    mouseleave: function() {
      $(this).children("img").attr("src","images/icon-next.svg");
    },
    click: function() {
      seeCounter++;
      if(seeCounter >= largeImage.length) {
        seeCounter = 0;
      }
      $("#smpic").children(".ref").attr("src", largeImage[seeCounter]);
      $(".spic").filter(function() {
        return $(this).children("img").attr("src") === thumbnail[seeCounter];
      }).click();  
    }
  });

  $("#smpic").children(".close").on({
    mouseover: function() {
      $(this).attr("src","images/icon-close-orange.svg");
    },
    mouseout: function() {
      $(this).attr("src","images/icon-close-white.svg");
    }
  });

  $(".spic").click(function() {
    $(".spic").removeClass("active");
    $(this).addClass("active");
    //set the value of seecounter to the index of the active element
    seeCounter = thumbnail.indexOf($(this).children("img").attr("src")); 
    $("#smpic").children(".ref")
    .attr("src", largeImage[thumbnail.indexOf($(this).children("img").attr("src"))]);
  });
});