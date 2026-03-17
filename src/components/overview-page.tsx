import { useMDXComponents as getMDXComponents } from 'nextra-theme-docs'
import type { PageMapItem } from 'nextra'
import { Cards } from 'nextra/components'
import { getIndexPageMap, getPageMap } from 'nextra/page-map'
import type { FC } from 'react'

export const OverviewPage: FC<{
  filePath: string
  icons?: Record<string, FC>
  pageMap?: PageMapItem[]
}> = async ({ filePath, icons, pageMap: $pageMap }) => {
  const { h2: H2 } = getMDXComponents()
  const currentRoute = '/' + filePath.replace('src/app/', '').replace('/page.mdx', '')
  const pageMap = $pageMap ?? (await getPageMap(currentRoute))

  return getIndexPageMap(pageMap).map((pageItem, index) => {
    if (!Array.isArray(pageItem)) {
      return <H2 key={index}>{pageItem.title}</H2>
    }
    return (
      <Cards key={index}>
        {pageItem.map(item => {
          const icon = item.frontMatter?.icon
          const Icon = icons?.[icon]
          if (icon && !Icon) {
            throw new Error(
              `Icon "${icon}" is defined in front matter but isn't provided`
            )
          }
          return (
            <Cards.Card
              key={item.name}
              title={item.frontMatter?.title || item.name}
              href={item.route}
              icon={Icon && <Icon />}
            />
          )
        })}
      </Cards>
    )
  })
}