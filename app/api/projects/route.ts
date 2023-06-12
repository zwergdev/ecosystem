import {NextResponse} from 'next/server'
import {projects} from './projects'

export async function GET(req: Request) {
	const {searchParams} = new URL(req.url)
	const query = searchParams.get('q')
	let currentProjects = projects

	if (query) {
		currentProjects = projects.filter(project =>
			project.name.toLowerCase().includes(query.toLowerCase())
		)
	}

	return NextResponse.json(currentProjects)
}
