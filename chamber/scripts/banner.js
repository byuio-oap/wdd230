
document.addEventListener('DOMContentLoaded', function() {
    var fecha=new Date();
    var todayDayNumber=fecha.getDay();
    if (todayDayNumber>=1 && todayDayNumber<=3) {
      document.getElementById("chamberBanner").style.display="block";
      
    }

});

document.getElementById("closeButton").addEventListener("click", function() {
document.getElementById("chamberBanner").style.display = "none";
});
