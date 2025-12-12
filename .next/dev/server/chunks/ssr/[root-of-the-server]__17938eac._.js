module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/components/animatedBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnimatedBackground({ particleCount = 24, baseRadius = 60, speedMultiplier = 1.0 }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lightsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const intensityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0.6); // base intensity, 0..1
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    console.log("Canvas ref:", canvasRef.current);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // respect user preference for reduced motion
        const reduceMotion = ("TURBOPACK compile-time value", "undefined") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
         // do not start animation
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", {
            alpha: true
        });
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        // brand color (can be customized)
        const brandR = 101; // #65cf72 -> rgb(101, 207, 114)
        const brandG = 207;
        const brandB = 114;
        // create lights
        const lights = Array.from({
            length: particleCount
        }).map(()=>({
                x: Math.random() * w,
                y: Math.random() * h,
                r: baseRadius * (0.6 + Math.random() * 1.1),
                dx: (-0.15 + Math.random() * 0.3) * (0.6 + Math.random() * 0.8) * speedMultiplier,
                dy: (-0.12 + Math.random() * 0.24) * (0.6 + Math.random() * 0.8) * speedMultiplier,
                baseOpacity: 0.03 + Math.random() * 0.08,
                phase: Math.random() * Math.PI * 2,
                pulseSpeed: 0.001 + Math.random() * 0.004
            }));
        lightsRef.current = lights;
        // use 'lighter' for additive glow
        ctx.globalCompositeOperation = "lighter";
        // handle scroll -> increase intensity as user scrolls down
        const unsub = scrollYProgress.onChange((v)=>{
            // v is 0..1, map to intensity 0.3..1.2
            const mapped = 0.3 + v * 0.9;
            intensityRef.current = mapped;
        });
        // animation loop
        const animate = (t)=>{
            // clear with slight transparent black to create softer trails
            ctx.clearRect(0, 0, w, h);
            // for retina displays scale appropriately (canvas width/height already set)
            for(let i = 0; i < lights.length; i++){
                const L = lights[i];
                // gentle pulsation
                L.phase += L.pulseSpeed * (1 + Math.sin(t * 0.0008 + i) * 0.5);
                const pulse = 0.8 + Math.sin(L.phase) * 0.2;
                const opacity = L.baseOpacity * pulse * intensityRef.current;
                // draw radial gradient for soft glow
                const grd = ctx.createRadialGradient(L.x, L.y, 0, L.x, L.y, L.r);
                grd.addColorStop(0, `rgba(${brandR}, ${brandG}, ${brandB}, ${Math.min(0.45, opacity * 1.2)})`);
                grd.addColorStop(0.3, `rgba(${brandR}, ${brandG}, ${brandB}, ${Math.min(0.18, opacity * 0.5)})`);
                grd.addColorStop(1, `rgba(${brandR}, ${brandG}, ${brandB}, 0)`);
                ctx.beginPath();
                ctx.fillStyle = grd;
                // shadow adds stronger glow on some browsers
                ctx.shadowBlur = 40 * (0.6 + intensityRef.current * 0.6);
                ctx.shadowColor = `rgba(${brandR}, ${brandG}, ${brandB}, ${Math.min(0.55, opacity)})`;
                ctx.arc(L.x, L.y, L.r * (0.6 + pulse * 0.6), 0, Math.PI * 2);
                ctx.fill();
                // advance
                L.x += L.dx * (0.4 + intensityRef.current * 0.9);
                L.y += L.dy * (0.4 + intensityRef.current * 0.9);
                // wrap around edges so lights never disappear abruptly
                if (L.x < -L.r) L.x = w + L.r;
                if (L.x > w + L.r) L.x = -L.r;
                if (L.y < -L.r) L.y = h + L.r;
                if (L.y > h + L.r) L.y = -L.r;
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        // handle resize
        const onResize = ()=>{
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            // reposition lights inside new bounds
            lights.forEach((L)=>{
                if (L.x > w) L.x = Math.random() * w;
                if (L.y > h) L.y = Math.random() * h;
            });
        };
        window.addEventListener("resize", onResize);
        return ()=>{
            unsub && unsub();
            window.removeEventListener("resize", onResize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [
        particleCount,
        baseRadius,
        speedMultiplier,
        scrollYProgress
    ]);
    // canvas has pointer-events-none so it doesn't block interactions
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 -z-10 w-full h-full pointer-events-none",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/components/animatedBackground.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__17938eac._.js.map