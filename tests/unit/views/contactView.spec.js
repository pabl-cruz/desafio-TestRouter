import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '@/views/ContactView.vue'



describe('ContactView', () => { 
    
    it('captura de contenido HTML en prueba y contrasta', () => {
        const wrapper = mount(ContactView)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Probando la existencia de vista ContactView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/contact',
                name: 'ContactView',
                component: ContactView
            }],
        })
        router.push('/contact')
        await router.isReady()

        const wrapper = mount(ContactView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(ContactView).exists()).toBe(true)
    })  

    test('Está presente formulario', async ()=> {
        const wrapper = mount(ContactView)
        const form = wrapper.find('form')
        expect(form.exists()).toBe(true)
    })
 })