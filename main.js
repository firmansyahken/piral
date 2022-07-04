const data = [
    {
        "image": "image/ryan.png",
        "name": "Ryan Ari Sandy",
        "location": "Pamekasan"
    },
    {
        "image": "image/alvin.png",
        "name": "Alvin Setya Pranata",
        "location": "Pamekasan"
    },
    {
        "image": "image/wahyudi.png",
        "name": "Wahyudi Firmansyah",
        "location": "Pamekasan"
    },
    {
        "image": "image/shafy.png",
        "name": "Moh Shafy Gunawan",
        "location": "Sampang"
    },
    {
        "image": "image/mukhlis.png",
        "name": "Mukhlis Ainurrahman",
        "location": "Pamekasan"
    },
];

const Image = document.getElementById("image")
const Name = document.getElementById("name")
const Location = document.getElementById("location")
const content = document.querySelector(".content")

let current = 0;

function Play() {
    const music = new Audio()
    music.src = "bs.mp3";
    music.loop = true;
    music.play()
    document.querySelector(".preloader").style.display = "none";
    main()
}

function main() {
    setInterval(() => {
        Image.setAttribute("src", data[current].image)
        content.classList.add("active")
        setTimeout(() => { content.classList.remove("active") }, 200)
        Name.innerText = data[current].name;
        Location.innerText = "📍" + data[current].location;
        if(current >= data.length - 1) {
            return current = 0;
        }
        current ++;
    }, 2500)
}
