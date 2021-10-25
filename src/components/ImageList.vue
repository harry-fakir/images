<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" v-bind:src="image.link" :key="image.id" />
    </div>
    <h2 v-else>Please login to see Images</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  },
};
</script>