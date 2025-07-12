// import sql from "../lib/db"
// import DevCard from "../components/DevCard"
// import { Dev } from "@/app/data/definitions"

// const devs: Dev[] = await sql<Dev[]> `
//   SELECT name, email, project_title, github_link, site_link, description, tags
//   FROM developers
//   ORDER BY name ASC
// `

// const page = () => {
//   return (
//     <>
//       {devs.map((dev, index) => 
//         <DevCard
//           key={index}
//           dev={dev}
//         />
//       )}
//     </>
//   )
// }

// export default page
const page = () => {
  return (
    <div>page</div>
  )
}

export default page