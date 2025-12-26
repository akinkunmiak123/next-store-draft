import SectionTitle from "@/components/global/SectionTitle"
import ProductsGrid from "@/components/products/ProductsGrid"
import { fetchUserFavorites } from "@/utils/actions"

async function FavoritesPage() {
  const favorites  = await fetchUserFavorites()
  if(favorites.length === 0) return <SectionTitle text='You have no favorites, add some'/>
  return (
    <div>
      <SectionTitle text="Favorites"/>
      <ProductsGrid products={favorites.map((favorite) => favorite.product)}/>
    </div>
  )
}
export default FavoritesPage