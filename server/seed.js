import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModel.js";

dotenv.config();

const products = [
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    brand: "Nike",
    title: "Nike Air Max",
    rating: 4.5,
    reviews: 120,
    sellPrice: 8999,
    orders: "500+",
    mrp: "12999",
    discount: 30,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
    brand: "Adidas",
    title: "Adidas Ultraboost",
    rating: 4.7,
    reviews: 200,
    sellPrice: 9999,
    orders: "800+",
    mrp: "14999",
    discount: 33,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
    brand: "Puma",
    title: "Puma Running Shoes",
    rating: 4.3,
    reviews: 85,
    sellPrice: 5999,
    orders: "300+",
    mrp: "8999",
    discount: 33,
    category: "men"
  },
  {
    img: "https://images.unsplash.com/photo-1556821552-cb06b8e50697?w=500",
    brand: "Skechers",
    title: "Skechers Comfort",
    rating: 4.6,
    reviews: 150,
    sellPrice: 4999,
    orders: "600+",
    mrp: "7999",
    discount: 37,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8845c?w=500",
    brand: "Nike",
    title: "Nike Kids Sneaker",
    rating: 4.4,
    reviews: 95,
    sellPrice: 3999,
    orders: "400+",
    mrp: "5999",
    discount: 33,
    category: "child"
  },
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
    brand: "Adidas",
    title: "Adidas Women's Casual",
    rating: 4.8,
    reviews: 220,
    sellPrice: 6999,
    orders: "900+",
    mrp: "9999",
    discount: 30,
    category: "women"
  },
  {
    img: "https://images.unsplash.com/photo-1514706267537-b85cc00bfd93?w=500",
    brand: "Puma",
    title: "Puma Kids Play Shoe",
    rating: 4.2,
    reviews: 70,
    sellPrice: 3499,
    orders: "200+",
    mrp: "5499",
    discount: 36,
    category: "child"
  },
  {
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
    brand: "Skechers",
    title: "Skechers Men's Sport",
    rating: 4.5,
    reviews: 130,
    sellPrice: 5499,
    orders: "550+",
    mrp: "7999",
    discount: 31,
    category: "men"
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany({});
    console.log("Cleared existing products");

    await Product.insertMany(products);
    console.log(`Successfully inserted ${products.length} products`);

    mongoose.connection.close();
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error.message);
    process.exit(1);
  }
};

seedDB();
