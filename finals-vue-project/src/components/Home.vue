<script setup>

import Profileimage from '../assets/images/profile.jpeg';

</script>

<template>
  <div>
    <!-- Header Tab -->
    <header class="header">
      <div class="header-holder">
        <div class="header-text">
          <h1>ptngmkpol</h1>
        </div>
        <div class="header-tabs">
          <div class="tab"><h3><a href="#profile">About Me</a></h3></div>
          <div class="tab"><h3><a href="#achievements">Picture Gallery</a></h3></div>
          <div class="tab"><h3><a href="">Contact Me</a></h3></div>
          <div class="tab"><h3><a href="">Leave a comment</a></h3></div>
        </div>
      </div>
    </header>

    <!-- Profile Section -->
    <section class="profile" id = "profile">
      <div class = profile>
        <div id = "intro-container">
            <img :src="Profileimage" class="intro-image">
          </div>
          <div class="intro-text">
            <h1>Hi, I'm Paul Brian Sumilhig!</h1>
            <h5>I am a 2nd Year student currently in office as an officer for two organizations.
              <br> Also inclined with analytics, statistics, as well as data science and similar topics.
            </h5>
          </div>
          <div>

          </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container">
      <main>
        <section class="main-content">
          <div class="main-content-holder">
              <div class="content-container">
              <!-- Education image removed -->
              <div class="content-text">
                <h2 class=text-animation>Timeline of <span></span></h2><p>
                </p>
               </div>
            </div>
            <div class="content-container">
              <div class="content-text">
                <h3>Hobbies & Interests</h3>
                As a person who doesn't really have anything to do in life, I commonly find myself doing these activities apart from looking at landscapes or "views" like the city lights in the evening.
                <br>
                <ul>
                  <li>Reading</li>
                  <li>Sleeping</li>
                  <li>Cooking</li>
                  <li>Photography</li>
                  <li>Travelling</li>
                </ul>
              </div>
              <!-- Hobbies image removed -->
            </div>

            <div class="content-container">
              <!-- Goals image removed -->
              <div class="content-text">
                <h3>Goals In Life / Dream</h3>
                To be so financially stable that I can spend on a day the average spending power of a person on a year.
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  </div>



    <!-- Footer -->
  <footer> <h6>Asia Pacific College WEBPROG SS231 
    <br><br>
    Developed by Paul Brian Sumilhig
    <br>
    </h6>
  </footer>


</template>

<script>
export default {
  name: 'YourComponentName', // Replace with your component name
};
</script>

