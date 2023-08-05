async function takeTime() {
    return await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    });
}

export default async function About() {
    await takeTime();
    throw new Error('error thrown');
    return (
        <div>
            <h1>This is about route</h1>
        </div>
    );
}