import Favs from '../pages/Favs'
import Result from '../pages/Result'

export default {
  mode: 'history',
  routes: [
    {
      path: '/', component: Result, name: 'result'
    },
    {
      path: '/favs', component: Favs, name: 'favs'
    }
  ]
}
