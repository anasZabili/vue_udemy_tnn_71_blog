<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="tagPosts.length" class="layout">
      <PostList :posts="tagPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed, useRef, onMounted } from "vue";
import { useRoute } from "vue-router";
import getPosts from "../composable/getPosts";
import PostList from "../components/PostList";
import TagCloud from "../components/TagCloud";

import Spinner from "../components/Spinner";
export default {
  components: {
    Spinner,
    PostList,
    TagCloud,
  },
  props: ["tag"],
  setup(props) {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    console.log("🚀 ~ file: Tag.vue ~ line 26 ~ setup ~ posts", posts);
    load();

    const tagPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    });

    return { tagPosts, posts, error };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>