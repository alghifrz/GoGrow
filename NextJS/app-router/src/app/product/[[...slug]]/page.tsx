type ProductProps = {
    params: {
        slug: string[];
    };
};

async function getData() {
    // const res = await fetch('https://fakestoreapi.com/products');
    const res = await fetch('http://localhost:3000/api/product', {
        cache: 'no-cache',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function DetailProduct(props: ProductProps) {
    const { params } = props;
    const products = await getData();

    return (
        <div className="grid grid-cols-4 gap-4 mt-5 place-items-center">
            {/* <h1>{params.slug ? "Detail Product Page" : "Product Page"}</h1> */}

            {products.data.length > 0 && products.data.map((product: any) => (
                <div key={product.id} className="w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 my-2">
                    <a href="#">
                        <img className="p-8 rounded-t-lg object-cover h-96 w-full" src={product.image} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800">&#9733; {product.rating.rate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>

            ))}

            {params.slug && (
                <>
                    <h2>Category: {params.slug[0]}</h2>
                    <h2>Product: {params.slug[1]}</h2>
                </>
            )}
        </div>
    );
}
