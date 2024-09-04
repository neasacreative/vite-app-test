import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding, faCode, faIdCard, faEnvelope, faPhone, faUsers, faInfoCircle, faUser, faSignOutAlt, faSignInAlt, faBars, faTimes, faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './index.css'


library.add(faBuilding, faCode, faIdCard, faEnvelope, faPhone, faUsers, faInfoCircle, faUser, faSignOutAlt, faSignInAlt, faBars, faTimes, faPlus, faEdit, faTrashAlt)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
