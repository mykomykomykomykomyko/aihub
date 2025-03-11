<template>
  <div class="relative">
    <!-- Hero section -->
    <div class="relative bg-blue-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="/alberta-landscape.svg" alt="Alberta landscape" />
        <div class="absolute inset-0 bg-blue-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Alberta AI Hub</h1>
        <p class="mt-6 text-xl text-gray-100 max-w-3xl">
          Your central resource for AI innovation across the Government of Alberta. Discover tools, learn best practices, and join our journey towards becoming Canada's most technologically advanced provincial government.
        </p>
        <div class="mt-10">
          <div class="flex space-x-4">
            <router-link to="/ai-resources" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50">
              Explore AI Resources
            </router-link>
            <router-link to="/training" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600">
              Start Learning
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured sections -->
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- AI Agents & Applications -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">AI Agents & Applications</h2>
          <p class="text-gray-600 mb-4">Access our catalog of AI solutions designed to enhance government operations and service delivery.</p>
          <router-link to="/ai-resources" class="text-blue-600 hover:text-blue-500 font-medium">Browse catalog →</router-link>
        </div>

        <!-- Training & Guidelines -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Training & Guidelines</h2>
          <p class="text-gray-600 mb-4">Learn how to effectively implement AI solutions with our comprehensive training materials and best practices.</p>
          <router-link to="/training" class="text-blue-600 hover:text-blue-500 font-medium">Start learning →</router-link>
        </div>

        <!-- Innovation Showcase -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Innovation Showcase</h2>
          <p class="text-gray-600 mb-4">Explore success stories and case studies of AI implementation across Alberta's government departments.</p>
          <router-link to="/showcase" class="text-blue-600 hover:text-blue-500 font-medium">View showcase →</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic will go here
</script> 