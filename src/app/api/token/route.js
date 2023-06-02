import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function GET(req) {
    const token = await getToken({ req, raw: true })

    return NextResponse.json(token);
}