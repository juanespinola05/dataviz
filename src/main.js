import './style.css'
import './clash-display.css'
import 'https://cdn.jsdelivr.net/npm/motion@11.11.13/dist/motion.js'

const { animate } = Motion

const FLOWCHART_EMBED = `
<script src="https://public.flourish.studio/resources/embed.js"></script>
  <noscript>
    <img src="https://public.flourish.studio/visualisation/FLOW_CHART_ID/thumbnail" width="100%" alt="chart visualization" />
  </noscript>`

const tabs = {
  1990: {
    bgColor: '#12475e',
    textColor: 'white',
    title: 'Nacimiento de las leyendas',
    description:
      'Los años 90 en la Fórmula 1 fueron un campo de batalla donde se forjaron las leyendas. La década inició con el reinado de Ayrton Senna, cuyo talento sublime y duelos épicos marcaron una época dorada, pero también nos recordó lo frágil que puede ser la grandeza. Fue una era de transición tecnológica, donde los avances en aerodinámica y electrónica redefinieron la competición. Las rivalidades, como las de Schumacher y Hill, alimentaron la pasión de los fanáticos, mientras nuevos campeones como Mika Häkkinen emergieron para escribir sus nombres en la historia. Cada temporada trajo drama, emoción y la constante búsqueda de velocidad absoluta, consolidando los 90 como un capítulo inolvidable en el libro de la Fórmula 1.',
    mainImage: 'assets/1990-williams.png',
    logo: 'assets/williams.png',
    team: 'WILLIAMS',
    pilotBanner: 'assets/pilot-1990.png',
    datawrapperId: 'L87jf',
    carTitle: 'El Primer Hito Revolucionario',
    flowChartTitle: 'Senna: Rey del principado y maestro de la precisión',
    flowChartText: 'Ayrton Senna marcó la Fórmula 1 en los años 90 con su talento incomparable, carisma y determinación. Este gráfico refleja su desempeño carrera tras carrera hasta 1994, año en el que su vida terminó trágicamente en un accidente durante el Gran Premio de San Marino. Cada línea representa una temporada y muestra tanto sus victorias y derrotas. Sus logros incluyen tres campeonatos mundiales y momentos memorables que lo consolidaron como un ícono  eterno del automovilismo.',
    flowChartId: '20570741'
  },
  2000: {
    bgColor: '#ba2525',
    textColor: 'white',
    title: 'El Reinado Absoluto',
    description:
      'La Fórmula 1 en los 2000 estuvo marcada por la dominación absoluta de Michael Schumacher y Ferrari. Este fue el período en el que los récords se rompieron con una facilidad desconcertante, estableciendo nuevos estándares de excelencia en el automovilismo. Mientras Ferrari tejía su legado con cinco títulos consecutivos, otras estrellas como Fernando Alonso y Kimi Räikkönen desafiaron el trono, anunciando el cambio de guardia. La década también fue testigo de avances tecnológicos que transformaron la competición, desde neumáticos personalizados hasta la llegada del KERS. Cada carrera era un espectáculo donde la velocidad, la estrategia y el espíritu de competencia elevaban la Fórmula 1 a niveles nunca antes vistos.',
    mainImage: 'assets/2000-ferrari.png',
    logo: 'assets/ferrari.png',
    team: 'FERRARI',
    pilotBanner: 'assets/pilot-2000.png',
    datawrapperId: 'N1sSr',
    carTitle: 'La Era de la eficiencia aerodinámica',
    flowChartTitle: 'Schumacher: El Káiser de Ferrari',
    flowChartText: 'Michael Schumacher definió los años 2000 como el piloto más exitoso de su época. Este gráfico abarca sus resultados en cada carrera hasta 2006, cuando se retiró por primera vez de la Fórmula 1 para competir en motociclismo de velocidad. Durante este periodo, Schumacher llevó a Ferrari a la cúspide del éxito con cinco títulos consecutivos entre 2000 y 2004. Las líneas de cada temporada muestran su consistencia y dominio absoluto, así como los pocos momentos en los que enfrentó derrotas. Su retiro marcó el fin de una era dorada para la escudería italiana.',
    flowChartId: '20571933'
  },
  2010: {
    bgColor: '#7bdde6',
    textColor: 'black',
    title: 'Revolución Tecnológica',
    description:
      'Los 2010 fueron un capítulo de revoluciones y hegemonías en la Fórmula 1. Con la introducción de los motores híbridos, la categoría abrazó un futuro más sostenible sin sacrificar la pasión y la intensidad. Sebastian Vettel, con su récord de cuatro títulos consecutivos, marcó la primera mitad de la década, pero luego fue Lewis Hamilton quien tomó el volante del destino, estableciendo una dinastía que redefinió la historia. Las rivalidades entre equipos y compañeros de escudería alcanzaron nuevas alturas, y las batallas estratégicas en la pista se volvieron tan fascinantes como las maniobras a alta velocidad. Fue una década que equilibró tradición e innovación, manteniendo viva la magia de la Fórmula 1.',
    mainImage: 'assets/2010-mercedes.png',
    logo: 'assets/mercedes.png',
    team: 'MERCEDES',
    pilotBanner: 'assets/pilot-2010.png',
    datawrapperId: 'C6xSi',
    carTitle: 'La revolución híbrida',
    flowChartTitle: 'Hamilton: El hammer de la era híbrida',
    flowChartText: 'Lewis Hamilton se convirtió en la figura central de la Fórmula 1 en la década de 2010, destacándose especialmente desde 2014 con la llegada de los motores híbridos y su asociación con Mercedes. Este gráfico refleja cómo lideró seis campeonatos mundiales durante este periodo, con una única interrupción en 2016, cuando su compañero Nico Rosberg logró superarlo. Las líneas de cada temporada capturan su impresionante dominio, reflejado en múltiples victorias y la capacidad de mantenerse competitivo frente a cualquier desafío.',
    flowChartId: '20609536'
  },
  2020: {
    bgColor: '#f7d156',
    textColor: 'black',
    title: 'Verstappen Invatible',
    description:
      'La década de 2020 está siendo testigo del surgimiento de una nueva generación de talentos que está reescribiendo la historia de la Fórmula 1. En un mundo cambiante, con desafíos globales que impactan incluso en el automovilismo, Max Verstappen ha tomado el protagonismo con una determinación feroz, consolidándose como uno de los grandes de la era moderna. Los equipos están más competitivos que nunca, con jóvenes promesas como Lando Norris y Charles Leclerc presionando para alcanzar la cima. Además, la tecnología sigue empujando los límites, con los monoplazas más avanzados jamás vistos en la historia. Los 2020 son la prueba de que la Fórmula 1 sigue evolucionando, manteniendo su esencia como el pináculo del deporte motor.',
    mainImage: 'assets/2020-redbull.png',
    logo: 'assets/redbull.png',
    team: 'RED BULL',
    pilotBanner: 'assets/pilot-2020.png',
    datawrapperId: 'kDbBw',
    carTitle: 'Máquinas de Precisión y sostenibilidad',
    flowChartTitle: 'Verstappen: Súper Max, dueño de la nueva era',
    flowChartText: 'Max Verstappen ha redefinido el dominio en la Fórmula 1 durante los años 2020. En la temporada 2023, alcanzó un nivel histórico al ganar 19 de las 21 carreras, con solo una victoria de un piloto que no pertenecía a Red Bull, demostrando un control absoluto del campeonato. Aunque en 2024 la competencia fue más reñida, con seis pilotos de otros equipos logrando múltiples victorias, Max volvió a consolidarse como campeón, reafirmando su lugar como el piloto más destacado de esta década. Cada línea en el gráfico muestra su consistencia y capacidad para mantenerse en la cima frente a cualquier desafío.',
    flowChartId: '20609708'
  }
}
const BASE_DATAWAPPER_URL = 'https://datawrapper.dwcdn.net'

const navItems = document.querySelectorAll('nav ul li')
const section = document.querySelector('section#main')
const title = section.querySelector('#main h2')
const description = section.querySelector('#description')
const team = section.querySelector('#team')
const mainImage = section.querySelector('.absolute')
const logoImage = section.querySelector('.w-72')
const pilotBanner = section.querySelector('#pilot-banner')
const contentContainer = section.querySelector('#content-container')
const pilotChart = section.querySelector('iframe')
const carTitle = document.querySelector('#car-title')
const carVideo = document.querySelector('#car-video')
const flowTitle = document.querySelector('#flow-title')
const flowText = document.querySelector('#flow-text')
const flowChart = document.querySelector('#flow-chart')

let activeTab = '1990'

function changeTab (year) {
  const {
    bgColor,
    textColor,
    title: newTitle,
    description: newDesc,
    mainImage: newMainImg,
    logo: newLogo,
    team: newTeam,
    pilotBanner: newPilotBanner,
    datawrapperId: newDatawrapperId,
    carTitle: newCarTitle,
    flowChartTitle: newFlowTitle,
    flowChartText: newFlowText,
    flowChartId: newFlowChartId
  } = tabs[year]

  animate(contentContainer, { backgroundColor: bgColor }, { duration: 0.2 })
  animate(section.querySelector('#main-content'), { x: '200%' }, { duration: 0.2 })
    .animations.at(-1).currentFinishedPromise.then((a) => {
      title.textContent = newTitle
      description.textContent = newDesc
      team.textContent = newTeam
      mainImage.src = newMainImg
      logoImage.src = newLogo
      pilotBanner.src = newPilotBanner
      pilotChart.src = `${BASE_DATAWAPPER_URL}/${newDatawrapperId}/1/`
      pilotChart.title = year
      carTitle.textContent = newCarTitle
      carVideo.src = `assets/auto${year}.mp4`
      flowTitle.textContent = newFlowTitle
      flowText.textContent = newFlowText
      toggleFlowChart(year)

      animate(section.querySelector('#main-content'), { x: '-100%', opacity: 0 })
      animate(section.querySelector('#main-content'), { x: '0', opacity: 1 }, { duration: 0.2 })
    })

  animate(title, { color: textColor }, { duration: 0.5 })
  animate(description, { color: textColor }, { duration: 0.5 })

  activeTab = year
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    const year = item.textContent.trim()
    if (year !== activeTab) {
      changeTab(year)
    }
  })
})
changeTab(1990)

// const playbackConst = 200
// const setHeight = document.getElementById('set-height')
// const videoSection = document.getElementById('car-section')
const vid = document.getElementById('car-video')
vid.defaultPlaybackRate = 4
// const triggerer = document.getElementById('car-trigger')
// const triggererStop = document.getElementById('car-trigger-stop')
// const carBlank = document.getElementById('car-blank')
// let rafId = null //
// let isPlaying = false

// vid.addEventListener('loadedmetadata', function () {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + 'px'
// })

// function scrollPlay () {
//   const rect = videoSection.getBoundingClientRect()

//   const relativeScrollY = Math.max(0, window.innerHeight - rect.top - 200)

//   const frameNumber = relativeScrollY / playbackConst
//   vid.currentTime = Math.min(frameNumber, vid.duration)
//   rafId = window.requestAnimationFrame(scrollPlay)
// }

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (!entry.isIntersecting) return
//       if (!isPlaying) {
//         vid.style.position = 'fixed'
//         vid.style.top = '0'
//         vid.style.bottom = '0'
//         vid.style.margin = 'auto'
//         carBlank.style.height = vid.getBoundingClientRect().height
//         scrollPlay()
//         isPlaying = true
//       } else {
//         isPlaying = false
//         vid.style.position = ''
//         carBlank.style.height = vid.getBoundingClientRect().height
//         vid.style.top = '0'

//         if (rafId) {
//           window.cancelAnimationFrame(rafId)
//           rafId = null
//         }
//       }
//     })
//   },
//   {
//     root: null,
//     threshold: 1.0
//   }
// )

// const observerStop = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         if (isPlaying) {
//           isPlaying = false
//           vid.style.position = 'absolute'
//           vid.style.top = 'auto'
//           vid.style.bottom = '0'
//           carBlank.style.height = vid.getBoundingClientRect().height

//           if (rafId) {
//             window.cancelAnimationFrame(rafId)
//             rafId = null
//           }
//         } else {
//           isPlaying = true
//           vid.style.position = 'fixed'
//           vid.style.top = '200px'
//           scrollPlay()
//         }
//       }
//     })
//   },
//   {
//     root: null,
//     threshold: 1.0
//   }
// )

// observerStop.observe(triggererStop)

// observer.observe(triggerer)

function toggleFlowChart (year) {
  const flowCharts = document.querySelectorAll('.flourish-embed')
  flowCharts.forEach((chart) => {
    if (chart.getAttribute('data-id') === 'colapinto') return
    chart.style.display = year == chart.getAttribute('data-id') ? 'block' : 'none'
  })
  const tables = document.querySelectorAll('.car-table')
  tables.forEach((table) => {
    table.style.display = table.getAttribute('id').includes(year) ? 'block' : 'none'
  })
}
