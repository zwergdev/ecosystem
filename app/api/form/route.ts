import {NextResponse} from 'next/server'

export async function GET(req: Request) {
	const {searchParams} = new URL(req.url)
	const text = searchParams.get('text')
	const TOKEN = process.env.TOKEN
	const CHAT_ID = process.env.CHAT_ID

	const response = await fetch(
		`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${text}`
	).then(res => res.json())

	return NextResponse.json(response)
}
