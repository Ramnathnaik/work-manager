import { NextResponse } from "next/server";

export function sendResponse(message='unable to process the request', success=false, status=500, statusText='error') {
    return NextResponse.json({
        message,
        success
    }, 
    {
        status,
        statusText
    });
}