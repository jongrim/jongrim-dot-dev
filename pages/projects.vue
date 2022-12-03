<template>
  <NuxtLayout>
    <div class="grid gap-12 pb-24">
      <Project
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import projects from "../data/projects";
</script>
