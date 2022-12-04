<template>
  <nav class="flex flex-wrap items-center gap-8 font-OpenSans">
    <template v-if="smAndLarger">
      <NuxtLink to="/">
        <img src="/favicon.png" height="100%" class="h-12 w-12" alt="Home" />
      </NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/experience">Experience</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
    </template>
    <template v-else>
      <button @click="toggle()">
        <img src="/favicon.png" height="100%" class="h-12 w-12" alt="Home" />
      </button>
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-full"
      >
        <div
          v-if="mobileMenuVisible"
          ref="target"
          class="absolute w-[80vw] h-screen pl-8 py-4 font-Oswald text-lg left-0 top-0 z-10 flex flex-col gap-3 bg-white border-b border-solid border-slate-300 shadow-lg"
        >
          <button @click="toggle()" class="ml-auto mr-3">
            <Icon icon="mdi:close-box-outline" color="#1e293b" width="36" />
          </button>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/experience">Experience</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </div>
      </transition>
    </template>
  </nav>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smAndLarger = breakpoints.greaterOrEqual("sm");

const target = ref<HTMLElement>();
onClickOutside(target, () => toggle());

const [mobileMenuVisible, toggle] = useToggle(false);
</script>
