<template>
  <div class="dropper">
    <input type="file" />
    <span>Drag files here</span>
  </div>
</template>

<script>
export default {
  name: "UploadForm",
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

input {
  width: 100%;
  height: 30vh;
  position: absolute;
  opacity: 0;
}

dropper:hover {
  background-color: #eee;
}
</style>