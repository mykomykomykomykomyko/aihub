<template>
  <div class="relative">
    <!-- Hero section -->
    <div class="relative min-h-[600px] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      <!-- Mountain SVG Background -->
      <div class="absolute inset-0 z-0">
        <svg class="w-full h-full" viewBox="0 0 1920 1080" fill="none" preserveAspectRatio="xMidYMid slice">
          <!-- Sky gradient -->
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgb(30, 58, 138); stop-opacity: 0.8" />
              <stop offset="100%" style="stop-color: rgb(30, 64, 175); stop-opacity: 0.9" />
            </linearGradient>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color: rgb(55, 65, 81); stop-opacity: 1" />
              <stop offset="100%" style="stop-color: rgb(31, 41, 55); stop-opacity: 1" />
            </linearGradient>
          </defs>

          <!-- Mountains -->
          <path 
            d="M0 1080L480 400L960 800L1440 300L1920 600L1920 1080H0Z" 
            fill="url(#mountainGradient)"
            class="opacity-50"
          />
          <path 
            d="M0 1080L640 500L1280 900L1920 400L1920 1080H0Z" 
            fill="url(#mountainGradient)"
            class="opacity-30"
          />
          <path 
            d="M0 1080L320 700L960 500L1600 800L1920 600L1920 1080H0Z" 
            fill="url(#mountainGradient)"
            class="opacity-40"
          />

          <!-- Snow caps -->
          <path 
            d="M460 410L480 400L500 410L490 420L470 420L460 410Z" 
            fill="white"
            class="opacity-75"
          />
          <path 
            d="M1420 310L1440 300L1460 310L1450 320L1430 320L1420 310Z" 
            fill="white"
            class="opacity-75"
          />
          <path 
            d="M940 510L960 500L980 510L970 520L950 520L940 510Z" 
            fill="white"
            class="opacity-75"
          />
        </svg>
      </div>

      <!-- Content overlay -->
      <div class="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          Alberta AI Hub
        </h1>
        <p class="mt-6 text-xl text-gray-100 max-w-3xl drop-shadow">
          Your central resource for AI innovation across the Government of Alberta. Discover tools, learn best practices, and join our journey towards becoming Canada's most technologically advanced provincial government.
        </p>
        <div class="mt-10">
          <div class="flex space-x-4">
            <router-link 
              to="/ai-resources" 
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors duration-150"
            >
              Explore AI Resources
            </router-link>
            <router-link 
              to="/training" 
              class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-150"
            >
              Start Learning
            </router-link>
          </div>
        </div>
      </div>

      <!-- Decorative bottom wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-24" viewBox="0 0 1920 96" fill="none" preserveAspectRatio="none">
          <path 
            d="M0 96L53.3333 80C106.667 64 213.333 32 320 37.3333C426.667 42.6667 533.333 85.3333 640 90.6667C746.667 96 853.333 64 960 48C1066.67 32 1173.33 32 1280 42.6667C1386.67 53.3333 1493.33 74.6667 1600 74.6667C1706.67 74.6667 1813.33 53.3333 1866.67 42.6667L1920 32V0H0V96Z" 
            fill="rgb(249, 250, 251)"
          />
        </svg>
      </div>
    </div>

    <!-- Featured sections -->
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- AI Agents & Applications -->
        <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-150">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">AI Agents & Applications</h2>
          <p class="text-gray-600 mb-4">Access our catalog of AI solutions designed to enhance government operations and service delivery.</p>
          <router-link to="/ai-resources" class="text-blue-600 hover:text-blue-500 font-medium inline-flex items-center">
            Browse catalog
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>

        <!-- Training & Guidelines -->
        <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-150">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Training & Guidelines</h2>
          <p class="text-gray-600 mb-4">Learn how to effectively implement AI solutions with our comprehensive training materials and best practices.</p>
          <router-link to="/training" class="text-blue-600 hover:text-blue-500 font-medium inline-flex items-center">
            Start learning
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>

        <!-- Innovation Showcase -->
        <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-150">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Innovation Showcase</h2>
          <p class="text-gray-600 mb-4">Explore success stories and case studies of AI implementation across Alberta's government departments.</p>
          <router-link to="/showcase" class="text-blue-600 hover:text-blue-500 font-medium inline-flex items-center">
            View showcase
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic will go here
</script>

<style scoped>
.drop-shadow {
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}

.drop-shadow-lg {
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
}
</style> 