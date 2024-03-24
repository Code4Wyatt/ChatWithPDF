import { Pinecone } from "@pinecone-database/pinecone";

let pinecone: Pinecone | null = null;

export const getPineconeClient = async () => {
    if (!pinecone) {
        pinecone = new Pinecone({
            apiKey: 'key',
        });
    }
    return pinecone;
}