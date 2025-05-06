import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: "Sepatu Nike",
        price: 10000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caacf18f-f891-49a9-9312-05d91e77d8d0/W+NIKE+VOMERO+18.png",
        rating : {
            rate: 4,
            count: 100
        }
    },
    {
        id: 2,
        title: "Sepatu Nike lagi",
        price: 20000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19fd697e-5604-476a-9885-fee542fb2624/NIKE+VOMERO+18+SE.png",
        rating : {
            rate: 2,
            count: 100
        }
    },
    {
        id: 3,
        title: "Sepatu Nike Terus",
        price: 30000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/928a0594-1bf9-4778-bed7-c075453b8e9a/NIKE+VOMERO+18+%28GS%29.png",
        rating : {
            rate: 2,
            count: 100
        }
    }
]
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id));
        if (!detailProduct) {
            return NextResponse.json({ status: 404, message: "Product not found" });
        }
        return NextResponse.json({ status: 200, message: "Success", data: detailProduct });
    }

    return NextResponse.json({ status: 200, message: "Success", data });
}