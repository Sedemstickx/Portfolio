const { createApp } = Vue

createApp({
  data() {
      return {
        year: null,
        slideIndex: 0,
        project_title: null,
        project_description: null,
        project_year: null,
        project_alt: null,
        project_link: null,
        blank: "_blank",
        image: "",
        images: [
          {
            title: "Web based point of sale software",
            year: 2023,
            description: "A simple and flexible web based point of sale software.",
            src: "assets/imgs/portfolio/pos.png",
            alt: "Point of sale project image",
            link: "https://hexpos.000webhostapp.com/",
          },
          {
            title: "thetecsup",
            year: 2020,
            description: "A simple to use tech support forum.",
            src: "assets/imgs/portfolio/tecsup_screenshot_2.jpg",
            alt: "thetecsup project image",
            link: "https://github.com/Sedemstickx/thetecsup",
          },
          {
            title: "Susu Management System",
            year: 2022,
            description: "A susu mangement system for microfinance companies.",            
            src: "assets/imgs/portfolio/sms_screenshot.png",
            alt: "sms project image", 
            link: "#",          
          },
          {
            title: "Samir Group websites",
            year: 2022,
            description: "The official websites for Samir Group of companies",            
            src: "assets/imgs/portfolio/Samir_screenshot.png",
            alt: "Samir project image", 
            link: "https://www.samirgroupgh.com/",                        
          },
          {
            title: "jQuery single page application template",
            year: 2021,
            description: "A simply made single page application(SPA) template that works exactly like modern SPA sites.",            
            src: "assets/imgs/portfolio/Jquery_spa_Screenshot.png",
            alt: "Jquery spa project image",
            link: "https://sedemstickx.github.io/jquery-spa/",            
          },
        ],
      }
  },
  computed:{
  },
  methods: {
    slideShow(num){
    
      //Reset slide index and num to 0 if num matches the total number of available images
      if (num == this.images.length) {this.slideIndex = 0; num = 0;}

      //Set num and slideindex to the last index number of total available images if num is less than 0 to prevent side error
      if (num < 0) {this.slideIndex = this.images.length-1; num = this.images.length-1;}
    
      //place image path in the image src based on gotten index number
      this.image = this.images[num].src;

      //get data based on selected slide index
      this.project_title = this.images[num].title;
      this.project_year = this.images[num].year; 
      this.project_description = this.images[num].description;
      this.project_alt = this.images[num].alt; 
      this.project_link = this.images[num].link;
    
      //Set target attribute to _self if there isn't any link available for the project yet
      if (this.images[num].link === "#") {
        this.blank = "_self";
      }
      else{
        this.blank = "_blank";
      }

    //console.log("number: "+num+" num of slideindex: "+this.slideIndex);
    
    }, 
    slide(num){
        this.slideShow(this.slideIndex += num);
    
        //console.log("Slide index: "+this.slideIndex);
    } 
  },
  mounted() {
    console.log("Vue is active.");

    this.slideShow(this.slideIndex);//Set first image to default.

    this.year = new Date().getFullYear();//get year
  },
})
.mount('#app');