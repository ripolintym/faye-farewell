<script setup>
import Profileimage from '../assets/images/profile.jpeg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.jpg';

import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

// Reactive variables
const commentName = ref(''); // Reactive variable for comment name
const commentText = ref(''); // Reactive variable for comment text
const comments = ref([]); // Initialize as an empty array
const error = ref(null); // Reactive variable for error messages

// Function to add a comment
const addComment = async () => {
  if (!commentName.value || !commentText.value) {
    error.value = 'Please fill in both fields.'; // Validate input
    return;
  }

  try {
    const { error: insertError } = await supabase
      .from('comments')
      .insert([{ commentName: commentName.value, commentText: commentText.value }]);

    if (insertError) {
      throw insertError; // Throw error if insertion fails
    }

    // Clear the input fields
    commentName.value = '';
    commentText.value = '';

    // Fetch the updated comments list
    await fetchComments();
  } catch (err) {
    error.value = err.message; // Set error message
  }
};

// Function to fetch comments from Supabase
const fetchComments = async () => {
  try {
    const { data, error: selectError } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (selectError) {
      throw selectError; // Throw error if fetching fails
    }

    comments.value = data; // Assign fetched data to comments
  } catch (err) {
    error.value = err.message; // Set error message
  }
};

// Fetch comments when the component is mounted
onMounted(async () => {
  await fetchComments();
});
</script>

<template>
  <div>
    <!-- Header Tab -->
    <header class="header">
      <div class="header-holder">
        <div class="header-text">
          <h1>ptngmkpol</h1>
        </div>
        <navbar class="header-tabs">
          <div class="tab"><h3><a href="#profile">About Me</a></h3></div>
          <div class="tab"><h3><a href="#gallery">Picture Gallery</a></h3></div>
          <div class="tab"><h3><a href="#socials">Contact Me</a></h3></div>
          <div class="tab"><h3><a href="#comments">Leave a comment</a></h3></div>
        </navbar>
      </div>
    </header>

    <!-- Profile Section -->
    <section class="profile" id = "profile">
      <div class = profile>
        <div id = "intro-container">
            <img :src="Profileimage" class="intro-image">
            
          </div>
          <div class="intro-text">
            <section class = "Social-Cards" >
    <a href="https://github.com/apcpmsumilhig" target="_blank">
    <div class="social-card">
          <i class="fa-brands fa-github"></i>
        </div></a>
        <a href="mailto:pmsumilhig@student.apc.edu.ph" target="_blank"><div class="social-card">
          <i class="fa-regular fa-envelope"></i>
        </div></a>
        <a href="https://www.linkedin.com/in/paul-brian-sumilhig/" target="_blank"><div class="social-card">
         <i class="fa-brands fa-linkedin"></i>
        </div></a>
  </section>
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
                      <P>Senator Renato Compañero Cayetano Memorial Science and Technology High School</P>
                    </div>                 
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date">2021-2023</div>
                    <div class = timeline-content>
                      <h3>Senior High School</h3>
                      <P>Pasig City Science High School - with Honors</P>
                    </div>
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot">                  </div>
                    <div class = "timeline-date">August 2023</div>
                    <div class = timeline-content>
                      <h3>College</h3>
                      <P>Freshman - Asia Pacific College </P>
                    </div>
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date">March 2024</div>
                    <div class = timeline-content>
                      <h3>Organization Life</h3>
                      <P>Memberships Head - Asia Pacific College Gaming Genesis</P>
                    </div>
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date"> June 2024</div>
                    <div class = timeline-content>
                      <h3>Organization Life</h3>
                      <P>Logistics Head - Asia Pacific College Microsoft Community</P>
                    </div>
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date"> August 2024</div>
                    <div class = timeline-content>
                      <h3>Organization Life</h3>
                      <P>OIC President - Asia Pacific College Gaming Genesis</P>
                    </div>
                  
                </div>

                <div class = "timeline-item">
                  <div class = "timeline-dot"></div>
                    <div class = "timeline-date"> November 2024</div>
                    <div class = timeline-content>
                      <h3>Honor Student Awardee</h3>
                      <P>Asia Pacific College</P>
                    </div>
                    <div class = timeline-content>
                      <h3>Quality Assessment Interviewee for GG</h3>
                      <P>ASEAN University Network</P>
                    </div>
                </div>
               </div>
          </div>
        </div>


        <section id="gallery" class="gallery">
    <h2>Me and my <span class = "title">Hobbies</span></h2>
    <div class="gallery-grid">
      <div class="gallery-card">
        <img :src="image1" alt="Gallery Image 1" id=img1>
        <div class="overlay">
        <span class="text">Reading</span>
        </div>
      </div>
      <div class="gallery-card">
        <img :src="image2" alt="Gallery Image 2" id=img2>
        <div class="overlay">
        <span class="text">Traveling</span>
        </div>
      </div>
      <div class="gallery-card">
        <img :src="image3" alt="Gallery Image 3" id=img1>
        <div class="overlay">
        <span class="text">Also Traveling but with Friends</span>
        </div>
      </div>
      <div class="gallery-card">
        <img :src="image4" alt="Gallery Image 4" id=img1>
        <div class="overlay">
        <span class="text">Photography</span>
        </div>
      </div>
      <div class="gallery-card">
        <img :src="image5" alt="Gallery Image 5" id=img1>
        <div class="overlay">
        <span class="text">Sleeping</span>
        </div>
      </div>
    </div>
  </section>



    </div>

    
    <section id="resources" class="resources"><div class="title-holder">
      <h2 class = "title-resource">Resources</h2>
    </div>
      <div class = "resources-section">    
        <a href="blackbox.ai" target="_blank" alt="Blackbox.AI">
           <div class = "resources-card">
           <h2 class = "title-resource">Assistant</h2>
        </div></a>
        <a href="https://youtu.be/UqHILyzcULE?si=8O0GSIyDFkRIh4uX" target="_blank" alt="Youtube"><div class = "resources-card">
            <h2 class = "title-resource">Timeline Design</h2>
        </div></a>
        <a href="jpcs.apc.education" target="_blank" alt="JPCS"><div class = "resources-card">
          <h2 class = "title-resource">Reference Design</h2>
        </div></a>
        <a href="https://fonts.google.com" target="_blank" alt="Google Fonts"><div class = "resources-card">  
          <h2 class = "title-resource">Font Design</h2>
        </div></a>
        <a href="https://fontawesome.com" target="_blank" alt="FontAwesome"><div class = "resources-card">
          <h2 class = "title-resource">Icons</h2>
        </div></a>
    </div>
    </section>

    <section id="comments" class="comments">
    <div class="comments-container">
      <h2>Thoughts about my website?</h2>
      <p>Let me know your feedback!</p>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div class="comments-content">
        <textarea v-model="commentName" placeholder="Your Name" required></textarea>
      </div>
      <div class="comments-content">
        <textarea v-model="commentText" placeholder="Message" required></textarea>
      </div>
      <button @click="addComment">Submit</button>
      <div id="comment-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <span class="comment-name"><strong>{{ comment.commentName }}:</strong></span> {{ comment.commentText }}
        </div>
      </div>
    </div>
  </section>





    <!-- Footer -->
  <footer> <h6>Asia Pacific College WEBPROG SS231 
    <br><br>
    Developed by Paul Brian Sumilhig
    <br>
    </h6>
  </footer>


</template>

<script>

</script>

