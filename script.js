document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerText = "See you on February 14th.";
    document.getElementById('catImage').src = "cat2.jpg"; // Change image to new image for "Yes"
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('response').innerText = "No is not an option, I will see you on February 14th.";
    document.getElementById('catImage').src = "cat3.jpg"; // Change image to new image for "No"
});
