import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const {userId, postsId} = params;
    return NextResponse.json({userId, postsId});
}