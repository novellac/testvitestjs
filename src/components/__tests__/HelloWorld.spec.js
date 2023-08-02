import { describe, it, expect, afterEach, vi } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'


describe('HelloWorld', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  
  it('calls alert when BaseButton emits snooze:alarm', () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    
    const wrapper = shallowMount(HelloWorld, { props: {msg: 'Hello Vitest'}})

    wrapper.findComponent('[data-test="snoozeButton"]').vm.$emit('snooze:alarm')

    expect(window.alert).toHaveBeenCalledTimes(1)
  })

  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
  
})
