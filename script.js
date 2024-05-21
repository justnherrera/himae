// document.addEventListener('DOMContentLoaded', function() {
//     const messageElement = document.getElementById('message');
//     const continueButton = document.getElementById('continueButton');
//     const yesNoButtons = document.getElementById('yesNoButtons');
//     const yesButton = document.getElementById('yesButton');
//     const noButton = document.getElementById('noButton');
//     const yesButtonsContainer = document.getElementById('yesButtonsContainer');

//     function typeWriterEffect(text, element, callback) {
//         let index = 0;
//         const speed = 50; // Adjust typing speed here
//         function type() {
//             if (index < text.length) {
//                 if (text.charAt(index) === '\n') {
//                     element.innerHTML += '<br>';
//                 } else {
//                     element.innerHTML += text.charAt(index);
//                 }
//                 index++;
//                 setTimeout(type, speed);
//             } else if (callback) {
//                 callback();
//             }
//         }
//         type();
//     }

//     const firstMessage = "Hi Gem, i was planning to tell you this earlier sa LU pero di ako maka tyempo, lagi ka may kasama hahaha. Pero feeling ko alam mo naman na sasabihin ko e hahaha pwede mo to idisregard, or click mo to continue...";
//     const secondMessage = "Sure ka na jan? hahaha";
//     const yesMessage = "WOY GEEEEEM!!!\nGusto ko lang malaman mo na I find you attractive and pretty.\nI also have to admit, you are one of the reasons why nagsstay pako sa comp.\nAnd lately i always find myself thinking of you... (corny ko ba? HAHA)\nsooo......................\n........................!!!\nyeah, i like you \n.................................\nnot only dahil sa looks ha...........!!!\ni've seen how responsible you are....\ngoal-driven....\nyour personality....\nyour imperfections....\nyour simplicity....\nyour vibe....\nand most of all, your eyes and your smile.\nBut no pressure Gem!\nYou don't need to replicate how i feel, i'm just getting this out of my chest (lah hahha)\ni do not intend for this to be the reason of ruining your inner peace Gem ha. sorry in advance if it did.\nJust do you....(lah Nike yarn, chrz hahah)\nAnd i will be admiring you from afar.";
//     const noMessage = "Ang sakit mo na lord. hahah! Ulet...";

//     messageElement.innerHTML = "";
//     typeWriterEffect(firstMessage, messageElement, function() {
//         continueButton.style.display = 'inline-block';
//     });

//     continueButton.addEventListener('click', function() {
//         messageElement.innerHTML = "";
//         continueButton.style.display = 'none';
//         typeWriterEffect(secondMessage, messageElement, function() {
//             yesNoButtons.style.display = 'block';
//         });
//     });

//     yesButton.addEventListener('click', function() {
//         messageElement.innerHTML = "";
//         yesNoButtons.style.display = 'none';
//         typeWriterEffect(yesMessage, messageElement);
//     });

//     noButton.addEventListener('click', function() {
//         messageElement.innerHTML = "";
//         yesNoButtons.style.display = 'none';
//         typeWriterEffect(noMessage, messageElement, function() {
//             yesButtonsContainer.style.display = 'block';
//         });
//     });

//     const yesButtons = document.querySelectorAll('#yesButtonsContainer .yes-button');
//     yesButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             messageElement.innerHTML = "";
//             yesButtonsContainer.style.display = 'none';
//             typeWriterEffect(yesMessage, messageElement);
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const messageElement = document.getElementById('message');

    function typeWriterEffect(text, element) {
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
            }
        }

        type();
    }

    const message = `Hi! Justine here.
You are looking at a neutral website.
This website has served its purpose, I created it to confess and I am happy that she knows that she's admired and appreciated. 😊

This repository will soon be put in private or deleted. Thank you.`;

    typeWriterEffect(message, messageElement);
});

