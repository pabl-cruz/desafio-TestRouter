import { shallowMount } from '@vue/test-utils'

import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
    const wrapper = shallowMount(HomeView)
    it('captura de contenido HTML en prueba', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})