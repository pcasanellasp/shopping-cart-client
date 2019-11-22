export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    console.info('Making request to ' + config.url)
  })

  $axios.onResponse((response) => {
    console.info(`[${response.status}] ${response.request.path}`)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
