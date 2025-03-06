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

      <main>
        <section class="main-content">
          
              <div class="content-text">
                <h2 class=text-animation>Timeline of <span></span></h2><p>
                </p>
               </div>
               <div class = "content-container">
                <div class = "timeline">
               <div class = "timeline-items">
                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date">2017-2021</div>
                    <div class = timeline-content>
                      <h3>Junior High School</h3>
                      <P>Studied at Senator Renato Co mpañero Cayetano Memorial Science and Technology High School. Was just an average student</P>
                    </div>                 
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date">2021-2023</div>
                    <div class = timeline-content>
                      <h3>Senior High School</h3>
                      <P>Studied at Pasig City Science High School. Had a bit of awards. Made a Mobile Application that sends alerts on multiple phones by one click</P>
                    </div>
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot">                  </div>
                    <div class = "timeline-date">August 2023</div>
                    <div class = timeline-content>
                      <h3>College</h3>
                      <P>Started Studying at Asia Pacific College </P>
                    </div>
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date">March 2024</div>
                    <div class = timeline-content>
                      <h3>Organization Life</h3>
                      <P>Became the Memberships Head for Asia Pacific College Gaming Genesis</P>
                    </div>
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date"> 2024</div>
                    <div class = timeline-content>
                      <h3>Organization Life</h3>
                      <P>Became the Memberships Head for Asia Pacific College Gaming Genesis</P>
                    </div>
                  
                </div>
               </div>
          </div>
            

          </div>
        </section>
      </main>
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

