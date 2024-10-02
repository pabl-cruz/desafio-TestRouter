import { shallowMount } from '@vue/test-utils'

import About from '@/components/About.vue'

describe('HomeView', () => {
    const wrapper = shallowMount(About)
    it('captura de contenido HTML en prueba', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})