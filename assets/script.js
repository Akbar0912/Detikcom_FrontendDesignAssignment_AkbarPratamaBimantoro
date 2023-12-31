const tabBerita = document.querySelectorAll('#artikel #tab li')
const fotoBerita = document.querySelectorAll('#artikel #foto')
const videoBerita = document.querySelectorAll('#artikel #video')

tabBerita.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabBerita.forEach((item) => {
      item.classList.remove('active')
    })
    tab.classList.add('active')

    // active foto & video
    fotoBerita.forEach((foto) => {
      videoBerita.forEach((video) => {
        if (index == 1) {
          foto.classList.remove('d-none')
          video.classList.add('d-none')
        } else if (index == 2) {
          foto.classList.add('d-none')
          video.classList.remove('d-none')
        } else {
          foto.classList.add('d-none')
          video.classList.add('d-none')
        }
      })
    })
  })
})