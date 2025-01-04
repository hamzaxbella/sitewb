//pop up show
document.querySelectorAll('#portfolio .gallery-image .cell img').forEach((image)=>{
    image.onclick=()=>{
        document.querySelector(".pop-up").style.display = "block";
        document.querySelector('.pop-up img').src = image.getAttribute('src');
    }
})
document.querySelector('.pop-up .close').addEventListener('click',()=>{
    document.querySelector('.pop-up').style.display = "none";
});
// open navbar tablet & mobile
const togglenav = document.querySelector('#hero .nav-icon');
togglenav.addEventListener('click',()=>{
    document.querySelector('#hero .nav').classList.toggle("open");
})
window.onscroll=()=>{
    document.querySelector('#hero .nav').classList.remove("open");
}
// preload
const preloader =  document.querySelector('.preload_container');
window.addEventListener('load',vanish)

function vanish(){
    preloader.classList.add('disappear');
}
// typing animation
var typed = new Typed(".typing",{
    strings:["Professional Photographer", "Creative Filmmaker", "Expert Video Editor", "Visual Storyteller"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
});
// Sending emails via contact form
async function  sendEmail(){
    // Get form elements
    const nameInput = document.querySelector(".name");
    const emailInput = document.querySelector(".email");
    const subjectInput = document.querySelector(".subject");
    const messageInput = document.querySelector(".message");

    // Basic validation
    if(!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
        alert("Please fill in all fields");
        return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address");
        return;
    }

    var params = {
        from_name: nameInput.value,
        email_id: emailInput.value,
        subject_id: subjectInput.value,
        message_id: messageInput.value,
    }

    await emailjs.send("service_ujk1cq4","template_m58d3no",params) // i should be using environment variables here.  I will fix this later
        .then(function(res){
            alert("Email sent successfully!");
            // Clear form after successful send
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';
        })
        .catch(function(error) {
            alert("SENT.");
            console.error("EmailJS Error:", error);
        });
}
