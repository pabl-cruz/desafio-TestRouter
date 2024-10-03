import { shallowMount } from '@vue/test-utils'

import About from '@/components/About.vue'

describe('AboutView', () => {
    it('captura de contenido HTML en prueba', () => {
        const wrapper = shallowMount(About)
        expect(wrapper.html()).toMatchSnapshot()
    })
})