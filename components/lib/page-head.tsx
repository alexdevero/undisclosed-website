import { memo } from 'react'
import Head from 'next/head'

export interface PageHeadProps {
  pageName: string
  description?: string
}

export const PageHead: React.FC<React.PropsWithChildren<PageHeadProps>> = memo(
  (props: React.PropsWithChildren<PageHeadProps>) => {
    const { pageName, description } = props
    const title = `${pageName} | Undisclosed`

    return (
      <Head key={title}>
        <title>{title}</title>
        <meta
          name="description"
          content={description ? description : 'Generated by create next app'}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
  },
)

PageHead.displayName = 'PageHead'
