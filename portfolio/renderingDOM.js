const renderDOM = document.getElementById("home");

const renderAbout = document.getElementById("about");

const aboutLink = document.getElementById("about-link");

const workLink = document.getElementById("myworks-link");

const contactLink = document.getElementById("contact-link");

const renderWork = document.getElementById("my-projects");

const renderContact = document.getElementById("contact");

const mainPage = document.getElementById("index-link");

renderAbout.innerHTML = `
    <section class="about-section">
      <h2>About Me</h2>
      <p>
        I'm a passionate web developer with a love for building adaptive and
        responsive digital solutions. The tech world excites me because of its
        endless learning potential and the opportunity to solve real-world
        problems creatively.
      </p>
      <div class="about-divider"></div>

      <div class="about-images">
        <img src="images/one.webp" alt="Me 1" />
        <img src="images/two.jpg" alt="Me 2" />
      </div>

      <div class="about-socials">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </section>
    
  `;

aboutLink.addEventListener("click", () => {
  renderDOM.style.display = "none";
  renderContact.style.display = "none";
  renderWork.style.display = "none";
  renderAbout.style.display = "block";
  renderAbout.style.display = "block";
  return;
});

mainPage.addEventListener("click", () => {
  renderDOM.style.display = "block";
  renderAbout.style.display = "none";
  renderWork.style.display = "none";
  renderContact.style.display = "none";
  return;
});

renderContact.innerHTML = `
        <div class="contact-container">
      <div class="intro">
        <h2>Connect with me</h2>
        <hr />
      </div>

      <div class="contact-main">
      <div class="contact-text">
          <h1>Get in touch with me</h1>
        </div>
        <form id="contactForm" novalidate>
          <label for="name">Name<span style="color: #f44336"> *</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
            autocomplete="name"
          />

          <label for="email">Email<span style="color: #f44336"> *</span></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            required
            autocomplete="email"
          />

          <label for="message"
            >Message<span style="color: #f44336"> *</span></label
          >
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        
      </div>
    </div>


`;
contactLink.addEventListener("click", () => {
  renderDOM.style.display = "none";
  renderAbout.style.display = "none";
  renderWork.style.display = "none";
  renderContact.style.display = "block";
  return;
});
//begining of the section where i put my works

// end of the section where i put my works
workLink.addEventListener("click", () => {
  renderDOM.style.display = "none";
  renderAbout.style.display = "none";
  renderContact.style.display = "none";
  renderWork.style.display = "block";
  return;
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  [...form.elements].forEach((el) => {
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.style.borderColor = "#555";
    }
  });

  let valid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    valid = false;
    form.name.style.borderColor = "#f44336";
    alert("Please enter your name.");
    form.name.focus();
    return;
  }
  if (email === "") {
    valid = false;
    form.email.style.borderColor = "#f44336";
    alert("Please enter your email.");
    form.email.focus();
    return;
  }
  if (!emailRegex.test(email)) {
    valid = false;
    form.email.style.borderColor = "#f44336";
    alert("Please enter a valid email address.");
    form.email.focus();
    return;
  }
  if (message === "") {
    valid = false;
    form.message.style.borderColor = "#f44336";
    alert("Please enter your message.");
    form.message.focus();
    return;
  }

  if (valid) {
    alert("Thank you for reaching out! Your message has been sent.");
    form.reset();
  }
});
