<template>
  <div class="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
    <!-- Hero section -->
    <div class="relative min-h-[600px] overflow-hidden bg-gradient-to-b from-blue-100 to-white">
      <!-- Mountain Background -->
      <div class="absolute inset-0 z-0 overflow-hidden">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-transparent to-indigo-100/20"></div>
        
        <!-- Mountains SVG -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <!-- Mountain Gradients -->
            <linearGradient id="mountainBg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#93C5FD" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#BFDBFE" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient id="mountainMid" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#60A5FA" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#93C5FD" stop-opacity="0.3" />
            </linearGradient>
            <linearGradient id="mountainFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.6" />
              <stop offset="100%" stop-color="#60A5FA" stop-opacity="0.4" />
            </linearGradient>
          </defs>

          <!-- Background Mountains -->
          <path 
            d="M0 1080L480 500L960 700L1440 400L1920 600L1920 1080H0Z" 
            fill="url(#mountainBg)"
            class="opacity-30"
          />

          <!-- Middle Mountains -->
          <path 
            d="M0 1080L320 600L640 800L960 500L1280 700L1600 450L1920 650L1920 1080H0Z" 
            fill="url(#mountainMid)"
            class="opacity-40"
          />

          <!-- Foreground Mountains -->
          <path 
            d="M0 1080L240 700L480 550L720 800L960 600L1200 750L1440 550L1680 700L1920 600L1920 1080H0Z" 
            fill="url(#mountainFront)"
            class="opacity-50"
          />

          <!-- Subtle Snow Caps -->
          <path d="M470 560L480 550L490 560L485 565L475 565L470 560Z" fill="white" class="opacity-40" />
          <path d="M950 610L960 600L970 610L965 615L955 615L950 610Z" fill="white" class="opacity-40" />
          <path d="M1430 560L1440 550L1450 560L1445 565L1435 565L1430 560Z" fill="white" class="opacity-40" />
        </svg>

        <!-- Enhanced Decorative Gradient Orbs -->
        <div class="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-200/30 via-indigo-100/20 to-white/30 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-200/30 via-indigo-100/20 to-white/30 blur-3xl"></div>
      </div>

      <!-- Content overlay -->
      <div class="relative z-10 max-w-5xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-normal tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
          Alberta <span class="font-semibold text-blue-600">AI Hub</span>
        </h1>
        <p class="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your central resource for AI innovation across the Government of Alberta. Join our journey towards becoming Canada's most technologically advanced provincial government.
        </p>
        <div class="mt-12">
          <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <router-link 
              to="/ai-resources" 
              class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow group"
            >
              Explore AI Resources
              <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
            <router-link 
              to="/training" 
              class="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow border border-gray-200 group"
            >
              Start Learning
              <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured sections with enhanced background -->
    <div class="relative py-24 px-4 sm:px-6 lg:px-8">
      <!-- Decorative background elements for featured section -->
      <div class="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-blue-100/20"></div>
      
      <!-- Content wrapper with glass effect -->
      <div class="relative max-w-5xl mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- AI Agents & Applications -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-200 border border-blue-100/20">
            <div class="mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">AI Agents & Applications</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">Access our catalog of AI solutions designed to enhance government operations and service delivery.</p>
            </div>
            <router-link to="/ai-resources" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
              Browse catalog
              <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>

          <!-- Training & Guidelines -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-200 border border-blue-100/20">
            <div class="mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Training & Guidelines</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">Learn how to effectively implement AI solutions with our comprehensive training materials.</p>
            </div>
            <router-link to="/training" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
              Start learning
              <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>

          <!-- Innovation Showcase -->
          <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-200 border border-blue-100/20">
            <div class="mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Innovation Showcase</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">Explore success stories and case studies of AI implementation across Alberta's government.</p>
            </div>
            <router-link to="/showcase" class="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
              View showcase
              <svg class="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Chat Button -->
    <button 
      @click="isChatOpen = true"
      class="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50 hover:bg-blue-700"
      :class="{ 'scale-90': isChatOpen }"
    >
      <svg 
        class="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>

    <!-- Chat Interface -->
    <div 
      v-if="isChatOpen" 
      class="fixed bottom-28 right-8 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 ease-out"
      :class="{ 'translate-y-0 opacity-100': isChatOpen, 'translate-y-4 opacity-0': !isChatOpen }"
    >
      <!-- Chat Header -->
      <div class="flex items-center justify-between p-4 border-b border-gray-100">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">AI Assistant</h3>
            <p class="text-sm text-gray-500">Online</p>
          </div>
        </div>
        <button 
          @click="isChatOpen = false"
          class="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Chat Messages -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4" ref="messagesContainer">
        <div v-for="(message, index) in chatMessages" :key="index" class="flex flex-col space-y-2">
          <div :class="[
            'max-w-[80%] rounded-2xl px-4 py-2 break-words',
            message.isBot ? 'bg-gray-100 text-gray-800 self-start rounded-tl-sm' : 'bg-blue-600 text-white self-end rounded-br-sm'
          ]">
            {{ message.text }}
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
        <div class="grid grid-cols-2 gap-2 mb-4">
          <button 
            v-for="action in quickActions" 
            :key="action.text"
            @click="sendMessage(action.text)"
            class="px-4 py-2 text-sm text-gray-700 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
          >
            {{ action.text }}
          </button>
        </div>
        
        <!-- Chat Input -->
        <div class="flex items-center space-x-2">
          <input 
            v-model="userInput"
            @keyup.enter="sendMessage()"
            type="text"
            placeholder="Ask about AI tools..."
            class="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          >
          <button 
            @click="sendMessage()"
            class="p-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface ChatMessage {
  text: string
  isBot: boolean
}

interface QuickAction {
  text: string
}

const isChatOpen = ref(false)
const userInput = ref('')
const chatMessages = ref<ChatMessage[]>([
  {
    text: "Hello! I'm your AI assistant. I can help you find the right AI tools for your needs. What would you like to know?",
    isBot: true
  }
])
const messagesContainer = ref<HTMLElement | null>(null)

const quickActions: QuickAction[] = [
  { text: "What AI tools are available?" },
  { text: "How do I get started?" },
  { text: "Show me popular tools" },
  { text: "I need help choosing" }
]

const sendMessage = async (text?: string) => {
  const messageText = text || userInput.value
  if (!messageText.trim()) return

  // Add user message
  chatMessages.value.push({
    text: messageText,
    isBot: false
  })

  userInput.value = ''

  // Simulate AI response
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }

  // Add bot response after a short delay
  setTimeout(() => {
    chatMessages.value.push({
      text: getBotResponse(messageText),
      isBot: true
    })
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    })
  }, 1000)
}

const getBotResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase()
  
  if (lowerMessage.includes('available') || lowerMessage.includes('tools')) {
    return "We have several AI tools available: Natural Language Processing, Computer Vision, Predictive Analytics, and Chatbots. Which area interests you?"
  }
  
  if (lowerMessage.includes('started')) {
    return "To get started, I recommend checking out our Training section first. Would you like me to show you some beginner-friendly tools?"
  }
  
  if (lowerMessage.includes('popular')) {
    return "Our most popular tools are the Document Analysis AI, Chatbot Builder, and Predictive Analytics Suite. Would you like to learn more about any of these?"
  }
  
  if (lowerMessage.includes('help') || lowerMessage.includes('choosing')) {
    return "I can help you choose the right tool. Could you tell me what kind of task you're trying to accomplish?"
  }
  
  return "I'd be happy to help you with that. Could you provide more details about what you're looking to achieve?"
}
</script>

<style scoped>
/* Add subtle animation to the gradient orbs */
@keyframes gradientShift {
  0% { transform: translate(0, 0); }
  50% { transform: translate(-20px, 20px); }
  100% { transform: translate(0, 0); }
}

.gradient-orb {
  animation: gradientShift 15s ease-in-out infinite;
}

/* Chat animations */
.translate-y-4 {
  transform: translateY(1rem);
}

/* Custom scrollbar for chat messages */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #E2E8F0 #F8FAFC;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #F8FAFC;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #E2E8F0;
  border-radius: 3px;
}
</style> 