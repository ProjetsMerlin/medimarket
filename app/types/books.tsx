export type Categories = (
    "Roman" | "BD" | "Science-fiction"
)[];

export type Status = (
    "available" | "borrowed"
)[];

export type Books = {
    id : String,
    title : String,
    author : String,
    category: Categories,
    status: Status,
    price : number,
    date: String
}