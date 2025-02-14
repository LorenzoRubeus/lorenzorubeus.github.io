const particles = {
    
}

let noNumber = 0;
let yesNumber = 0;

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'yes') {
            noNumber = 0
            document.querySelector('#particles-js').style.display = "block"
            const messages = [
                'متشكر ♥', 'OMG! She said yes ♥'
                
            ]
            
            if(yesNumber == 0) {
                document.querySelector('h1').innerText = messages[yesNumber]
                Swal.fire({
                    title: "Aww cutie 💕",
                    text: "Can't wait to offer you dinnerrr!",
                    icon: "success"
                });
            } else {
                const random = Math.floor(Math.random() * messages.length);
                document.querySelector('h1').innerText = messages[random]
            }
            yesNumber++

               
            document.querySelector('#gif').src = "https://media.tenor.com/Ka7sVbRXQUwAAAAj/tkthao219-bubududu.gif"            

            particlesJS('particles-js', {
                "particles": {
                    "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                    },
                    "color": {
                    "value": "#FF0000"
                    },
                    "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#FF0000"
                    },
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "./assets/heart.png",
                        "width": 50,
                        "height": 50
                    }
                    },
                    "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                    },
                    "size": {
                    "value": 50,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 4.795204795204795,
                        "size_min": 0,
                        "sync": false
                    }
                    },
                    "line_linked": {
                    "enable": true,
                    "distance": 32.06824121731046,
                    "color": "#ffffff",
                    "opacity": 0.03206824121731046,
                    "width": 0
                    },
                    "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "resize": true
                    },
                    "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                        "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 0,
                        "size": 40,
                        "duration": 0.6496617698410762,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 300,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
                }
            });
            
        }

        if(e.target.id === "no") {
            yesNumber = 0
            document.querySelector('#particles-js').style.display = "none" 
            const messages = [
                "Why not? I'm not even Indian :(", 'Your answer makes me sad...', 'You know... you should really consider be my valentine', 
                "b- b- but... don't make me come there to kidnap you :)", 'You must say yes', 'I thought...',
                'Are you really sure sure?', "Are you sure you haven't misclicked...?", 'This hurts me quite a lot',
                'I cannot believe this', 'I did not expect this', "I guess I'll have to kidnap you then, fine"
            ]
            
            if(noNumber == messages.length) {
                noNumber = 0
            }
            document.querySelector('h1').innerText = messages[noNumber]
            document.querySelector("#gif").src = "https://media.tenor.com/RJgIui1E_2QAAAAj/teddy-bear.gif"
            noNumber++
        }
    })
})