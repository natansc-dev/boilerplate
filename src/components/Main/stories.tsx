import { Story, Meta } from '@storybook/react/types-7-0'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as Meta

type MainProps = {
  title: string
  description: string
}

export const Basic: Story = (args: MainProps) => <Main {...args} />

Basic.args = {
  title: 'React Hard',
  description: 'TypeScript, ReactJS, NextJS, e Styled Components'
}
