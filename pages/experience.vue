<template>
  <NuxtLayout>
    <section id="summary">
      <h2 class="font-Oswald mb-12 text-lg text-slate-500">Summary</h2>
      <p class="text-lg leading-relaxed">
        I have built my career by being able to bridge business needs and
        engineering excellence. My experience has ranged from client facing
        positions to dedicated engineering, and I have consitently helped
        businesses achieve their goals by focusing on delivering value in a
        sustainable fashion. My passion is developing rich user experiences, and
        I enjoy iterating quickly to get feedback and solve real user
        challenges.
      </p>
    </section>
    <hr class="my-12" />
    <section id="experience" class="grid gap-12">
      <h2 class="font-Oswald text-slate-500 text-lg">Work Experience</h2>
      <div
        v-for="position in experience"
        :key="`${position.title}-${position.company}`"
        class="grid md:grid-cols-3 gap-8"
      >
        <div class="font-Oswald">
          <p class="text-xl font-Oswald mb-1">{{ position.title }}</p>
          <p class="text-lg text-slate-500">{{ position.company }}</p>
          <p class="text-lg text-slate-500">{{ position.timeSpan }}</p>
        </div>
        <ul class="list-disc pl-4 leading-relaxed md:col-span-2">
          <li v-for="bullet in position.highlights" class="mb-1">
            {{ bullet }}
          </li>
        </ul>
      </div>
    </section>
    <hr class="my-12" />
    <section id="skills" class="grid gap-12">
      <h2 class="font-Oswald text-slate-500 text-lg">
        Skills and Proficiencies
      </h2>
      <div>
        <p class="text-lg font-Oswald mb-3">Languages</p>
        <p>JavaScript, TypeScript, Python (familiar), SQL (familiar)</p>
      </div>
      <div>
        <p class="text-lg font-Oswald mb-3">Frameworks and Runtimes</p>
        <p>Vue, React, Nuxt, Next.js, Browser APIs, Node</p>
      </div>
      <div>
        <p class="text-lg font-Oswald mb-3">Libraries and Services</p>
        <p>
          Redux, Vuex, Jest, Xstate, Webpack, Vite, Stripe, AWS, Netlify,
          GitHub, Gitlab
        </p>
      </div>
      <div>
        <p class="text-lg font-Oswald mb-3">Soft skills</p>
        <p>
          Requirements analysis, technical writing, project management,
          mentorship and leadership
        </p>
      </div>
    </section>
    <hr class="my-12" />
    <section class="my-12 flex flex-col">
      <h2 class="font-Oswald text-slate-500 text-lg mb-12">Links</h2>
      <a download href="/Grim-Resume.pdf" class="text-blue-700 underline mb-3"
        >Download my résumé</a
      >
      <a href="https://github.com/jongrim" class="text-blue-700 underline mb-3">
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/jonathangrim/"
        class="text-blue-700 underline mb-3"
      >
        LinkedIn
      </a>
      <NuxtLink to="/projects" class="text-blue-700 underline"
        >Projects</NuxtLink
      >
    </section>
  </NuxtLayout>
</template>
<script setup lang="ts">
import experience from "../data/experience";
</script>
