<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
    <!-- Profile Header -->
    <div class="relative bg-gradient-to-b from-blue-100 to-white py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <!-- Profile Image and Basic Info -->
          <div class="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div class="relative group">
              <div class="w-32 h-32 rounded-full overflow-hidden bg-blue-100 border-4 border-white shadow-lg">
                <img 
                  v-if="userProfile.photoURL" 
                  :src="userProfile.photoURL" 
                  :alt="userProfile.displayName"
                  class="w-full h-full object-cover"
                >
                <div v-else class="w-full h-full flex items-center justify-center bg-blue-100">
                  <span class="text-4xl font-semibold text-blue-500">
                    {{ userProfile.displayName ? userProfile.displayName[0].toUpperCase() : 'U' }}
                  </span>
                </div>
              </div>
              <button 
                @click="uploadPhoto"
                class="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            <div class="text-center sm:text-left">
              <h1 class="text-3xl font-semibold text-gray-900">{{ userProfile.displayName || 'User Profile' }}</h1>
              <p class="text-gray-600">{{ userProfile.title || 'AI Enthusiast' }}</p>
              <p class="text-gray-500 text-sm mt-1">Member since {{ formatDate(userProfile.createdAt) }}</p>
            </div>
          </div>

          <!-- Gamification Stats -->
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Level Card -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Level {{ userProfile.gamification.level }}</h3>
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Progress to Level {{ userProfile.gamification.level + 1 }}</span>
                  <span class="font-medium text-blue-600">{{ userProfile.gamification.xp }}/{{ userProfile.gamification.xpToNextLevel }} XP</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    :style="{ width: `${(userProfile.gamification.xp / userProfile.gamification.xpToNextLevel) * 100}%` }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Achievements Card -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Achievements</h3>
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <div class="flex gap-2">
                <div v-for="badge in userProfile.gamification.badges" :key="badge.id" class="group relative">
                  <div 
                    class="w-10 h-10 rounded-lg"
                    :class="badge.unlocked ? 'bg-blue-100' : 'bg-gray-100'"
                  >
                    <img v-if="badge.icon" :src="badge.icon" :alt="badge.name" class="w-6 h-6 m-2">
                  </div>
                  <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {{ badge.name }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Skills Card -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">AI Skills</h3>
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div class="space-y-3">
                <div v-for="skill in userProfile.gamification.skills" :key="skill.name" class="space-y-1">
                  <div class="flex justify-between text-sm">
                    <span class="text-gray-600">{{ skill.name }}</span>
                    <span class="font-medium text-blue-600">Level {{ skill.level }}</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      class="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                      :style="{ width: `${(skill.progress / skill.maxProgress) * 100}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white rounded-xl shadow-sm p-6 border border-blue-100">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Recent XP</h3>
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div class="space-y-3">
                <div v-for="activity in userProfile.gamification.recentActivities" :key="activity.id" class="flex items-center justify-between text-sm">
                  <span class="text-gray-600">{{ activity.description }}</span>
                  <span class="font-medium text-blue-600">+{{ activity.xp }} XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Content -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Sidebar -->
        <div class="lg:col-span-1">
          <nav class="space-y-1">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="currentTab = tab.id"
              :class="[
                'w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150',
                currentTab === tab.id 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-50'
              ]"
            >
              <component :is="tab.icon" class="w-5 h-5 mr-3" />
              {{ tab.name }}
            </button>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Personal Information -->
          <div v-if="currentTab === 'personal'" class="bg-white rounded-2xl shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">Personal Information</h2>
            <form @submit.prevent="updateProfile" class="space-y-6">
              <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Display Name</label>
                  <input 
                    v-model="userProfile.displayName"
                    type="text"
                    class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Title</label>
                  <input 
                    v-model="userProfile.title"
                    type="text"
                    class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    v-model="userProfile.email"
                    type="email"
                    class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea 
                    v-model="userProfile.bio"
                    rows="4"
                    class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
              <div class="flex justify-end">
                <button 
                  type="submit"
                  class="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <!-- AI Projects -->
          <div v-if="currentTab === 'projects'" class="bg-white rounded-2xl shadow-sm p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-semibold text-gray-900">AI Projects</h2>
              <button 
                @click="createNewProject"
                class="inline-flex items-center px-3 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                New Project
              </button>
            </div>
            
            <div class="space-y-4">
              <div 
                v-for="project in userProfile.projects" 
                :key="project.id"
                class="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors duration-150"
              >
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-base font-medium text-gray-900">{{ project.name }}</h3>
                  <p class="text-sm text-gray-500">{{ project.description }}</p>
                  <div class="mt-2 flex items-center space-x-4">
                    <span class="text-xs text-gray-500">Last updated {{ formatDate(project.updatedAt) }}</span>
                    <span class="text-xs px-2 py-1 rounded-full" :class="getStatusClass(project.status)">
                      {{ project.status }}
                    </span>
                  </div>
                </div>
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Settings -->
          <div v-if="currentTab === 'settings'" class="bg-white rounded-2xl shadow-sm p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6">Settings</h2>
            <div class="space-y-6">
              <!-- Notification Settings -->
              <div>
                <h3 class="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input 
                        v-model="userProfile.settings.emailNotifications"
                        type="checkbox"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      >
                    </div>
                    <div class="ml-3">
                      <label class="text-sm font-medium text-gray-700">Email Notifications</label>
                      <p class="text-sm text-gray-500">Receive updates about your projects and AI tools</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input 
                        v-model="userProfile.settings.projectUpdates"
                        type="checkbox"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      >
                    </div>
                    <div class="ml-3">
                      <label class="text-sm font-medium text-gray-700">Project Updates</label>
                      <p class="text-sm text-gray-500">Get notified about changes to your AI projects</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Privacy Settings -->
              <div class="pt-6 border-t border-gray-200">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Privacy</h3>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input 
                        v-model="userProfile.settings.publicProfile"
                        type="checkbox"
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      >
                    </div>
                    <div class="ml-3">
                      <label class="text-sm font-medium text-gray-700">Public Profile</label>
                      <p class="text-sm text-gray-500">Make your profile visible to other users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UserIcon, FolderIcon, CogIcon } from '../components/icons'

interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'archived'
  updatedAt: Date
}

interface UserProfile {
  displayName: string
  photoURL: string | null
  title: string
  email: string
  bio: string
  createdAt: Date
  projects: Project[]
  settings: {
    emailNotifications: boolean
    projectUpdates: boolean
    publicProfile: boolean
  }
  gamification: {
    level: number
    xp: number
    xpToNextLevel: number
    badges: Array<{
      id: string
      name: string
      icon?: string
      unlocked: boolean
    }>
    skills: Array<{
      name: string
      level: number
      progress: number
      maxProgress: number
    }>
    recentActivities: Array<{
      id: string
      description: string
      xp: number
      timestamp: Date
    }>
  }
}

// Mock user profile data
const userProfile = ref<UserProfile>({
  displayName: 'John Doe',
  photoURL: null,
  title: 'AI Research Specialist',
  email: 'john.doe@alberta.ca',
  bio: 'Passionate about implementing AI solutions in government services.',
  createdAt: new Date('2024-01-01'),
  projects: [
    {
      id: '1',
      name: 'Document Analysis AI',
      description: 'Automated document processing system for government forms',
      status: 'active',
      updatedAt: new Date('2024-03-01')
    },
    {
      id: '2',
      name: 'Chatbot Implementation',
      description: 'AI-powered customer service chatbot',
      status: 'completed',
      updatedAt: new Date('2024-02-15')
    }
  ],
  settings: {
    emailNotifications: true,
    projectUpdates: true,
    publicProfile: false
  },
  gamification: {
    level: 5,
    xp: 2750,
    xpToNextLevel: 5000,
    badges: [
      {
        id: 'first-project',
        name: 'Project Pioneer',
        unlocked: true
      },
      {
        id: 'ml-basics',
        name: 'ML Foundations',
        unlocked: true
      },
      {
        id: 'ai-ethics',
        name: 'Ethics Champion',
        unlocked: true
      },
      {
        id: 'data-master',
        name: 'Data Master',
        unlocked: false
      }
    ],
    skills: [
      {
        name: 'Machine Learning',
        level: 3,
        progress: 75,
        maxProgress: 100
      },
      {
        name: 'Natural Language Processing',
        level: 2,
        progress: 45,
        maxProgress: 100
      },
      {
        name: 'Computer Vision',
        level: 1,
        progress: 90,
        maxProgress: 100
      }
    ],
    recentActivities: [
      {
        id: '1',
        description: 'Completed ML Basics Course',
        xp: 500,
        timestamp: new Date('2024-03-01')
      },
      {
        id: '2',
        description: 'Implemented First AI Model',
        xp: 250,
        timestamp: new Date('2024-02-28')
      },
      {
        id: '3',
        description: 'Earned Ethics Champion Badge',
        xp: 300,
        timestamp: new Date('2024-02-27')
      }
    ]
  }
})

const tabs = [
  {
    id: 'personal',
    name: 'Personal Information',
    icon: UserIcon
  },
  {
    id: 'projects',
    name: 'AI Projects',
    icon: FolderIcon
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: CogIcon
  }
]

const currentTab = ref('personal')

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

const getStatusClass = (status: string): string => {
  const classes = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    archived: 'bg-gray-100 text-gray-800'
  }
  return classes[status as keyof typeof classes] || ''
}

const updateProfile = async () => {
  // TODO: Implement profile update logic
  console.log('Updating profile:', userProfile.value)
}

const uploadPhoto = () => {
  // TODO: Implement photo upload logic
  console.log('Uploading photo')
}

const createNewProject = () => {
  // TODO: Implement new project creation logic
  console.log('Creating new project')
}
</script> 