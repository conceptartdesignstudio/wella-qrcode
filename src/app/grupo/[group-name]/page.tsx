import { getGroupData } from '@/features/group/getGroupData'
import { GroupHeader } from '@/components/Group/GroupHeader'
import { GroupProduct } from '@/components/Group/GroupProduct'

export const revalidate = 60

export default async function SingleGroupPage({
  params
}: {
  params: Promise<{ 'group-name': string }>
}) {
  const { 'group-name': slug } = await params
  const group = await getGroupData(slug)

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: group.colors.backgroundColor }}>
      <head>
        <title>{group.title}</title>
        <link rel="icon" href="/wella.ico" />
      </head>

      <main className="max-w-5xl mx-auto">
        <GroupHeader
          colors={group.colors}
          groupName={group.pageTitle}
          groupImage={group.image}
        />

        <div className="space-y-4">
          {group.relatedProducts.map((product) => (
            <GroupProduct
              key={product.id}
              colors={group.colors}
              productImage={product.image}
              productName={product.title}
              productResume={product.ingredients}
              productLink={product.productUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
