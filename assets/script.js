$(document).ready(function() {


	$("#name").fadeIn("slow");
	

	var star;
                

    function init(){
        var twink = document.getElementById('twinkle-id');
        // twink.style.height = screen.height+'px';
        // twink.style.width = screen.width+'px';
        
        var rows = parseInt(screen.height/32);
        var cols = parseInt(screen.width/32);
        var twinkles =['twinkle_fast','twinkle_none','twinkle','twinkle_short','twinkle_none','twinkle_none','twinkle_none'];
        for(r=0;r<rows;r++){
            for(c=0;c<cols;c++){
                star = document.createElement('div');
                star.className = 'star';
                star.style.backgroundImage = '-webkit-radial-gradient(50% 50%, ellipse closest-side, white, transparent '+(Math.floor(Math.random() * (40)))+'%)';
                star.style.webkitAnimationName = twinkles[(Math.floor(Math.random() * (twinkles.length)))];
                star.style.webkitAnimationDuration = (10000 + Math.random() * (100000))+'ms';
                star.style.webkitAnimationDelay = (1 + Math.random() * (10000))+'ms';
                twink.appendChild(star);
            }
        }
        // var content = document.getElementById('content')
        // content.style.left = (window.innerWidth-content.clientWidth)/2+'px';
    }
    window.onload = init;

   //  $("#c-link").click(function() {
   //  	$("/contact").show();  
   //  	$("#header").hide(); 
  	// });
  	// $("#p-link").click(function() {
   //  	$("#professional").show();  
   //  	console.log("professh");
   //  	$("#header").hide(); 
  	// });
  	// $("#a-link").click(function() {
   //  	$("#about").show();  
   //  	$("#header").hide(); 
  	// });



});