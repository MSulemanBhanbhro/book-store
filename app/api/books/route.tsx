import { NextResponse } from "next/server";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  available: boolean;
}

let books: Book[] = [
  {
    id: 1,
    title: "Bang-e-Dra",
    author: "Allama  Iqbal",
    image: "/dra.webp",
    available: true,
  },
  {
    id: 2,
    title: "Shah Jo Risalo",
    author: "Shah abdul Latif",
    image: "/shah.png",
    available: true,
  },
  {
    id: 3,
    title: "Asrar-e-Khudi",
    author: "Allama  Iqbal",
    image: "/khudi.jpg",
    available: true,
  },
  {
    id: 4,
    title: "Zarb-e-Kalim",
    author: "Allama  Iqbal",
    image: "/zarb.jpg",
    available: true,
  },
  {
    id: 5,
    title: "Kuliyat-e-Meer",
    author: "Mir Taqi Mir",
    image: "/kul.jpg",
    available: true,
  },
  {
    id: 6,
    title: "Kuliyaat-e-Faiz",
    author: "Faiz Ahmed Faiz",
    image: "/faiz.jpg",
    available: true,
  },
];

export async function GET() {
  try{
    return NextResponse.json(books,{status:200})
  }catch(error){
    return NextResponse.json({message:"Fetching Your Data"},
      {status:500}
    )
  }
}
