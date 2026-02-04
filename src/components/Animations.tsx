'use client';

import { motion, AnimatePresence, TargetAndTransition } from 'framer-motion';
import { Copy, Check, ChevronRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

type Platform = 'react-native' | 'flutter';

interface Animation {
    name: string;
    color: string;
    animation: TargetAndTransition | boolean;
    code: {
        'react-native': string;
        flutter: string;
    };
}

const animations: Animation[] = [
    {
        name: 'Fade In Up',
        color: '#667eea',
        animation: { opacity: [0, 1], y: [30, 0] },
        code: {
            'react-native': `import { FadeInUp } from 'mobileui-pro/animations';

<FadeInUp duration={600}>
  <YourComponent />
</FadeInUp>`,
            flutter: `import 'package:mobileui_pro/animations.dart';

FadeInUp(
  duration: Duration(milliseconds: 600),
  child: YourWidget(),
)`
        }
    },
    {
        name: 'Scale Pop',
        color: '#667eea',
        animation: { scale: [0, 1.1, 1] },
        code: {
            'react-native': `<ScalePop overshoot={1.1}>
  <YourComponent />
</ScalePop>`,
            flutter: `ScalePop(
  overshoot: 1.1,
  child: YourWidget(),
)`
        }
    },
    {
        name: 'Rotate In',
        color: '#667eea',
        animation: { rotate: [180, 0], scale: [0, 1] },
        code: {
            'react-native': `<RotateIn degrees={180}>
  <YourComponent />
</RotateIn>`,
            flutter: `RotateIn(
  degrees: 180,
  child: YourWidget(),
)`
        }
    },
    {
        name: 'Slide In Right',
        color: '#667eea',
        animation: { x: [-50, 0], opacity: [0, 1] },
        code: {
            'react-native': `<SlideInRight distance={50}>
  <YourComponent />
</SlideInRight>`,
            flutter: `SlideInRight(
  distance: 50,
  child: YourWidget(),
)`
        }
    },
    {
        name: 'Bounce',
        color: '#667eea',
        animation: { y: [0, -20, 0] },
        code: {
            'react-native': `<Bounce height={20} loop>
  <YourComponent />
</Bounce>`,
            flutter: `Bounce(
  height: 20,
  loop: true,
  child: YourWidget(),
)`
        }
    },
    {
        name: 'Flip',
        color: '#667eea',
        animation: { rotateY: [0, 180, 360] },
        code: {
            'react-native': `<Flip axis="y">
  <YourComponent />
</Flip>`,
            flutter: `Flip(
  axis: Axis.vertical,
  child: YourWidget(),
)`
        }
    },
    {
        name: 'Shake',
        color: '#f5576c',
        animation: { x: [0, -10, 10, -10, 10, 0] },
        code: {
            'react-native': `<Shake intensity={10}>
  <YourComponent />
</Shake>`,
            flutter: `Shake(
  intensity: 10,
  child: YourWidget(),
)`
        }
    },
    {
        name: 'Pulse',
        color: '#764ba2',
        animation: { scale: [1, 1.08, 1], opacity: [1, 0.7, 1] },
        code: {
            'react-native': `<Pulse scale={1.08} loop>
  <YourComponent />
</Pulse>`,
            flutter: `Pulse(
  scale: 1.08,
  loop: true,
  child: YourWidget(),
)`
        }
    }
];

export default function Animations() {
    const [platform, setPlatform] = useState<Platform>('react-native');
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleCopy = (index: number, code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section id="animations" style={{ padding: '120px 0', background: '#09090B' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: 48 }}
                >
                    <span style={{ color: '#A1A1AA', fontSize: 13 }}>
                        <Sparkles size={14} /> Animations
                    </span>
                    <h2 style={{ color: '#FAFAFA', fontSize: 48 }}>Stunning animations</h2>
                </motion.div>

                {/* Toggle */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
                    {(['react-native', 'flutter'] as Platform[]).map(p => (
                        <button
                            key={p}
                            onClick={() => setPlatform(p)}
                            style={{
                                padding: '10px 20px',
                                margin: 4,
                                borderRadius: 8,
                                border: 'none',
                                cursor: 'pointer',
                                background: platform === p ? '#FAFAFA' : '#18181B',
                                color: platform === p ? '#09090B' : '#A1A1AA'
                            }}
                        >
                            {p === 'react-native' ? 'React Native' : 'Flutter'}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', gap: 16 }}>
                    {animations.map((anim, index) => (
                        <motion.div key={anim.name} style={{ background: '#111', borderRadius: 16 }}>
                            <div style={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <motion.div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        background: anim.color,
                                        boxShadow: `0 8px 32px ${anim.color}40`
                                    }}
                                    animate={anim.animation}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                                />
                            </div>

                            <div style={{ padding: 16 }}>
                                <strong style={{ color: '#FAFAFA' }}>{anim.name}</strong>
                                <button
                                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                    style={{ marginLeft: 8 }}
                                >
                                    Code
                                </button>

                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.pre
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ fontSize: 11, color: '#A1A1AA', marginTop: 12 }}
                                        >
                                            {anim.code[platform]}
                                        </motion.pre>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
