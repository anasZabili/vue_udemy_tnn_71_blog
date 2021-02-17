import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore
        .collection("posts")
        .doc(id)
        .get();
      if (!res.exists) {
        throw new Error("That post dosn't exist");
      }
      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

export default getPost;
