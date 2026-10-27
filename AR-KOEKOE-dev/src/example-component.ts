const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/Cazuela_De_Mariscos.json'),
      require('../image-targets/Sancocho_De_Pobre_.json')
      require('../image-targets/Sopa_De_Zapallo.json'),
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
