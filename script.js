/* =====================================================
   ELEMENTS
===================================================== */

const loginForm =
document.getElementById("loginForm");

const signupForm =
document.getElementById("signupForm");

const switchButton =
document.getElementById("switchButton");

const switchText =
document.getElementById("switchText");

const toast =
document.getElementById("toast");

const toastText =
document.getElementById("toastText");

const formTitle =
document.getElementById("formTitle");

const formDescription =
document.getElementById("formDescription");

const authCard =
document.querySelector(".auth-card");

let loginMode = true;


/* =====================================================
   FORM SWITCH
===================================================== */

switchButton.addEventListener("click", () => {

    loginMode = !loginMode;

    loginForm.classList.toggle("hidden");
    signupForm.classList.toggle("hidden");

    if(loginMode){

        formTitle.textContent =
        "Welcome Back";

        formDescription.textContent =
        "Sign in to continue";

        switchText.textContent =
        "Don't have an account?";

        switchButton.textContent =
        "Sign Up";

    }else{

        formTitle.textContent =
        "Create Account";

        formDescription.textContent =
        "Join Nova today";

        switchText.textContent =
        "Already have an account?";

        switchButton.textContent =
        "Sign In";
    }
});


/* =====================================================
   TOAST
===================================================== */

function showToast(message){

    toastText.textContent =
    message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);
}


/* =====================================================
   LOGIN
===================================================== */

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
    document.getElementById("loginEmail").value;

    const password =
    document.getElementById("loginPassword").value;

    if(!email || !password){

        showToast(
            "Please fill all fields"
        );

        return;
    }

    showToast(
        "Login successful"
    );
});


/* =====================================================
   SIGNUP
===================================================== */

signupForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
    document.getElementById("signupName").value;

    const email =
    document.getElementById("signupEmail").value;

    const password =
    document.getElementById("signupPassword").value;

    const confirm =
    document.getElementById("confirmPassword").value;

    const terms =
    document.getElementById("terms");

    if(
        !name ||
        !email ||
        !password ||
        !confirm
    ){
        showToast(
            "Please complete all fields"
        );
        return;
    }

    if(password !== confirm){

        showToast(
            "Passwords do not match"
        );

        return;
    }

    if(!terms.checked){

        showToast(
            "Accept terms first"
        );

        return;
    }

    showToast(
        "Account created"
    );
});


/* =====================================================
   PASSWORD TOGGLE
===================================================== */

document
.querySelectorAll(".eye-button")
.forEach(button => {

    button.addEventListener("click", () => {

        const input =
        document.getElementById(
            button.dataset.password
        );

        input.type =
        input.type === "password"
        ? "text"
        : "password";

        button.textContent =
        input.type === "password"
        ? "👁"
        : "🙈";
    });
});


/* =====================================================
   SOCIAL BUTTONS
===================================================== */

document
.getElementById("googleButton")
.addEventListener("click", () => {

    showToast(
        "Google login clicked"
    );
});


document
.getElementById("githubButton")
.addEventListener("click", () => {

    showToast(
        "GitHub login clicked"
    );
});


/* =====================================================
   FORGOT PASSWORD
===================================================== */

document
.getElementById("forgotButton")
.addEventListener("click", () => {

    showToast(
        "Password recovery coming soon"
    );
});


/* =====================================================
   CURSOR LIGHT EFFECT
===================================================== */

const cursorLight =
document.querySelector(".cursor-light");

document.addEventListener(
    "mousemove",
    (event) => {

        if(!cursorLight) return;

        cursorLight.style.left =
        event.clientX + "px";

        cursorLight.style.top =
        event.clientY + "px";
    }
);


/* =====================================================
   SPOTLIGHT TEXT EFFECT
===================================================== */

const spotlightElements =
document.querySelectorAll(
    ".spotlight-text"
);

document.addEventListener(
    "mousemove",
    (event) => {

        spotlightElements.forEach(
            (element) => {

                const rect =
                element.getBoundingClientRect();

                const x =
                event.clientX -
                rect.left;

                const y =
                event.clientY -
                rect.top;

                element.style.setProperty(
                    "--x",
                    `${x}px`
                );

                element.style.setProperty(
                    "--y",
                    `${y}px`
                );
            }
        );
    }
);


/* =====================================================
   CARD TILT EFFECT
===================================================== */

document.addEventListener(
    "mousemove",
    (event) => {

        if(!authCard) return;

        const rect =
        authCard.getBoundingClientRect();

        const x =
        event.clientX -
        rect.left;

        const y =
        event.clientY -
        rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 12;

        const rotateX =
        ((y / rect.height) - 0.5) * -12;

        authCard.style.transform =
        `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        `;
    }
);


document.addEventListener(
    "mouseleave",
    () => {

        if(!authCard) return;

        authCard.style.transform =
        "rotateX(0deg) rotateY(0deg)";
    }
);