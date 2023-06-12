import {NextResponse} from 'next/server'
import {projects} from './../projects'

export async function GET(req: Request, {params}: {params: {name: string}}) {
	const name = params.name
	const project = projects.filter(project =>
		project.name.toLowerCase().includes(name.toLowerCase())
	)

	return NextResponse.json(project)
}
