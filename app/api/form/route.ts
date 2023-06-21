import {NextResponse} from 'next/server'

export async function POST(req: Request) {
	const TOKEN = process.env.TOKEN
	const CHAT_ID = process.env.CHAT_ID
	const body = await req.json()
	const {name, twitter, discord, medium, gitbook, site, zealy, sector, desc} = body
	const text = `Name: ${name}%0A
	Twitter: ${twitter}%0A
	Discord: ${discord}%0A
	Medium: ${medium}%0A
	Gitbook: ${gitbook}%0A
	Site: ${site}%0A
	Zealy: ${zealy}%0A
	Sector: ${sector}%0A
	Description: ${desc}`

	const response = await fetch(
		`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${text}`,
		{method: 'GET'}
	).then(res => res.json())

	return NextResponse.json(response)
}
