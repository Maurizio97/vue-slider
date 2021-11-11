
/* const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
] */
var carousel = new Vue({
    el: "#carousel",
    data: {
        counter : 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text:'Lorem ipsum.'
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            }
        ],
        
    },
    methods: {
        prevSlide(){
            if(this.counter === 0){
                this.counter = this.slides.length - 1;
            }else {
                this.counter --;
            }
        },
        nextSlide(){
            if(this.counter === this.slides.length - 1){
                this.counter = 0;
            }else {
                this.counter ++;
            }
        },
        autoSlide(){
            setInterval(() => {
                console.log("ciao");
                if (this.counter === this.slides.length - 1) {
                   return this.counter = 0;
                }else {
                    return this.counter ++;
                }         
            }, 1000);
        },
    },
});
/* autoSlide();
function autoSlide() {
    setInterval(() => {
        console.log("ciao");
        if (counter === carousel.data.slides.length - 1) {
           counter = 0;
        }else {
            counter ++;
        }         
    }, 1000);
} */