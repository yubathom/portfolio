export default function ({ $axios }, inject) {
  const yubathom = $axios.create({ baseURL: 'https://api.github.com/users/yubathom/' })
  inject('yubathom', yubathom)
}
