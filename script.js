function resp(){
    window.open('sign_in.html', '_self')
}

function show(){
    let take_contact_email = document.getElementById('contact_email').value;

    var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailfilter.test(take_contact_email)) {
        alert('Please enter a valid email address!');
        return false;
    }
    
    alert("Thank You for asking :)")
}

function show_2(){
    
    alert("Congrats, You have created your account :)")
}

function show_3(){
    var value = document.getElementById("inputusername").value;
    alert("Welcome back, "+value);
}

// function mySubmit(frm) {
//     document.getElementById("message").style.display = 'block';
//     return false;
// }