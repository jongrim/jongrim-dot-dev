<template>
  <div class="grid gap-12 pb-24">
    <Project
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>
<script lang="ts" setup>
import projects from "../data/projects";
</script>
