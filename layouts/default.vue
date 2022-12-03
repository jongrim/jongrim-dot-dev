<template>
  <section class="h-screen w-screen flex flex-col pb-4 px-8 overflow-auto">
    <Navigation class="mb-8 py-4" />
    <div class="max-w-4xl mx-auto grow">
      <slot></slot>
    </div>
  </section>
</template>
