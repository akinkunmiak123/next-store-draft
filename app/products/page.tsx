import ProductsContainer from "@/components/products/ProductsContainer";

function ProductsPage(props: any) {
 const searchParams = props.searchParams ?? {}
 const layout = searchParams.layout || 'grid'
 const search = searchParams.search || ''
 console.log(searchParams)
 return <ProductsContainer layout={layout} search={search} />
}
 export default ProductsPage