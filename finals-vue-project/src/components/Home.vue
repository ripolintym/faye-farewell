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
                <h3 class=text-animation><span></span></h3><p>
                Studied two different science high schools, one for Junior High School and another one located at a different city for Senior High School. With Honors as a grade 12 student as well as a First Year College Student.
              </p>
                <br><br>
                <b id = "achievements">Achievements</b>
                <ul>
                  <li>Was the Memberships head for Gaming Genesis</li>
                  <li>Currently the Logistics Head for APC Microsoft Community</li>
                  <li>Current President for Gaming Genesis</li>
                </ul>
              </div>
            </div>

            <div class="content-container">
              <div class="content-text">
                <h3>Course</h3>
                Currently studying as a Bachelor of Science in Computer Science specializing in Software Systems.
              </div>
              <!-- Course image removed -->
            </div>

            <div class="content-container">
              <!-- IT Experience image removed -->
              <div class="content-text">
                <h3>Experience</h3>
                Had a Mobile Development Project that I developed alone for a Group Research Project using Java that works similarly to an Air Tag but has ways of communication to send information for different scenarios such as natural disasters as well as man-made scenarios.
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

