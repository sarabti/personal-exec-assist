export default function (code) {
  switch(code) {
    case 0:  return 'Clear Sky'
    case 1:  return 'Mainly Clear'
    case 2:  return 'Partly Cloudy'
    case 3:  return 'Partly Cloudy'
    case 45: return 'Foggy'
    case 48: return 'Foggy'
    case 51: return 'Light Drizzle'
    case 53: return 'Moderate Drizzle'
    case 55: return 'Dense Drizzle'
    case 56: return 'Light Freezing Drizzle'
    case 57: return 'Dense Freezing Drizzle'
    case 61: return 'Slight Rain'
    case 63: return 'Moderate Rain'
    case 65: return 'Heavy Rain'
    case 66: return 'Light Freezing Rain'
    case 67: return 'Heavy Freezing Rain'
  }
  return undefined
}
