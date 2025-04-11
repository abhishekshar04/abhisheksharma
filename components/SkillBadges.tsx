import { Badge } from "@/components/ui/badge"

export function SkillBadge() {
  return (
    <div>
      <hr className="text-gray-300" />
      <div className="my-5">
        <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline">HTML</Badge>
          <Badge variant="outline">CSS</Badge>
          <Badge variant="outline">JavaScript</Badge>
          <Badge variant="outline">TypeScript</Badge>
          <Badge variant="outline">React</Badge>
          <Badge variant="outline">Next.js</Badge>
          <Badge variant="outline">Node.js</Badge>
          <Badge variant="outline">Express.js</Badge>
          <Badge variant="outline">MongoDB</Badge>
          <Badge variant="outline">PostgreSQL</Badge>
        </div>
      </div>
    </div>
  )
}
