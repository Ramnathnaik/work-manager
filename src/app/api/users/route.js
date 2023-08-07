import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
    let users = [
        {name: 'Ramanath K P', phone: '1234', address: '#8, Bangalore'},
        {name: 'Ashwin K A', phone: '2323', address: '#7, Bangalore'},
        {name: 'Aditi', phone: '6755', address: '#6, Bangalore'}
    ]

    return NextResponse.json(users, {
        status: 201, statusText: 'got users info'
    });
}

export function POST() {

}

export function PUT() {

}

export function DELETE() {

}