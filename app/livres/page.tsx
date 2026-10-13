import type { Books as BookType } from "@/app/types/books";

export default async function Books() {
    const livres: BookType[] = [
        {
            id: "abcd321654",
            title: "Coucou",
            author: "Malvin",
            category: ["Roman"],
            status: ["available"],
            price: 123,
            date: "02-06-2026",
        },
        {
            id: "abcd321644",
            title: "Hello",
            author: "Malvin",
            category: ["Science-fiction"],
            status: ["available"],
            price: 321.2,
            date: "12-06-2026",
        },
    ];
    
    return <div className="flex gap-16 justify-center mt-16 p-4">
    {
        livres.map((livre, index) => (
            <div key={livre.id + "-" +index}>
            <h2>{livre.title}</h2>
            <p>Auteur : {livre.author}</p>
            <p>Catégorie : {livre.category.join(", ")}</p>
            <p>Statut : {livre.status}</p>
            <p>Prix : {livre.price} €</p>
            <p>Date : {livre.date}</p>
            </div>
        ))
    }
    </div>
}