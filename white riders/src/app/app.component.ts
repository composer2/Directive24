import { Component } from '@angular/core';

@Component({
    selector: 'start-app',
    templateUrl: 'app.component.html',
    styles: [`
    nav ul {list-style-type: none;}
    nav ul li {padding: 4px;cursor: pointer;display:inline-block}
    /* Remove the navbar's default rounded borders and increase the bottom margin */ 
    .navbar {
      margin-bottom: 50px;
      border-radius: 0;
    }
    
    /* Remove the jumbotron's default bottom margin */ 
     .jumbotron {
      margin-bottom: 0;
    }
   
    /* Add a gray background color and some padding to the footer */
    footer {
      background-color: #f2f2f2;
      padding: 25px;
    }
    /* jumbotron background */
    .jumbotron {
    margin-bottom: 0px;
    background-image: url('../assets/images/jumbotron.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    text-shadow: black 0.3em 0.3em 0.3em;
}
img.logo{
  width:70px; 
  height:43px;
}
.fa-twitter {
    color: #4099FF;
}

.fa-facebook {
    color: #3B5998;
}

.fa-youtube-play {
    color: #e52d27;
}

.fa-rss {
    color: #FF6600;
}

.fa-vine {
    color: #00a478;
}

.fa-flickr {
    color: #ff0084;
}

.fa-twitch {
    color: #6441A5;
}

.fa-linkedin {
    color: #007bb6;
}

.fa {
    opacity: 0.7;
    transition: 1s;
    -webkit-transition: 1s;
}

.fa:hover{
    opacity: 1;
    transition: 1s;
-webkit-transition: 1s;
}
#footer{
  color:white;
  background:#222;
}
@media screen and (max-width:780px) {
    img.logo{
  width:50px; 
  height:33px;
    }
    #footer-input-width{
        width:54%;
        float:left;
        margin-right:10px;
    }
    #footer-btn-width{
        width:40%;
        float:left;        
    }
    #social-icons{
        clear:both;
        margin-top:20px;
    }
  }
  `],
})
export class AppComponent { }