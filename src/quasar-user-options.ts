
import './styles/quasar.sass'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/mdi-v4/mdi-v4.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Notify } from 'quasar';

// To be used on app.use(Quasar, { ... })
export default {
  config: {},
  plugins: {
    Notify
  }
}