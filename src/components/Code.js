import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Button } from '../../src/components/Button'
import { Stack } from '../../src/components/Stack'
import theme from 'prism-react-renderer/themes/github'

export const Code = ({ code }) => {
  const scope = { Button, Stack }
  return (
    <LiveProvider code={code} scope={scope} theme={theme}>
      <LivePreview className="mb-4" />
      <LiveEditor className="rounded-lg" />
      <LiveError />
    </LiveProvider>
  )
}
export default { Code }
