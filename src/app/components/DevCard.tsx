import { Dev } from "../data/definitions";
export default function DevCard({ dev }: { dev: Dev }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      {/* Name + Project */}
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{dev.project_title}</h3>
        <p className="text-sm text-gray-600 mt-1">by {dev.name}</p>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-4">{dev.description}</p>

      {/* Links */}
      <div className="flex space-x-4 text-sm text-blue-600 mb-4">
        <a href={dev.github_link} target="_blank" className="hover:underline">
          GitHub
        </a>
        {dev.site_link && (
          <a href={dev.site_link} target="_blank" className="hover:underline">
            Live Site
          </a>
        )}
      </div>

      {/* Tags */}
      {dev.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {dev.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}