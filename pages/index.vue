<template>
  <section class="h-full flex flex-col px-8 md:max-w-[50vw]">
    <div class="grow flex flex-col justify-center font-Oswald py-16">
      <p class="text-6xl lg:text-9xl">Jonathan Grim</p>
      <div class="flex flex-col gap-8 mt-12">
        <p class="text-2xl md:text-3xl">Software engineer</p>
        <p class="text-2xl md:text-3xl">Athlete</p>
        <p class="text-2xl md:text-3xl">Adventurer</p>
      </div>
      <div class="mt-12 flex gap-8">
        <a href="https://github.com/jongrim" aria-label="Jon's Github">
          <Icon icon="mdi:github" width="48" color="#171717" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathangrim/"
          aria-label="Jon's LinkedIn"
        >
          <Icon icon="mdi:linkedin" width="48" color="#171717" />
        </a>
      </div>
    </div>
  </section>

  <img
    src="https://res.cloudinary.com/duf9ddqhl/image/upload/q_auto/co_white,l_text:arial_80:@bwilleyphotography/fl_layer_apply,g_south_east,y_20,x_20/v1669923283/31Heroes22-207_uad50t.jpg"
    alt="Carrying a sandbag in the 31 Heroes WOD"
    class="md:h-full md:object-cover md:object-right md:absolute md:top-0 md:right-0 md:max-w-[45vw]"
  />
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>
