function verifyPass() {
    var pass = document.getElementById("pw");
    var passLen = pass.value.length;

    if (passLen < 6) {
        document.getElementById("errors").innerHTML = "Your password must include at least 6 characters.";
        return false;
    }
    var pass = document.getElementById("pw").value;
    if (pass.search(/[A-Z]/) < 0) {
        document.getElementById("errors").innerHTML = "Your password must include at least one uppser case letter.";
        return false;
    }
    if (pass.search(/[0-9]/) < 0) {
        document.getElementById("errors").innerHTML = "Your password must include at least one number.";
        return false;
    }
    if (pass.search(/[!@#$%^&]/) < 0) {
        document.getElementById("errors").innerHTML = "Your password must include at least one of the following symbols : !, @, #, $, %, ^, &.";
        return false;
    }

    register(document.getElementById("username").value, document.getElementById("email"), document.getElementById("pw").value)

    alert("You have successfully registered.");

    document.getElementById("auth-form").reset();
}

function verify() {
    var em = document.getElementById("email");
    var emailLen = em.value.length;
    if (emailLen == 0) {
        document.getElementById("errors").innerHTML = "An email is required.";
        return false;
    }
    if (emailLen < 5) {
        document.getElementById("errors").innerHTML = "Your email must be at least 5 characters long.";
        return false;
    }

    var em = document.getElementById("email").value;

    if (em.search(/[.]/) < 0) {
        document.getElementById("errors").innerHTML = "Your email must include '.'.";
        return false;
    }
    if (em.search(/[@]/) < 0) {
        document.getElementById("errors").innerHTML = "Your email must include '@'.";
        return false;
    }

    verifyPass();
}

verify();
