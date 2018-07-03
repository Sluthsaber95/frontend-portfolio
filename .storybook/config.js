import { configure } from '@storybook/react'
import { configureActions } from '@storybook/addon-actions'


const loadStories = () => {
  require('../src/stories')
}

configure(loadStories, module)
configureActions({
  depth: 100,
  limit: 20,
})