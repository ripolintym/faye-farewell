<script setup>
import { supabase } from '../lib/supabaseClient'

const commentName = ref('');
const commentText = ref('');
const comments = ref();
const error = ref(null);

const addComment = async () => {
  try {
    const { error: insertError } = await supabase
      .from('comments')
      .insert([{ commentName: commentName.value, commentText: commentText.value }]);

    if (insertError) {
      throw insertError;
    }

    commentName.value = '';
    commentText.value = '';
    await fetchComments();
  } catch (err) {
    error.value = err.message;
  }
};

const fetchComments = async () => {
  try {
    const { data, error: selectError } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (selectError) {
      throw selectError;
    }

    comments.value = data;
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(async () => {
    await fetchComments();
});
</script>

<template>
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
        <strong>{{ comment.commentName }}:</strong> {{ comment.commentText }}
      </div>
      </div>
    </div>
  </section>
</template>