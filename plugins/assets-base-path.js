export default (context, inject) => {
  const assetsBasePath = process.env.assetsBasePath
  inject('assetsBasePath', assetsBasePath)
}
