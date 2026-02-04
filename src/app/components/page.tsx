'use client';

import { Navbar, ComponentShowcase, Footer } from '@/components';

export default function ComponentsPage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '100px' }}>
                <ComponentShowcase />
            </div>
            <Footer />
        </main>
    );
}
