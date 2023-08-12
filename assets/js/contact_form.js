const contactForm = document.querySelector('#contact-form')
const submitBtn = document.querySelector('#submit-btn')
const nameInput = document.querySelector('#user_name')
const emailInput = document.querySelector('#user_email')
const messageInput = document.querySelector('#message')
const subjectInput = document.querySelector('#subject')


const serviceId = 'service_yely2n5'
const publicId = '8ExJgnIP0yXgnXTnk'
const privateKey = 'LeB0wrIpsYunajM6u-SWm'
const templateID = 'template_ifo42cg'

emailjs.init(publicId)


contactForm.addEventListener("submit", e => {
    e.preventDefault();

    submitBtn.innerText = "Just a Moment...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    }
    
    emailjs.send(serviceId, templateID, inputFields).then((res) => {
        submitBtn.innerText = "Message Sent Successfully";
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        console.log(res);
        
    }
    
    ).catch((err) => {
        console.log(err);
        submitBtn.innerText = 'Something Went Wrong!';
    });
})