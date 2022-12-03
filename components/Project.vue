<template>
  <section>
    <div class="flex items-end gap-4">
      <h2 class="text-3xl md:text-4xl font-Oswald">
        {{ project.title }}
      </h2>
      <a
        class="text-lg text-zinc-700 font-Oswald hover:bg-zinc-200 transition-all px-3 py-1 rounded-full border-2 border-solid border-zinc-200"
        :href="project.link"
      >
        View
      </a>
    </div>
    <img
      :src="project.image"
      class="max-h-[70vh] rounded-lg my-8 mx-auto object-cover"
    />
    <div>
      <span
        class="mt-4 text-lg leading-relaxed mb-6 whitespace-pre-wrap"
        v-html="project.description"
      />
      <div class="flex flex-wrap gap-2 mt-8 mb-4">
        <div
          v-for="tech in project.tech"
          :key="tech"
          class="px-2 py-1 bg-violet-500 rounded-xl text-white font-bold text-sm"
        >
          {{ tech }}
        </div>
      </div>
      <a
        :href="project.github"
        :aria-label="`${project.title} GitHub`"
        class="text-sm text-blue-700 underline"
      >
        View it on GitHub
      </a>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { PropType, computed, ref } from "vue";
import { Icon } from "@iconify/vue";
import { Project } from "../data/projects";
const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
  leftAligned: {
    type: Boolean,
    default: true,
  },
});
</script>
