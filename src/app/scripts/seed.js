const { db } = require('@vercel/postgres');
const { products } = require('../lib/sample-data.js');
const bcrypt = require('bcrypt');

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        image_url TEXT NOT NULL UNIQUE,
        price INT NOT NULL
      );
    `;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map((product) => client.sql`
      INSERT INTO products (product_id, name, description, image_url, price)
      VALUES (${product.id}, ${product.name}, ${product.description}, ${product.image_url}, ${product.price})
      ON CONFLICT (id) DO NOTHING;
    `,),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
