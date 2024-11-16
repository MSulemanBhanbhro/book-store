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
    author: "Allama Iqbal",
    image: "/dra.webp",
    available: true,
  },
  {
    id: 2,
    title: "Shah Jo Risalo",
    author: "Shah Abdul Latif",
    image: "/zarb.jpg",
    available: true,
  },
  {
    id: 3,
    title: "Asrar-e-Khudi",
    author: "Allama Iqbal",
    image: "/khudi.jpg",
    available: true,
  },
  {
    id: 4,
    title: "Zarb-e-Kalim",
    author: "Allama Iqbal",
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

// GET Method
export async function GET() {
  return NextResponse.json(books, { status: 200 });
}

// POST Method
export async function POST(req: Request) {
  try {
    const newBook: Book = await req.json();
    books.push({ ...newBook, id: books.length + 1 });
    return NextResponse.json({ message: "Book added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error adding book!" }, { status: 500 });
  }
}

// PUT Method
export async function PUT(req: Request) {
  try {
    const updatedBook: Book = await req.json();
    books = books.map((book) =>
      book.id === updatedBook.id ? { ...book, ...updatedBook } : book
    );
    return NextResponse.json({ message: "Book updated successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error updating book!" }, { status: 500 });
  }
}

// DELETE Method
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    books = books.filter((book) => book.id !== id);
    return NextResponse.json({ message: "Book deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting book!" }, { status: 500 });
  }
}
