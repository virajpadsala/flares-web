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
            </div>
        </nav>
        <header class="masthead">
            <div class="container px-5" id="home">
                <card class="card-map" title="Google Maps">
                    <div class="map">
                        <div id="map"></div>
                    </div>
                </card>
            </div>
        </header>

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
    </div>
</template>
<script>
export default {
    mounted() {
        var myLatlng = new window.google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [
                {
                    featureType: "water",
                    stylers: [
                        { saturation: 43 },
                        { lightness: -11 },
                        { hue: "#0088ff" },
                    ],
                },
                {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [
                        { hue: "#ff0000" },
                        { saturation: -100 },
                        { lightness: 99 },
                    ],
                },
                {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#808080" }, { lightness: 54 }],
                },
                {
                    featureType: "landscape.man_made",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ece2d9" }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ccdca1" }],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#767676" }],
                },
                {
                    featureType: "road",
                    elementType: "labels.text.stroke",
                    stylers: [{ color: "#ffffff" }],
                },
                { featureType: "poi", stylers: [{ visibility: "off" }] },
                {
                    featureType: "landscape.natural",
                    elementType: "geometry.fill",
                    stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
                },
                { featureType: "poi.park", stylers: [{ visibility: "on" }] },
                {
                    featureType: "poi.sports_complex",
                    stylers: [{ visibility: "on" }],
                },
                { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
                {
                    featureType: "poi.business",
                    stylers: [{ visibility: "simplified" }],
                },
            ],
        };
        var map = new window.google.maps.Map(
            document.getElementById("map"),
            mapOptions
        );

        var marker = new window.google.maps.Marker({
            position: myLatlng,
            title: "Hello World!",
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },
};
</script>
<style>
@import "../assets/css/home.css";
</style>
