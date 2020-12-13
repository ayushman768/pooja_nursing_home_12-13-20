var myBnner_section = (function() {

    //jason data
    var arr = [{
        banner: "images/pooja_nursing_home_slider_banner-1.png",
        banner01: "images/pooja_nursing_home_slider_banner-2.png",
		banner02: "images/pooja_nursing_home_slider_banner-3.png",
		banner03: "images/pooja_nursing_home_slider_banner-4.png",

        moarq_text: "24 hours Emergency Services  • Treatments & Operations • Air Conditions Nursing Home  • Air Condition Private Ward Available.</b>"
    }];


    //banner section start
    var section = document.createElement('section');
    body.appendChild(section);
    section.setAttribute('class', 'Section');

    document.querySelector('section').innerHTML += `

                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner">
               

                <div class="item active">
                <img src="${arr[0].banner}" alt="gynecologist doctor in  Bilaspur">
                </div>
				<div class="item ">
                <img src="${arr[0].banner01}" alt="infertility doctor in Bilaspur">
                </div>
				<div class="item ">
                <img src="${arr[0].banner02}" alt="infertility doctor in Bilaspur">
                </div>
				<div class="item ">
                <img src="${arr[0].banner03}" alt="infertility doctor in Bilaspur">
                </div>
				
                
				


                </div>

                <!-- Left and right controls -->
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
                </a>
                </div>
                <marquee><p><b>Note :</b>  ${arr[0].moarq_text}</p></marquee>

                `;


})(); //Section_banner function
//