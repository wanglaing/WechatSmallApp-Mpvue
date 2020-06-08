
const ServiceContext = require.context('./module/', true, /\.js$/)
const Service = {}
ServiceContext.keys().forEach((key) => {
  const ServiceName = key.split('/').pop().replace(/\.\w+$/, '')
  Service[ServiceName] = ServiceContext(key)
})
export default {
  Service
}
