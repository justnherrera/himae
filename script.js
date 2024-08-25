document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');
    const continueButton = document.getElementById('continueButton');
    const yesNoButtons = document.getElementById('yesNoButtons');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const yesButtonsContainer = document.getElementById('yesButtonsContainer');

    function typeWriterEffect(text, element, callback) {
        let index = 0;
        const speed = 50; // Adjust typing speed here
        function type() {
            if (index < text.length) {
                if (text.charAt(index) === '\n') {
                    element.innerHTML += '<br>';
                } else {
                    element.innerHTML += text.charAt(index);
                }
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    const firstMessage = "Woi Mae, i wanna tell you something. \n click open to continue";
    const secondMessage = "I wanna let u know na im grateful on whatever we have right now, like as i mentioned, I am serious about u. \n So yun na nga, about telling our friends about it, lamko na medyo parang dinidepend ko sayo, gusto ko lang malaman mo na i only do that kasi i want us to have a mutual decision to share it with them. Like evry decision na involved ka, gusto ko maging part ka ganon. so yon, hahaha i wanna tell you more. \n wanna continue?";
    const yesMessage = "I just wanted to take a moment to let you know how thankful I am for you. I know that sometimes things may not always go as smoothly as we’d like, and there are moments when it feels like it might not work out. But despite those moments of doubt, there’s something inside me that still urges me to keep trying, to make this work. My intentions are serious, and I genuinely want to see where this journey can take us. Thank you for being a part of my life. Let's make this work or Let me make it work at least.";
    const noMessage = "lah, edi wag hahaha chz lang. DI PWEDE! pili ka ulit";

    messageElement.innerHTML = "";
    typeWriterEffect(firstMessage, messageElement, function() {
        continueButton.style.display = 'inline-block';
    });

    continueButton.addEventListener('click', function() {
        messageElement.innerHTML = "";
        continueButton.style.display = 'none';
        typeWriterEffect(secondMessage, messageElement, function() {
            yesNoButtons.style.display = 'block';
        });
    });

    yesButton.addEventListener('click', function() {
        messageElement.innerHTML = "";
        yesNoButtons.style.display = 'none';
        typeWriterEffect(yesMessage, messageElement);
    });

    noButton.addEventListener('click', function() {
        messageElement.innerHTML = "";
        yesNoButtons.style.display = 'none';
        typeWriterEffect(noMessage, messageElement, function() {
            yesButtonsContainer.style.display = 'block';
        });
    });

    const yesButtons = document.querySelectorAll('#yesButtonsContainer .yes-button');
    yesButtons.forEach(button => {
        button.addEventListener('click', function() {
            messageElement.innerHTML = "";
            yesButtonsContainer.style.display = 'none';
            typeWriterEffect(yesMessage, messageElement);
        });
    });
});

