import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
    const wrapper = shallowMount(HomeView)
    it('captura de contenido HTML en prueba y contrasta', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})

test('Comprobando ruta a la vista Homeview', async () => {
    const routerTest = createRouter({
        history: createWebHistory(),
        routes: [{
            path: '/home',
            name: 'home',
            component: HomeView
        }
        ]
    })
    routerTest.push('./home')
    await routerTest.isReady()
    const wrapper = shallowMount(HomeView, {
        global: {
            plugins: [routerTest]
        }
    })
    expect(wrapper.findComponent(HomeView).exists()).toBeTruthy()
})
