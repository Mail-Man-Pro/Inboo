import { Client } from "appwrite";
import { Account } from "appwrite";

const client = new Client();
client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('65c33865b7ad1f5e1a3f');

export const account = new Account(client)