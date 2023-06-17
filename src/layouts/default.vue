<template>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />

    <link
      rel="preconnect"
      crossorigin="anonymous"
      href="https://fonts.gstatic.com"
    />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
    />

    <Title>ToDo List</Title>
  </Head>

  <div
    class="flex flex-col min-h-screen bg-app-gray-600 text-app-gray-100 font-sans"
  >
    <Header />

    <main class="flex flex-col flex-1 pb-5 sm:pb-7">
      <slot />
    </main>
  </div>
</template>
