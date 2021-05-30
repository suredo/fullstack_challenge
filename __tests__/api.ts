import express from "express";
import mongoose from "mongoose";
import request from "supertest";

import { Routes } from "../server/routes";

const app = express();
app.use(express.json());
app.use(new Routes().getEndpoins());

mongoose.Promise = global.Promise;

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany({});
  }
}

async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      if (error.message === "ns not found") return;
      if (error.message.includes("a background operation is currently running"))
        return;
      console.log(error.message);
    }
  }
}

beforeAll(async () => {
  const url = `mongodb://localhost:27017/test`;
  await mongoose.connect(url, { useNewUrlParser: true });
  removeAllCollections();
});

const book1 = {
  title: "Sled Biography",
  description: "A book about an amazing programmer",
  author: "Sled C. S.",
};
const book2 = {
  title: "Sled Biography",
  description: "Another book",
  author: "Sled C. S.",
};
const book3 = {
  title: "The future of memes",
  description: "A book about memes",
  author: "Sled C. S.",
};

describe("POST: /api/addbook", () => {
  it("Should return success true book is added successfully", async (done) => {
    const res = await request(app).post("/api/addbook").send(book1).expect(200);
    expect(res.body.success).toBe(true);
    done();
  });

  it("Should return success false and error msg if there's and attempt to add book with same title", async (done) => {
    const res = await request(app).post("/api/addbook").send(book1).expect(400);
    expect(res.body.success).toBe(false);
    done();
  });

  it("Should return success success if there's and atempt to add book with different title", async (done) => {
    const res = await request(app).post("/api/adduser").send(book3).expect(200);
    expect(res.body.success).toBe(true);
    done();
  });
});

afterAll(async () => {
  await dropAllCollections();
  await mongoose.connection.close();
});
