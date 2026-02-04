'use client';

import { Navbar, Animations, Footer } from '@/components';

export default function AnimationsPage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '100px' }}>
                <Animations />
            </div>
            <Footer />
        </main>
    );
}
