import { GlobalStyles } from '../src/styles/global'

export const decorator = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
