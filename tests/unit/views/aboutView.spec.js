import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'


describe('AboutView', () => { 

    it('captura de contenido HTML en prueba y contrasta', () => {
        const wrapper = mount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Probando la existencia de vista AboutView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'AboutView',
                component: AboutView
            }],
        })
        router.push('/about')
        await router.isReady()

        const wrapper = mount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })  

    test('Existe titulo h1 en HTML', async ()=> {
        const wrapper = mount(AboutView)
        const h1 = wrapper.find('h1')
        expect(h1.exists()).toBe(true)
    })

    test('Hay 2 parrafos', async ()=> {
        const wrapper = mount(AboutView)
        const paragraph = wrapper.findAll('p')
        expect(paragraph.length).toBe(2)
    })
 })