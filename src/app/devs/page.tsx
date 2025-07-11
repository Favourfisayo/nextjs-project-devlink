import sql from "../lib/db"
import DevCard from "../components/DevCard"
const devs = await sql `
  SELECT name, email, project_title, github_link, site_link, description, tags
  FROM developers
  ORDER BY name ASC
`
const page = () => {
  devs.map((dev, index) => 
  <DevCard
  key={index}
  dev={dev}
  />
  )
}

export default page