 // Menu desplegable
 function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}
 // Tamaño de foto
function zoomIn(element) {
  element.style.transform = "scale(1.9)";
}
function zoomOut(element) {
  element.style.transform = "scale(1)";
}




//Galeria de fotos

class PhotoGallery {
  constructor(galleryId, initialIndex = 0) {
    this.galleryId = galleryId;
    this.currentIndex = initialIndex;
    this.images = [];
  }

  initialize() {
    const galleryContainer = document.getElementById(this.galleryId);
    if (!galleryContainer) {
      console.error(`Galería con ID '${this.galleryId}' no encontrada.`);
      return;
    }

    const prevButton = galleryContainer.querySelector('.prev');
    const nextButton = galleryContainer.querySelector('.next');

    if (prevButton && nextButton) {
      prevButton.addEventListener('click', () => this.changeImage(-1));
      nextButton.addEventListener('click', () => this.changeImage(1));
    }

    this.showCurrentImage();
  }

  addImage(imageUrl) {
    this.images.push(imageUrl);
  }

  changeImage(direction) {
    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    } else if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }

    this.showCurrentImage();
  }

  showCurrentImage() {
    const galleryContainer = document.getElementById(this.galleryId);
    const galleryImage = galleryContainer.querySelector('.gallery-image');

    if (galleryImage) {
      galleryImage.src = this.images[this.currentIndex];
    }
  }
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
  const gallery1 = new PhotoGallery('gallery1');
  gallery1.addImage('https://media.istockphoto.com/id/1221460597/es/foto/tranvía-vintage-amarillo-en-la-calle-en-lisboa-portugal.jpg?s=612x612&w=0&k=20&c=xK9nlS8_OIWRqBeRbJCwHDTlOfmXxmwxYTQ01hToCIc=');
  gallery1.addImage('https://images.hola.com/imagenes/viajes/20230104224053/que-hacer-invierno-lisboa-portugal/1-186-184/lisboa-e-invierno-m.jpg?tx=w_680');
  gallery1.addImage('https://media.vogue.es/photos/61f26bc60f919de502805892/1:1/w_3743,h_3743,c_limit/GettyImages-655532174.jpg');
  gallery1.initialize();

  const gallery2 = new PhotoGallery('gallery2');
  gallery2.addImage('https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/st/gadmin/images/village/winter/dorf_zermatt_winter_28413.jpg');
  gallery2.addImage('https://www.zermatt.ch/extension/portal-zermatt/var/storage/images/media/bibliothek/aktivitaeten/winter/sonnenparadise-rothorn-genuss-beim-skifahren/57177-3-ger-DE/Sonnenparadise-Rothorn-Genuss-beim-Skifahren_grid_700x365.jpg');
  gallery2.addImage('https://media.istockphoto.com/id/1219100241/es/foto/casco-antiguo-con-corriente-rocosa-de-zermatt-suiza.jpg?s=612x612&w=0&k=20&c=DpWtzrwMgckb6eNdJ99OSaPE5ppnYcLFLrVHq6bQYsA=');
  gallery2.initialize();

  const gallery3 = new PhotoGallery('gallery3');
  gallery3.addImage('https://www.italia.it/content/dam/tdh/es/interests/lazio/roma/roma-in-48-ore/media/20220127150143-colosseo-roma-lazio-shutterstock-756032350.jpg');
  gallery3.addImage('https://blog-italia.com/wp-content/uploads/2022/11/roma-vaticano-viajar.jpg');
  gallery3.addImage('https://images.ecestaticos.com/4vk9bkcWOITJwHWN_MhqkwDfxVA=/0x13:1494x854/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fdae%2F7b7%2F861%2Fdae7b7861c3285b03b9f6555878c8c53.jpg');
  gallery3.initialize();

  const gallery4 = new PhotoGallery('gallery4');
  gallery4.addImage('https://www.civitatis.com/blog/wp-content/uploads/2022/05/guia-islas-lofoten.jpg');
  gallery4.addImage('https://www.revistamasviajes.com/wp-content/uploads/2019/10/Islas-Lofoten-Noruega-©-Christian-Bothner©-Visit-Norway.jpg');
  gallery4.addImage('https://live.staticflickr.com/65535/47923686751_f97091cab2_z.jpg');
  gallery4.initialize();

  const gallery5 = new PhotoGallery('gallery5');
  gallery5.addImage('https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg');
  gallery5.addImage('https://www.elnacional.cat/uploads/s1/16/34/37/14/nygrande.gif');
  gallery5.addImage('https://www.civitatis.com/blog/wp-content/uploads/2016/05/Estatua-de-la-Libertad.jpg');
  gallery5.initialize();

  const gallery6 = new PhotoGallery('gallery6');
  gallery6.addImage('https://www.cancunadventure.net/images/mayanruins/tulum.jpg');
  gallery6.addImage('https://a.cdn-hotels.com/gdcs/production32/d1733/a7b6bbfc-1602-4860-a1e8-cfdeb92e4459.jpg?impolicy=fcrop&w=800&h=533&q=medium');
  gallery6.addImage('https://www.tulum-tours.com/images/tulum-tortugas/header-tulum-tortugas-nadando-nuevo.jpg');
  gallery6.initialize();
});