<template>
    <div id="page-top">
        <!-- Navigation-->
        <nav
            class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
            id="mainNav"
        >
            <div class="container px-5">
                <a class="navbar-brand fw-bold" href="#page-top">
                    <img src="@/assets/img/Logo.png" alt="" height="30px" />
                </a>
                <b-navbar-toggle target="nav-collapse">Menu</b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#home">Home</b-nav-item>
                        <b-nav-item href="#features">Features</b-nav-item>
                        <b-nav-item href="#contactus">Contact Us</b-nav-item>
                        <b-nav-item href="#download">Download</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
                <!-- <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li class="nav-item">
                            <a class="nav-link me-lg-3" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-lg-3" href="#features"
                                >Features</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-lg-3" href="#contactus"
                                >Contact Us</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link me-lg-3" href="#download"
                                >Download</a
                            >
                        </li>
                    </ul>
                    <button
                        class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
                        v-b-modal.feedbackModal
                    >
                        <span class="d-flex align-items-center">
                            <i class="bi-chat-text-fill me-2"></i>
                            <span class="small">Send Feedback</span>
                        </span>
                    </button>
                </div> -->
            </div>
        </nav>
        <!-- Mashead header-->
        <header class="masthead">
            <div class="container px-5" id="home">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <!-- Mashead text and app badges-->
                        <div class="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 class="display-1 lh-1 mb-3">
                                Make your trip easy with app.
                            </h1>
                            <p class="lead fw-normal text-muted mb-5">
                                Track your loved ones in real-time. Create group
                                & send location to gorup or individual. Make
                                your trip with our user-friendly interface and
                                much more.
                            </p>
                            <div
                                class="
                                    d-flex
                                    flex-column flex-lg-row
                                    align-items-center
                                "
                            >
                                <a class="me-lg-3 mb-4 mb-lg-0" href="#!"
                                    ><img
                                        class="app-badge"
                                        src="../assets/img/google-play-badge.svg"
                                        alt="..."
                                /></a>
                                <a href="#!"
                                    ><img
                                        class="app-badge"
                                        src="../assets/img/app-store-badge.svg"
                                        alt="..."
                                /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <!-- Masthead device mockup feature-->
                        <div class="masthead-device-mockup">
                            <svg
                                class="circle"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient
                                        id="circleGradient"
                                        gradientTransform="rotate(45)"
                                    >
                                        <stop
                                            class="gradient-start-color"
                                            offset="0%"
                                        ></stop>
                                        <stop
                                            class="gradient-end-color"
                                            offset="100%"
                                        ></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" r="50"></circle></svg
                            ><svg
                                class="shape-1 d-none d-sm-block"
                                viewBox="0 0 240.83 240.83"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="-32.54"
                                    y="78.39"
                                    width="305.92"
                                    height="84.05"
                                    rx="42.03"
                                    transform="translate(120.42 -49.88) rotate(45)"
                                ></rect>
                                <rect
                                    x="-32.54"
                                    y="78.39"
                                    width="305.92"
                                    height="84.05"
                                    rx="42.03"
                                    transform="translate(-49.88 120.42) rotate(-45)"
                                ></rect></svg
                            ><svg
                                class="shape-2 d-none d-sm-block"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <div class="device-wrapper">
                                <div
                                    class="device"
                                    data-device="iPhoneX"
                                    data-orientation="portrait"
                                    data-color="black"
                                >
                                    <div class="screen bg-black">
                                        <!-- PUT CONTENTS HERE:-->
                                        <!-- * * This can be a video, image, or just about anything else.-->
                                        <!-- * * Set the max width of your media to 100% and the height to-->
                                        <!-- * * 100% like the demo example below.-->
                                        <!-- <video
                                            muted="muted"
                                            autoplay=""
                                            loop=""
                                            style="
                                                max-width: 100%;
                                                height: 100%;
                                            "
                                        >
                                            <source
                                                src="../assets/img/demo-screen.mp4"
                                                type="video/mp4"
                                            />
                                        </video> -->
                                        <img
                                            src="../assets/img/Login Screen.png"
                                            style="
                                                max-width: 100%;
                                                height: 100%;
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Quote/testimonial aside-->
        <aside class="text-center bg-gradient-primary-to-secondary">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-xl-8">
                        <div class="h2 fs-1 text-white mb-4">
                            Track your family and loved ones with the best GPS
                            based location tracker.Create group & send location
                            to gorup or individual. Flares is user-friendly
                            interface makes it easy for anyone to know location
                            of their contacts in real-time!"
                        </div>
                        <img src="@/assets/img/Logo.png" alt="" height="30px" />
                    </div>
                </div>
            </div>
        </aside>
        <!-- App features section-->
        <section id="features">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div class="container-fluid px-5">
                            <div class="row gx-5">
                                <div class="col-md-6 mb-5">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i
                                            class="
                                                bi-phone
                                                icon-feature
                                                text-gradient
                                                d-block
                                                mb-3
                                            "
                                        ></i>
                                        <h3 class="font-alt">
                                            Location Tracking
                                        </h3>
                                        <p class="text-muted mb-0">
                                            Know whereabouts of your loved ones
                                            in real-time 24/7.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-5">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i
                                            class="
                                                bi-camera
                                                icon-feature
                                                text-gradient
                                                d-block
                                                mb-3
                                            "
                                        ></i>
                                        <h3 class="font-alt">Share Trip</h3>
                                        <p class="text-muted mb-0">
                                            Share trip to gorup or individual
                                            for tracking.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-5 mb-md-0">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i
                                            class="
                                                bi-gift
                                                icon-feature
                                                text-gradient
                                                d-block
                                                mb-3
                                            "
                                        ></i>
                                        <h3 class="font-alt">Free to Use</h3>
                                        <p class="text-muted mb-0">
                                            As always, this app is free to
                                            download and use for Tracking!
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <!-- Feature item-->
                                    <div class="text-center">
                                        <i
                                            class="
                                                bi-patch-check
                                                icon-feature
                                                text-gradient
                                                d-block
                                                mb-3
                                            "
                                        ></i>
                                        <h3 class="font-alt">
                                            Access Anywhere
                                        </h3>
                                        <p class="text-muted mb-0">
                                            Flares available for all mobile
                                            devices Android, iOS, iPad and much
                                            more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-lg-0">
                        <!-- Features section device mockup-->
                        <div class="features-device-mockup">
                            <svg
                                class="circle"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient
                                        id="circleGradient"
                                        gradientTransform="rotate(45)"
                                    >
                                        <stop
                                            class="gradient-start-color"
                                            offset="0%"
                                        ></stop>
                                        <stop
                                            class="gradient-end-color"
                                            offset="100%"
                                        ></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" r="50"></circle></svg
                            ><svg
                                class="shape-1 d-none d-sm-block"
                                viewBox="0 0 240.83 240.83"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="-32.54"
                                    y="78.39"
                                    width="305.92"
                                    height="84.05"
                                    rx="42.03"
                                    transform="translate(120.42 -49.88) rotate(45)"
                                ></rect>
                                <rect
                                    x="-32.54"
                                    y="78.39"
                                    width="305.92"
                                    height="84.05"
                                    rx="42.03"
                                    transform="translate(-49.88 120.42) rotate(-45)"
                                ></rect></svg
                            ><svg
                                class="shape-2 d-none d-sm-block"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="50"></circle>
                            </svg>
                            <div class="device-wrapper">
                                <div
                                    class="device"
                                    data-device="iPhoneX"
                                    data-orientation="portrait"
                                    data-color="black"
                                >
                                    <div class="screen bg-black">
                                        <!-- PUT CONTENTS HERE:-->
                                        <!-- * * This can be a video, image, or just about anything else.-->
                                        <!-- * * Set the max width of your media to 100% and the height to-->
                                        <!-- * * 100% like the demo example below.-->
                                        <img
                                            src="../assets/img/Map Screen.png"
                                            style="
                                                max-width: 100%;
                                                height: 100%;
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Basic features section-->

        <!-- Call to action section-->
        <section class="cta" id="contactus">
            <div class="cta-content">
                <div class="row">
                    <div class="col-lg-4 px-5">
                        <h2 class="text-center text-white font-alt mb-4">
                            CONTACT US
                        </h2>
                        <h3 class="font-alt text-white">
                            Our support team is available help you with any
                            question you might have. We usually respond to all
                            queries within one business day. Reach Flares
                            support anytime by Email support AT flares.me
                        </h3>
                        >
                    </div>
                    <div class="col-lg-8">
                        <div
                            id="feedbackModal"
                            title=" Send feedback"
                            hide-footer
                        >
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body border-0 p-4">
                                        <form>
                                            <div class="form-floating mb-4">
                                                <input
                                                    class="form-control"
                                                    id="inputName"
                                                    type="text"
                                                    placeholder="Enter your name..."
                                                />
                                                <label for="inputName"
                                                    >Name</label
                                                >
                                            </div>
                                            <div class="form-floating mb-4">
                                                <input
                                                    class="form-control"
                                                    id="inputEmail"
                                                    type="email"
                                                    placeholder="name@example.com"
                                                />
                                                <label for="inputEmail"
                                                    >Email address</label
                                                >
                                            </div>
                                            <div class="form-floating mb-4">
                                                <input
                                                    class="form-control"
                                                    id="inputPhone"
                                                    type="tel"
                                                    placeholder="(123) 456-7890"
                                                />
                                                <label for="inputPhone"
                                                    >Phone number</label
                                                >
                                            </div>
                                            <div class="form-floating mb-4">
                                                <textarea
                                                    class="form-control"
                                                    id="inputMessage"
                                                    placeholder="Enter your message here..."
                                                    style="height: 10rem"
                                                ></textarea>
                                                <label for="inputMessage"
                                                    >Message</label
                                                >
                                            </div>
                                            <div class="d-grid">
                                                <button
                                                    class="
                                                        btn btn-primary
                                                        rounded-pill
                                                        py-3
                                                    "
                                                    type="submit"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- App badge section-->
        <section class="bg-gradient-primary-to-secondary" id="download">
            <div class="container px-5">
                <h1 class="text-center text-white font-alt mb-4">
                    HOW TO DOWNLOAD FLARES APP?
                </h1>
                <div class="text-center text-white font-alt mb-4">
                    Follow the links below to download Flares application for
                    Android or iOS platform.
                </div>
                <div
                    class="
                        d-flex
                        flex-column flex-lg-row
                        align-items-center
                        justify-content-center
                    "
                >
                    <a class="me-lg-3 mb-4 mb-lg-0" href="#!"
                        ><img
                            class="app-badge"
                            src="../assets/img/google-play-badge.svg"
                            alt="..."
                    /></a>
                    <a href="#!"
                        ><img
                            class="app-badge"
                            src="../assets/img/app-store-badge.svg"
                            alt="..."
                    /></a>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="bg-black text-center py-5">
            <div class="container px-5">
                <div class="text-white-50 small">
                    <div class="mb-2">
                        &copy; Flares 2021. All Rights Reserved.
                    </div>
                    <!-- <sidebar-link to="/privacy-policy" name="Privacy" /> -->
                    <router-link to="privacy-policy"
                        >Privacy Policy</router-link
                    >
                    <!-- <a href="/privacy-policy">Privacy</a> -->
                    <span class="mx-1">&middot;</span>
                    <router-link to="term-of-condition"
                        >Terms & conditions</router-link
                    >
                    <!-- <a href="/term-of-condition">Terms</a> -->
                    <!-- <span class="mx-1">&middot;</span> -->
                    <!-- <a href="#!">FAQ</a> -->
                </div>
            </div>
        </footer>
        <!-- Feedback modal-->
        <!-- <div
            class="modal fade"
            id="feedbackModal"
            tabindex="-1"
            aria-labelledby="feedbackModalLabel"
            aria-hidden="true"
        > -->
        <b-modal id="feedbackModal" title=" Send feedback" hide-footer>
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body border-0 p-4">
                        <form>
                            <div class="form-floating mb-4">
                                <input
                                    class="form-control"
                                    id="inputName"
                                    type="text"
                                    placeholder="Enter your name..."
                                />
                                <label for="inputName">Name</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input
                                    class="form-control"
                                    id="inputEmail"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input
                                    class="form-control"
                                    id="inputPhone"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                />
                                <label for="inputPhone">Phone number</label>
                            </div>
                            <div class="form-floating mb-4">
                                <textarea
                                    class="form-control"
                                    id="inputMessage"
                                    placeholder="Enter your message here..."
                                    style="height: 10rem"
                                ></textarea>
                                <label for="inputMessage">Message</label>
                            </div>
                            <div class="d-grid">
                                <button
                                    class="btn btn-primary rounded-pill py-3"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                company: "Paper Dashboard",
                username: "michael23",
                email: "",
                firstName: "Chet",
                lastName: "Faker",
                address: "Melbourne, Australia",
                city: "Melbourne",
                postalCode: "",
                aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`,
            },
        };
    },
    methods: {
        updateProfile() {
            alert("Your data: " + JSON.stringify(this.user));
        },
    },
};
</script>
<style>
@import "../assets/css/home.css";
</style>
