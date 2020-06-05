import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/about">
                <a>Страница о нас</a>
            </Link>
            <p>Привет, Next.js</p>
        </div>
    );
}