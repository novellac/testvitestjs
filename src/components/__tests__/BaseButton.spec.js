import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import BaseButton from '/shared/components/base/BaseButton.vue'

describe('BaseButton', () => {
  it('emits snooze:alarm when the button is clicked', () => {
    const wrapper = shallowMount(BaseButton)

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('snooze:alarm')
  })
})
