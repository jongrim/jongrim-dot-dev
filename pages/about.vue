<template>
  <NuxtLayout>
    <section class="h-full font-OpenSans text-xl leading-relaxed pb-24">
      <p class="text-6xl font-Oswald mb-6">Hi, I'm Jon 👋</p>
      <img
        src="https://res.cloudinary.com/duf9ddqhl/image/upload/q_auto:best,ar_16:9,c_fill/v1669997657/cruise_aewcta.jpg"
        alt="On cruise in Bahamas"
        class="max-h-[75vh] w-full object-cover mt-8"
      />
      <p class="mt-2 text-sm text-slate-700 italic text-center">
        Docked in the Bahamas
      </p>
      <p class="mt-12">I have a few passions in life:</p>
      <ul class="list-disc list-inside">
        <li>Travel</li>
        <li>Food</li>
        <li>Athletics</li>
        <li>Software</li>
      </ul>
      <p class="mt-4">
        I'm fortunate to have a partner who enjoys many of these same things
        (okay, she's not so interested in software), so we make it a priority to
        get as many of these moments and memories as we can. We tend to value
        experiences over material goods, though don't get me wrong, I do love
        shopping for clothes and shoes as well.
      </p>
      <img
        src="https://res.cloudinary.com/duf9ddqhl/image/upload/q_auto:best,ar_16:9,c_fill/v1669997407/diamond-head-crater_dncrdr.jpg"
        alt="Diamond Head crater from the sky"
        class="max-h-[75vh] w-full object-cover mt-8"
      />
      <p class="mt-2 text-sm text-slate-700 italic text-center">
        Diamond Head crater - Hawaii
      </p>
      <p class="mt-12">
        Athletics is one of my favorite hobbies. I've been active for a long
        time — weightlifting, running, team sports, it's all good — but in 2021
        I started using CrossFit to get out of a mental and physical funk and
        it's been an amazing evolution in my fitness journey. I feel like I'm in
        the best shape of my life and enjoy the daily challenge and work I get
        at the gym. It's also given me a community of like-minded people who
        serve as extraordinary motivation!
      </p>
      <div class="flex flex-col md:flex-row md:justify-center gap-4 mt-8">
        <img
          src="https://res.cloudinary.com/duf9ddqhl/image/upload/co_white,l_text:arial_60:@bwilleyphotography/fl_layer_apply,g_south_west,y_20,x_20/v1668359088/rope_climb.jpg"
          alt="Rope climb"
          class="max-h-[75vh] object-contain"
        />
        <img
          src="https://res.cloudinary.com/duf9ddqhl/image/upload/v1670000147/squats_cqlrv1.jpg"
          alt="Rope climb"
          class="max-h-[75vh] object-contain"
        />
      </div>
      <p class="mt-12">
        I'm also a bit obsessed with soccer. I'm even ready to declare it the
        true football, customs be damned! The 2018 Atlanta United team will live
        in my heart forever, and I'll follow the US team anywhere.
      </p>
      <video controls className="w-full mt-8">
        <source
          src="https://res.cloudinary.com/duf9ddqhl/video/upload/v1669997458/she-believes-goal_qqvnzz.mp4"
          type="video/mp4"
        />
      </video>
      <p class="mt-2 text-sm text-slate-700 italic text-center">
        US vs England - She Believes Cup, 2018
      </p>
      <p class="mt-12">
        This is just a bit about me. If you were hoping to learn about my work
        experience, check out
        <NuxtLink class="text-blue-700 underline" to="/experience"
          >the experience page</NuxtLink
        >. My philosphy on work is that it is part of the equation to a happy
        life. Enjoying your work, at least most of the time, is important, and I
        care about working for companies that I feel align with my social views
        and that truly care about their people. Outisde of work though, I want
        to see more, taste more, and sweat more. When I'm doing those things,
        I'm happy.
      </p>
      <p class="text-center mt-6 text-4xl">❤️</p>
      <p class="mt-12 text-sm italic">
        Oops, almost forgot the obligatory photo of cats - enjoy!
      </p>
      <img
        src="https://res.cloudinary.com/duf9ddqhl/image/upload/q_auto:best,ar_16:9,c_fill/v1669997406/cat-pile_w52jon.jpg"
        alt="Pile of kittens"
        class="max-h-[75vh] w-full object-cover mt-8"
      />
      <p class="mt-2 text-sm text-slate-700 italic text-center">
        Castle, Lady, and MJ
      </p>
    </section>
  </NuxtLayout>
</template>
