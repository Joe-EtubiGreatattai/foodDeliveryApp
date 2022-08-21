 // Select total count
let totalCount = document.querySelector("#num1");


// Variable to track count
var count = 1;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
    if(count==5){
        count = 5;
        alert('Sorry Can make above 5 of these')
    }

    else{
        count++;
        totalCount.innerHTML = count;
    }
  }

  
document.querySelector('#inc1').addEventListener("click", handleIncrement);



const handleDecrement = () => {
    if(count==1){
        count <= 0;
        alert('Sorry Can make under 0 of these')
    }

    else{
        count--;
        totalCount.innerHTML = count;
    }
  };
const decrementCount = document.querySelector("#dc1");

// Add click event to buttons
decrementCount.addEventListener("click", handleDecrement);


 // Select total count
 let totalCount2 = document.querySelector("#num2");


 // Variable to track count
 var count2 = 1;
 
 // Display initial count value
 totalCount2.innerHTML = count2;
 
 // Function to increment count
 const handleIncrement2 = () => {
     if(count2==5){
         count2 = 5;
         alert('Sorry Can make above 5 of these')
     }
 
     else{
         count2++;
         totalCount2.innerHTML = count2;
     }
   }
 
   
 document.querySelector('#inc2').addEventListener("click", handleIncrement2);
 
 
 
 const handleDecrement2 = () => {
     if(count2==1){
         count2 <= 0;
         alert('Sorry Can make under 0 of these')
     }
 
     else{
         count2--;
         totalCount.innerHTML = count2;
     }
   };
 const decrementCount2 = document.querySelector("#dc2");
 
 // Add click event to buttons
 decrementCount2.addEventListener("click", handleDecrement2);

 $("#img1").click(function () {
    $("#food-card-1").addClass("active-food-card");
});
$("#bk1").click(function () {
    $("#food-card-1").removeClass("active-food-card");
});


$("#img2").click(function () {
    $("#food-card-2").addClass("active-food-card");
});
$("#bk2").click(function () {
    $("#food-card-2").removeClass("active-food-card");
});

$("#img3").click(function () {
    $("#food-card-3").addClass("active-food-card");
});
$("#bk3").click(function () {
    $("#food-card-3").removeClass("active-food-card");
});


$("#img4").click(function () {
    $("#food-card-4").addClass("active-food-card");
});
$("#bk4").click(function () {
    $("#food-card-4").removeClass("active-food-card");
});

$("#img5").click(function () {
    $("#food-card-5").addClass("active-food-card");
});
$("#bk5").click(function () {
    $("#food-card-5").removeClass("active-food-card");
});

$("#img6").click(function () {
    $("#food-card-6").addClass("active-food-card");
});
$("#bk6").click(function () {
    $("#food-card-6").removeClass("active-food-card");
});

$("#img7").click(function () {
    $("#food-card-7").addClass("active-food-card");
});
$("#bk7").click(function () {
    $("#food-card-7").removeClass("active-food-card");
});


$("#img8").click(function () {
    $("#food-card-8").addClass("active-food-card");
});
$("#bk8").click(function () {
    $("#food-card-8").removeClass("active-food-card");
});


$("#img9").click(function () {
    $("#food-card-9").addClass("active-food-card");
});
$("#bk9").click(function () {
    $("#food-card-9").removeClass("active-food-card");
});


$("#img10").click(function () {
    $("#food-card-10").addClass("active-food-card");
});
$("#bk10").click(function () {
    $("#food-card-10").removeClass("active-food-card");
});


$("#img11").click(function () {
    $("#food-card-11").addClass("active-food-card");
});
$("#bk11").click(function () {
    $("#food-card-11").removeClass("active-food-card");
});


$("#img12").click(function () {
    $("#food-card-12").addClass("active-food-card");
});
$("#bk12").click(function () {
    $("#food-card-12").removeClass("active-food-card");
});



$("#img13").click(function () {
    $("#food-card-13").addClass("active-food-card");
});
$("#bk13").click(function () {
    $("#food-card-13").removeClass("active-food-card");
});


$("#img14").click(function () {
    $("#food-card-14").addClass("active-food-card");
});
$("#bk14").click(function () {
    $("#food-card-14").removeClass("active-food-card");
});



$("#img15").click(function () {
    $("#food-card-15").addClass("active-food-card");
});
$("#bk15").click(function () {
    $("#food-card-15").removeClass("active-food-card");
});



$("#img16").click(function () {
    $("#food-card-16").addClass("active-food-card");
});
$("#bk16").click(function () {
    $("#food-card-16").removeClass("active-food-card");
});


$("#img17").click(function () {
    $("#food-card-17").addClass("active-food-card");
});
$("#bk17").click(function () {
    $("#food-card-17").removeClass("active-food-card");
});



$("#carteg1").click(function () {
    $("#carteg1").addClass("active-cartegory");
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeIn("fast");
    $(".nuggest").fadeIn("fast");
    $(".pizza").fadeIn("fast");
    $(".sushi").fadeIn("fast");
    $(".pie").fadeIn("fast");
    $(".sandwich").fadeIn("fast");
    $(".tacos").fadeIn("fast");
    $(".chips").fadeIn("fast");
});


$("#carteg2").click(function () {
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg2").addClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeIn("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeOut("fast");
});



$("#carteg3").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg3").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeIn("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeOut("fast");
});


$("#carteg4").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg4").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeIn("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeOut("fast");
});


$("#carteg5").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg5").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeIn("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeOut("fast");
});


$("#carteg6").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg6").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeIn("fast");
});


$("#carteg7").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg7").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeIn("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeOut("fast");
});


$("#carteg8").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg8").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeIn("fast");
    $(".chips").fadeOut("fast");
});


$("#carteg9").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg9").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");
    $("#carteg10").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeOut("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeIn("fast");
});


$("#carteg10").click(function () {
    $("#carteg2").removeClass("active-cartegory");
    $("#carteg10").addClass("active-cartegory");
    $("#carteg1").removeClass("active-cartegory");
    $("#carteg3").removeClass("active-cartegory");
    $("#carteg4").removeClass("active-cartegory");
    $("#carteg6").removeClass("active-cartegory");
    $("#carteg5").removeClass("active-cartegory");
    $("#carteg8").removeClass("active-cartegory");
    $("#carteg9").removeClass("active-cartegory");
    $("#carteg7").removeClass("active-cartegory");

    $(".burger").fadeOut("fast");
    $(".nuggest").fadeOut("fast");
    $(".pizza").fadeOut("fast");
    $(".sushi").fadeOut("fast");
    $(".pie").fadeOut("fast");
    $(".sandwich").fadeIn("fast");
    $(".tacos").fadeOut("fast");
    $(".chips").fadeOut("fast");
});


$(".back-from-cart").click(function () {
    $(".cart").fadeOut("fast");
});


$(".cart-menu").click(function () {
    $(".cart").fadeIn("fast");
});


$(".cart-menu-notif").click(function () {
    $(".cart").fadeIn("fast");
});



$(".back-from-payment").click(function () {
    $(".payment").fadeOut("fast");
});


$(".next").click(function () {
    $(".payment").fadeIn("fast");
});


$(".x-icon").click(function () {
    $(".profile").fadeOut("fast");
});


$(".home").click(function () {
    $(".notification").fadeOut("fast");
});


$(".notif").click(function () {
    $(".notification").fadeIn("fast");
});


$(".profile-image").click(function () {
    $(".profile").fadeIn("fast");
});


$(".thick-line").click(function () {
    $(".flex").toggleClass("vert");
    $(".dots").toggleClass("vert-dot");
   
    $(".info-div").toggle("fast");
    $(".hide-dot").toggle("fast");
});


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 7.8023, lng: 6.7333 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 40,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

  $(".remove-map").click(function () {
    $(".map-tracker").hide("fast");
});


$(".app-body").removeClass("app-container");
$(".big-menu").click(function () {
    $(".app-body").toggleClass("app-container", "slow");
    $(".background-menu").show("fast");
});



$(".remove-bg-menu").click(function () {
    $(".app-body").removeClass("app-container", "slow");
    $(".background-menu").hide("fast");
});






$(".myOrder").click(function () {
    $(".map-tracker").toggle("fast");
});
