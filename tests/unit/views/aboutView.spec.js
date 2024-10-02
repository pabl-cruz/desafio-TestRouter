import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/PostsView.vue'



describe('AboutView', () => { 
    test('Probando la existencia de vista PostsView ', async () => {
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
 })