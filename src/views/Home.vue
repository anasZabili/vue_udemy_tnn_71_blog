<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="handleShowPost">toggle posts</button>
    <button @click="posts.pop()">Delete post</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList";
export default {
  name: "Home",
  components: {
    PostList,
  },
  setup() {
    const posts = ref([
      {
        title: "Bienvenue sur le blog",
        body: "un super blog je le jure",
        id: 1,
      },
      {
        title: "Comment faire de bonne pattes",
        body: "avec de la bonne farine de blé",
        id: 2,
      },
    ]);
    const showPosts = ref(true);

    const handleShowPost = () => {
      showPosts.value = !showPosts.value;
    };
    return {
      posts,
      showPosts,
      handleShowPost,
    };
  },
};
</script>
