<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">AI Tools & Applications</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover and integrate powerful AI capabilities into your applications
        </p>
      </div>

      <!-- Search Bar -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search AI tools..."
            class="w-full px-4 py-3 pl-12 text-lg rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
          >
          <svg class="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Tool Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- NLP Tools -->
        <div class="group">
          <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100 h-full">
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-500 to-blue-600">
              <div class="p-6 flex items-center justify-center">
                <svg class="w-16 h-16 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Natural Language Processing</h3>
              <p class="text-gray-600 mb-4">Process and analyze text with state-of-the-art language models.</p>
              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Document Analysis AI</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Sentiment Analysis</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Text Classification</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Coming Soon</span>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                  Explore NLP Tools
                  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Computer Vision -->
        <div class="group">
          <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100 h-full">
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-500 to-indigo-600">
              <div class="p-6 flex items-center justify-center">
                <svg class="w-16 h-16 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Computer Vision</h3>
              <p class="text-gray-600 mb-4">Analyze images and video with advanced AI models.</p>
              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Image Recognition</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Object Detection</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Video Analytics</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Coming Soon</span>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200">
                  Explore Vision Tools
                  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Machine Learning -->
        <div class="group">
          <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100 h-full">
            <div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-purple-600">
              <div class="p-6 flex items-center justify-center">
                <svg class="w-16 h-16 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Machine Learning</h3>
              <p class="text-gray-600 mb-4">Build and deploy custom ML models for your needs.</p>
              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Predictive Analytics</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Available</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">AutoML Platform</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Coming Soon</span>
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-gray-900">Model Deployment</span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Coming Soon</span>
                </div>
              </div>
              <div class="mt-6">
                <button class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors duration-200">
                  Explore ML Tools
                  <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 > div {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style> 