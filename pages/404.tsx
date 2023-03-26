import styled from 'styled-components'

import { Layout, PageHead, PageHeading } from '@components'

const StyledText = styled.p`
  text-align: center;
`

export default function Custom404() {
  return (
    <>
      <PageHead pageName="404" />

      <Layout>
        <PageHeading text="404" />

        <StyledText>Oops, the page you are looking for does not exist.</StyledText>
      </Layout>
    </>
  )
}
