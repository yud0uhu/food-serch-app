import { shallowMount } from '@vue/test-utils'
import Shop from '@/components/Shop.vue'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Shop)
    expect(wrapper.html()).toContain(
      '<div class="title-S">今週のおすすめ飲食店</div>'
    )
  })
})
