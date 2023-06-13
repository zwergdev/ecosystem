import {Metadata} from 'next'

type Props = {
	params: {name: string}
}

async function getData(name: string) {
	const response = await fetch(`http://localhost:3000/api/projects/${name}`, {
		next: {revalidate: 180}
	})
	return response.json()
}

export async function generateMetadata({
	params: {name}
}: Props): Promise<Metadata> {
	return {title: `Ecosystem | ${name}`}
}

export default async function Project({params: {name}}: Props) {
	const projects = await getData(name)
	const project = projects[0]
	return (
		<>
			<h1>
				{project.name} COOL {project.rating}
			</h1>
		</>
	)
}
