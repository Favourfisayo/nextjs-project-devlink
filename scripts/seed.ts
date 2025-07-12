// // import sql from "../src/app/lib/db";
// // import { placeholderdata } from "../src/app/data/placeholder-data";

// // const seed = async () => {
// //   const values = placeholderdata.map(dev => [
// //     dev.name,
// //     dev.email,
// //     dev.project_title,
// //     dev.github_link,
// //     dev.site_link,
// //     dev.description,
// //     sql.array(dev.tags),
// //   ] as const);

// //   await sql`
// //     INSERT INTO developers (name, email, project_title, github_link, site_link, description, tags)
// //     VALUES ${sql(values)}
// //   `;

// //   console.log("Seeded successfully");
// // };

// // seed()
// //   .then(() => process.exit(0))
// //   .catch(err => {
// //     console.error("Error seeding:", err);
// //     process.exit(1);
// //   });
