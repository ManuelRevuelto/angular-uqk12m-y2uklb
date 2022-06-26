export interface Project {
  id: number;
  name: string;
  src: string,
  descriptionES: string,
  descriptionEN: string,
  label: string;
  longitud: number;
  direcctiones: string[]
}

export const projects = [
  {
    id: 1,
    name: 'Campaña Body Positive',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/free-3-poster-mockup-psd-29382.jpg',
    descriptionES: '',
    descriptionEN: '',
    label:'CampañaBodyPositive',
    longitud: 1,
    direcctiones: ['assets/Imagenes/01.CampañaBodyPositive/01.bodypositive.jpg']
  },
  {
    id: 2,
    name: 'Campaña reciclaje',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/free-modern-a3-poster-mockup10721.jpg',
    descriptionES: 'Este proyecto consistía en diseñar los elementos para una campaña de reciclaje. El objetivo es concienciar tanto a niños como adultos. \n Se trata de un trabajo grupal realizado junto a Irene Otero y Sara Pedraza.',
    descriptionEN: 'This project consisted of designing the elements for a recycling campaign. The objective of this is to educate both children and adults. \n It is a group work carried out together with Irene Otero and Sara Pedraza.',
    label:'CampañaReciclaje',
    longitud: 5,
    direcctiones: ['assets/Imagenes/02.CampañaReciclaje/01.reciclaje.jpg','assets/Imagenes/02.CampañaReciclaje/02.reciclaje.jpg','assets/Imagenes/02.CampañaReciclaje/03.reciclaje.jpg','assets/Imagenes/02.CampañaReciclaje/04.reciclaje.jpg','assets/Imagenes/02.CampañaReciclaje/05.reciclaje.jpg',]
  },
  {
    id: 3,
    name: 'Botella Carenoveau',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/wine-bottle-mockups-179610.jpg',
    descriptionES: 'Diseño del tape y la etiqueta para una botella de vino borgoña. Como se puede observar los tonos de los colores que aparecen en la etiqueta pretenden recordar al sabor afrutado que tiene este vino, aparece un rostro ya que es el símbolo distintivo de la marca.',
    descriptionEN: 'Design of cup and label for a burgundy wine bottle. ',
    label:'BotellaCarenoveau',
    longitud: 3,
    direcctiones: ['assets/Imagenes/03.BotellaCarenoveau/01.vino.png','assets/Imagenes/03.BotellaCarenoveau/02.vino.png','assets/Imagenes/03.BotellaCarenoveau/03.vino.png']
  },
  {
    id: 4,
    name: 'Cartel Fiestas del Pilar',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/pilar-m76023.jpg',
    descriptionES: 'Esta ha sido mi propuesta para el cartel promocional de las Fiestas del Pilar 2020. Decidí enfocarlo en el evento más significativo de estas fiestas, el cual es la ofrenda de flores.',
    descriptionEN: 'This has been mi proposal for the promotional poster of the local festivities. I decided to focus it on the most significant event of these holidays, which is the flower offering.',
    label:'CartelFiestasPilar',
    longitud: 3,
    direcctiones: ['assets/Imagenes/04.CartelFiestasDelPilar/01.pilar.jpg','assets/Imagenes/04.CartelFiestasDelPilar/02.pilar.jpg','assets/Imagenes/04.CartelFiestasDelPilar/03.pilar.jpg']
  },
  {
    id: 5,
    name: 'Espécimen Tipográfico',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/mockup-330482.jpg',
    descriptionES: 'Para este proyecto he creado una tipografía inspirada en las inscripciones que se pueden encontrar en algunas ruinas romanas. Es una tipografía con modulación y serifas.',
    descriptionEN: 'For this project I created a typeface inspired by the inscriptions that can be found in some Roman ruins. \n This is a type with modulation and serifs.',
    label:'EspecimenTipografico',
    longitud: 5,
    direcctiones: ['assets/Imagenes/05.EspecimenTipografico/01.tipo.jpg','assets/Imagenes/05.EspecimenTipografico/02.tipo.jpg','assets/Imagenes/05.EspecimenTipografico/03.tipo.jpg','assets/Imagenes/05.EspecimenTipografico/04.tipo.jpg','assets/Imagenes/05.EspecimenTipografico/05.tipo.jpg',]
  },
  {
    id: 6,
    name: 'CalmKids',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/039619.jpg',
    descriptionES: 'Para este proyecto he creado 3 ilustraciones y las he aplicado tanto a latas como a camisetas.',
    descriptionEN: 'For this project I have created 3 illustrations and I have apply them to tins and tshirts.',
    label:'CalmKids',
    longitud: 5,
    direcctiones: ['assets/Imagenes/06.CalmKids/0.jpg','assets/Imagenes/06.CalmKids/1.jpg','assets/Imagenes/06.CalmKids/2.jpg','assets/Imagenes/06.CalmKids/3.jpg','assets/Imagenes/06.CalmKids/4.jpg']
  },
  {
    id: 7,
    name: 'Cubiertas de Libros Infantiles',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/039619.jpg',
    descriptionES: 'Diseño de cubiertas de libros infantiles de algunos cuentos clasicos de Charles Perrault',
    descriptionEN: 'Design of children\'s book covers of some classic tales by Charles Perrault.',
    label:'CubiertasLibrosInfantiles',
    longitud: 4,
    direcctiones: ['assets/Imagenes/07.CubiertasLibrosInfantiles/01.libros.jpg','assets/Imagenes/07.CubiertasLibrosInfantiles/02.libros.jpg','assets/Imagenes/07.CubiertasLibrosInfantiles/03.libros.jpg','assets/Imagenes/07.CubiertasLibrosInfantiles/04.libros.jpg']
  },
  {
    id: 8,
    name: 'Airforce Wallpapers',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/aaiphone-13-front-0223806.jpg',
    descriptionES: '',
    descriptionEN: '',
    label:'AirforceWallpapers',
    longitud: 5,
    direcctiones: ['assets/Imagenes/08.AirforceWallpapers/01.airforce.png','assets/Imagenes/08.AirforceWallpapers/02.airforce.png','assets/Imagenes/08.AirforceWallpapers/03.airforce.png','assets/Imagenes/08.AirforceWallpapers/04.airforce.png','assets/Imagenes/08.AirforceWallpapers/05.airforce.png']
  },
  {
    id: 9,
    name: 'Portada CD Cráneo',
    src: 'assets/Imagenes/09.PortadaCraneo/01.craneo.png',
    descriptionES: '',
    descriptionEN: '',
    label:'PortadaCraneo',
    longitud: 2,
    direcctiones: ['assets/Imagenes/09.PortadaCraneo/01.craneo.png','assets/Imagenes/09.PortadaCraneo/02.craneo.jpg']
  },
  {
    id: 10,
    name: 'Folleto Vivero',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/psd544092.jpg',
    descriptionES: 'Este folleto ha sido diseñado para promocionar un vivero floral el cual ofrece una gran variedad de productos.',
    descriptionEN: 'This brochure has been designed to promote a floral nursery which offers a wide variety of products.',
    label:'FolletoVivero',
    longitud: 3,
    direcctiones: ['assets/Imagenes/10.FolletoVivero/01.vivero.jpg','assets/Imagenes/10.FolletoVivero/02.vivero.jpg','assets/Imagenes/10.FolletoVivero/03.vivero.jpg']
  },
  {
    id: 11,
    name: 'Cartel de San Jorge',
    src: 'assets/Imagenes/11.CartelSanJorge/01.sanJorge.jpg',
    descriptionES: '',
    descriptionEN: '',
    label:'CartelSanJorge',
    longitud: 2,
    direcctiones: ['assets/Imagenes/11.CartelSanJorge/01.sanJorge.jpg','assets/Imagenes/11.CartelSanJorge/02.sanJorge.jpg',]
  },
  {
    id: 12,
    name: 'Linograbado',
    src: 'https://www.esda.es/resize/400x300_crop/files/images/u709/mockup-586798.jpg',
    descriptionES: '',
    descriptionEN: 'Book cover created from a linographic design that I created.',
    label:'Linograbado',
    longitud: 2,
    direcctiones: ['assets/Imagenes/12.Linograbado/01.linograbado.png','assets/Imagenes/12.Linograbado/02.linograbado.jpg']
  },
];

