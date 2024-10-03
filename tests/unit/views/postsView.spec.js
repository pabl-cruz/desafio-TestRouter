import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import PostsView from '@/views/PostsView.vue'



describe('PostsView', () => { 

    const wrapper = mount(PostsView)
    it('captura de contenido HTML en prueba y contrasta', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Probando la existencia del componente o vista PostsView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }],
        })
        router.push('/posts')
        await router.isReady()

        const wrapper = mount(PostsView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    }) 
    

    const postsDummy = [
        { id: 1, name: 'Post 1' },
        { id: 2, name: 'Post 2' },
        { id: 3, name: 'Post 3' },
        { id: 4, name: 'Post 4' }
    ]

    test('renderiza lista de posts', async () => {
        const wrapper = mount(PostsView)

        //actualiza la variable de estado
        wrapper.vm.posts = postsDummy

        //actualiza DOM 
        await wrapper.vm.$nextTick()

        //revisar si se renderizan los LI
        expect(wrapper.findAll('li')).toHaveLength(4)
    })
 })

 