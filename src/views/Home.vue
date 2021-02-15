<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length && !error">
      <PostList :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList";
import getPost from "../composable/getPosts";
import Spinner from "../components/Spinner";
export default {
  name: "Home",
  components: {
    PostList,
    Spinner,
  },
  setup() {
    const { posts, error, load } = getPost();
    load();
    return {
      posts,
      error,
    };
  },
};
</script>
