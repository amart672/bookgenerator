import router from '@/router'
import { ref } from 'vue'
const dbUsers = [
  {
    username: 'admin',
    password: 'admin',
    name: 'Admin',
    role: 'admin',
  },
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
  const login = (username, password) => {
    const dbUser = dbUsers.find((u) => u.username === username && u.password === password)
    if (dbUser) {
      const { name, role, username } = dbUser
      isAuthenticated.value = true
      user.value = { name, role, username }
      return true
    }
    return false
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = {}
    router.push({ name: 'Home' })
  }
  return { isAuthenticated, user, login, logout }
}
