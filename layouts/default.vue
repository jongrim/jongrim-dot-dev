<template>
  <section class="h-full w-screen flex flex-col overflow-auto font-Lato">
    <Navigation class="py-4 px-8" />
    <div class="max-w-4xl mx-auto grow px-8">
      <slot></slot>
    </div>
  </section>
</template>
