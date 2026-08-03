const fs = require('fs')
const path = require('path')

// Vue CLI exposes VUE_APP_* prefixed env vars to process.env at build time.
// Falls back to the checked-in demo client key so `npm run build` works with zero setup.
const key = process.env.VUE_APP_FM_KEY || '6ae5a929-4cf5-4233-71f9-16307e6f2414'

const contents = `window.APP_CONFIG = {\n  FM_KEY: "${key}",\n};\n`

fs.writeFileSync(path.join(__dirname, '..', 'public', 'config.js'), contents)
console.log('Generated public/config.js')
