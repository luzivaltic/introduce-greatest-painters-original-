

const navBarButton = document.querySelector('.nav-bar button');
const navBar = document.querySelector('.nav-bar');

const navBarTimeLine = gsap.timeline();

function closeNav()
{
    navBarTimeLine.to( navBar , {
        onStart: () =>{
            // const options = navBar.querySelectorAll('a');
            gsap.to( ".nav-bar a", {
                duration : 0.25,
                opacity : 0,
            })

            console.log( "mo" );
        },
        ease : "ease",
        duration : 0.25,
        width: 85,
        opacity : 0.3,
        onComplete: () =>{
            gsap.to(navBarButton, {
                rotation : 180,
            })
        }
     }
    )
}

function openNav()
{
    gsap.to(navBar , {
        duration : 0.25,
        width : 250,
        ease : "back",
        opacity : 1,
        onComplete : () =>{
            gsap.fromTo( '.nav-bar a', 0.25,{
                opacity : 0,
                xPercent : -100,
            }, {
                opacity : 1,
                xPercent : 0,
            }),

            gsap.to(navBarButton, {
                rotation : 0,
            })
        }
    })

}

var run = 1;
closeNav();

navBarButton.addEventListener("click" , () => {
    run++;
    if( run % 2 ) closeNav();
    else openNav();
})

Draggable.create(".nav-bar", {
    bounds: '.nav-container',
})

const theTimeLine = gsap.timeline( { defaults : { duration : 0.5, ease : "back", } } )
    .from( '.the', {
        opacity: 0,
        xPercent : -10,
        ease : "back"
    })
    .to('.the .word2', {
        x : -10,
        y : 10,
    })
    .to('.the .word3', {
        duration : 0.25,
        x : -15,
        y : 15,
    })
;

const greatestTimeLine = gsap.timeline( {
    defaults : { duration : 0.5, ease : "back" },
    onComplete : returnWord,
    }
)
    .from( '.greatest', {
        opacity: 0,
        xPercent : -10,
        ease : "back",
    })
    .to('.greatest .word2', {
        x : -10,
        y : 10,
    })
    .to('.greatest .word3', {
        x : -15,
        y : 15,
    })
    .from( '.others', {
        opacity : 0,
        xPercent : 10,
    })
;

gsap.set( ".main-page", {
    opacity : 0,
})

async function returnWord() {
    theTimeLine.reverse();
    await greatestTimeLine.reverse();
    gsap.set(".greeting-page", {
        display : "none",
    })

    gsap.timeline()
    .to(".main-page", {
        opacity : 1,
        duration : 1,
    })
    .from( ".left-side", {
        opacity : 0,
        duration : 0.5,
    } )
    .from( '.card', {
        yPercent : 100,
        opacity : 0,
        duration : 1,
        ease : "back",
        stagger : 0.1,
    })
    .from(".right-side", {
        opacity : 0,
        duration : 0.5,
    })
}

// Info animation

const names = [
    "Vincent van Gogh",
    "Leonardo da Vinci",
    "Oscar-Claude Monet",
    "Jackson Pollock",
    "Johannes Vermeer",
    "Michelangelo di Lodovico Buonarroti Simoni",
    "Pablo Ruiz Picasso",
    "Sandro Botticelli",
    "Edvard Munch",
]

const liveds = [
    "1853 - 1890",
    "1452 - 1519",
    "1840 - 1926",
    "1912 - 1956",
    "1632 - 1675",
    "1475 - 1564",
    "1881 - 1973",
    "1445 - 1510",
    "1863 - 1944",
]

const decriptions = [
    `Vincent Willem van Gogh was a Dutch post-impressionist painter who
    posthumously became one of the most famous and influential figures
    in the history of Western art.`,

    `Leonardo da Vinci was an Italian polymath of the High Renaissance 
    who was active as a painter, draughtsman, engineer, scientist, theorist
    , sculptor and architect.Leonardo is among the greatest painters in the
    history of art and is often credited as the founder of the High Renaissance.`,

    `Oscar-Claude Monet was a French painter, a founder of French Impressionist 
    painting and the most consistent and prolific practitioner of the movement's 
    philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting.`,

    `Paul Jackson Pollock was an American painter and a major figure in the abstract expressionist movement.
    In 1998 and 1999, his work was honored with large-scale retrospective exhibitions at MoMA and at The Tate in London.`,

    `Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle class life.`,

    `Michelangelo was an Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence
    , who exerted an unparalleled influence on the development of Western art.`,

    `Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult
    life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement,
     the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.`,

    `Alessandro di Mariano di Vanni Filipepi , known as Sandro Botticelli ,
     was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered 
     by the Pre-Raphaelites who stimulated a reappraisal of his work. `,

    `Edvard Munch was a Norwegian painter. His best known work, The Scream, has become one of the iconic images of world art.`     
]

const authorImages = [
    "./style/image/licensed-image.jpeg",
    "./style/image/leonardo da vinci.jpeg",
    "./style/image/Claude_Monet.jpg",
    "./style/image/Jackson Pollock.jpg",
    "./style/image/Johannes Vermeer.jpeg",
    "./style/image/Michelangelo.jpg",
    "./style/image/picasso.jpg",
    "./style/image/Sandro Botticelli.jpeg",
    "./style/image/Edvard Munch.jpg",
]

const workImages = [
    "./style/image/works/starry_night_full.jpg",
    "./style/image/works/Mona_Lisa.jpg",
    "./style/image/works/Impression, Sunrise 1872(Claude_Monet).jpg",
    "./style/image/works/full-fathom-five( jackson pollock ).jpg",
    "./style/image/works/Girl_with_a_Pearl_Earring(Johannes Vermeer 1665).jpg",
    "./style/image/works/Creation_of_Adam( Michelangelo 1512 )2.jpg",
    "./style/image/works/Guernica(Picasso 1937).jpg",
    "./style/image/works/The Birth of Venus(Sandro Botticelli 1485).jpg",
    "./style/image/works/the-scream(Edvard Munch 1893).jpg",
]

const workNames = [
    "Starry Night(1889)",
    "Mona Lisa( 1503-1506, perhaps continuing until 1517)",
    "Impression, Sunrise(1872)",
    "Full Fathom Five(1947)",
    "Girl with a Pearl Earring(1665)",
    "Creation_of_Adam(1512)",
    "Guernica(1937)",
    "The Birth of Venus(1485)",
    "The Scream(1893)",
]

const fullViews = document.querySelectorAll('.full-view');

gsap.set( fullViews[1] , {
    xPercent : -110,
    scale : 0.75,
    position : "absolute",
})


let cur = 0;
function changeInfo(num) {

    var curFullView = fullViews[cur];
    var nextFullView = fullViews[1 - cur];
    cur = 1 - cur;

    console.log( nextFullView );

    const author = nextFullView.querySelector(".painter-introduce img");
    const name = nextFullView.querySelector(".name-container .painter");
    const lived = nextFullView.querySelector(".live-period .painter");
    const decription = nextFullView.querySelector(".infomation .decription");
    const workName = nextFullView.querySelector(".unique-work .name");
    const workImage = nextFullView.querySelector(".unique-work img");

    name.textContent = names[num];
    lived.textContent = liveds[num];
    decription.textContent = decriptions[num];
    author.src = authorImages[num];
    workName.textContent = workNames[num];
    workImage.src = workImages[num];

    gsap.set( nextFullView , {
        xPercent : -110,
        scale : 0.75,
    })

    gsap.timeline()
    .to( curFullView, {
        scale : 0.75,
        duration : 1,
    })
    .to( curFullView, {
        xPercent : 100,
        duration : 0.25,
    })
    .to( nextFullView , {
        onStart : () => {
            gsap.set( curFullView, {
                position : "absolute",
            })

            gsap.set( nextFullView, {
                position : "relative",
            })
        },
        xPercent : 0,
        duration : 1,
        ease : "back",
    })
    .to( nextFullView , {
        scale : 1,
        duration : 0.25,
    })
}

const cards = document.querySelectorAll(".card");

for( let i = 0 ; i < cards.length ; i++){

    cards[i].addEventListener("click", () =>{
        changeInfo(i);
    })
}

// gsap.to( '.box' , {
//     x : 300,
//     duration : 1,
//     scrollTrigger : '.box',
// })

// Draggable.create(".box", {
//     // bounds : 'body',
//     // edgeResistance:0.65,
//     // inertia: true,
//     // autoScroll: true,
// })