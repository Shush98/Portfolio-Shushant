const form = document.querySelector('form');

const name = document.getElementById("name");
const mail = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("mess");

function sendEmail(){

    const bodyMessage = `Name: ${name.value}<br> Email: ${mail.value} 
    <br> Message: ${mess.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "atelidev@asu.edu",
        Password : "C162FAD64C145012B3894B8D334DFC09606D",
        To : 'atelidev@asu.edu',
        From : "atelidev@asu.edu",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Thank You!",
                text: "Message Sent",
                icon: "success"
              });
        }

      }
    );

}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
})