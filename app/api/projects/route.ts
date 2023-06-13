import {NextResponse} from 'next/server'
import {projects} from './projects'

export async function GET(req: Request) {
	const {searchParams} = new URL(req.url)
	const query = searchParams.get('q')
	const size = searchParams.get('s')
	const filter = searchParams.get('v')
	let currentProjects = projects

	if (size) {
		currentProjects = projects.slice(0, +size)
	}
	if (query) {
		currentProjects = projects.filter(project =>
			project.name.toLowerCase().includes(query.toLowerCase())
		)
	}
	if (filter) {
		currentProjects = projects.filter(project =>
			project.sector.includes(filter)
		)
	}

	return NextResponse.json(currentProjects)
}
