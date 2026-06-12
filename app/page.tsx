"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/sa/app/%D9%85-%D9%84%D8%A7%D9%83-mulak/id6771757343?l=ar";

const PRIVACY_URL = "https://mulak2027.github.io/mulak-legal/privacy.html";

const TERMS_URL = "https://mulak2027.github.io/mulak-legal/terms.html";

const features = [
  "العقارات",
  "الوحدات",
  "العقود",
  "الدفعات",
  "المتأخرات",
  "الفواتير",
  "التقارير",
  "Excel",
];

const screenshots = [
  "/images/app-1.png",
  "/images/app-2.png",
  "/images/app-3.png",
  "/images/app-4.png",
];

const heroShots = [
  "/images/app-1.png",
  "/images/app-2.png",
  "/images/app-3.png",
  "/images/app-4.png",
];

export default function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroShots.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.16),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="pointer-events-none absolute right-[-120px] top-24 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-96 left-[-120px] -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-12">
        <header className="animate-fade-up sticky top-4 z-50 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] px-4 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-5">
          <div className="flex items-center gap-3">
            <div className="shrink-0 overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg shadow-blue-950/30">
              <Image
                src="/images/logo.png"
                alt="شعار مُلاك"
                width={46}
                height={46}
                className="rounded-xl"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-lg font-bold md:text-xl">
                مُلاك | Mulak
              </p>
              <p className="text-xs text-slate-400">إدارة أملاكك بذكاء</p>
            </div>
          </div>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
          >
            تحميل التطبيق
          </a>
        </header>

        <section className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <div className="animate-fade-up text-center lg:text-right">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-100 shadow-lg shadow-blue-950/20">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse-soft" />
              متوفر الآن على App Store
            </div>

            <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:mx-0">
              مُلاك | Mulak
              <br />
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              نظّم عقاراتك، وحداتك، عقودك، دفعاتك ومتأخراتك من تطبيق واحد
              بواجهة عربية واضحة.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-black text-slate-950 shadow-xl shadow-white/10 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl"></span>
                  <span>تحميل من App Store</span>
                </span>
              </a>

              <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-bold text-slate-300">
                Google Play قريبًا
              </span>

              <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-bold text-slate-300">
                نسخة المتصفح قريبًا
              </span>
            </div>
          </div>

          <div className="relative mx-auto h-[540px] w-full max-w-[360px] sm:h-[620px] sm:max-w-[520px] lg:h-[660px] lg:max-w-[600px]">
            {heroShots.map((shot, index) => {
              const total = heroShots.length;
              const position = (index - activeHeroIndex + total) % total;

              let phoneClass = "";
              let phoneStyle: CSSProperties = {};

              if (position === 0) {
                phoneClass = "top-0 z-40 w-64 opacity-100 sm:w-72 md:w-80";
                phoneStyle = {
                  transform:
                    "translateX(-50%) translateY(0) scale(1) rotate(0deg)",
                };
              } else if (position === 1) {
                phoneClass =
                  "top-24 z-30 w-44 opacity-0 sm:w-52 sm:opacity-65";
                phoneStyle = {
                  transform:
                    "translateX(calc(-50% + 155px)) translateY(0) scale(0.82) rotate(12deg)",
                };
              } else if (position === 2) {
                phoneClass =
                  "top-32 z-10 w-44 opacity-0 sm:w-52 sm:opacity-35";
                phoneStyle = {
                  transform:
                    "translateX(-50%) translateY(0) scale(0.76) rotate(0deg)",
                };
              } else {
                phoneClass =
                  "top-24 z-30 w-44 opacity-0 sm:w-52 sm:opacity-65";
                phoneStyle = {
                  transform:
                    "translateX(calc(-50% - 155px)) translateY(0) scale(0.82) rotate(-12deg)",
                };
              }

              return (
                <div
                  key={`${shot}-${index}`}
                  className={`absolute left-1/2 ${phoneClass} transition-all duration-700 ease-out`}
                  style={phoneStyle}
                >
                  <PhoneMockup src={shot} main={position === 0} />
                </div>
              );
            })}

            <div className="absolute bottom-10 left-1/2 z-50 w-[94%] -translate-x-1/2 rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-5 py-4 text-center shadow-2xl shadow-black/40 backdrop-blur-xl sm:bottom-12 sm:rounded-[2rem] sm:px-6 sm:py-5">
              <p className="text-base font-black sm:text-lg">
                كل بياناتك العقارية في مكان واحد
              </p>
              <p className="mt-2 text-xs leading-6 text-slate-300 sm:text-sm">
                عقارات، عقود، دفعات، متأخرات وتقارير.
              </p>
            </div>

            <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 gap-2">
              {heroShots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHeroIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeHeroIndex === index
                      ? "w-8 bg-blue-400"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`عرض الشاشة ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="shine-card rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm font-bold text-slate-100 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-blue-950/20"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

<section className="py-16 sm:py-20">
  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 backdrop-blur-xl sm:rounded-[2.5rem]">
    <div className="grid gap-0 lg:grid-cols-2">
      <div className="flex flex-col justify-center p-6 text-center sm:p-8 lg:p-12 lg:text-right">
        <div className="mx-auto mb-4 w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-black text-blue-200 lg:mx-0">
          استيراد Excel
        </div>

        <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          لا تبدأ
          <br />
          من الصفر
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
          استورد الوحدات والعقود من ملف Excel وابدأ بسرعة بدل الإدخال اليدوي الطويل.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <MiniPoint text="استيراد الوحدات" />
          <MiniPoint text="استيراد العقود" />
          <MiniPoint text="مراجعة قبل الحفظ" />
          <MiniPoint text="مناسب للعقود الكثيرة" />
        </div>
      </div>

      <div className="relative bg-slate-950/70 p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.20),transparent_34%)]" />

        <div className="relative rounded-[1.75rem] border border-white/10 bg-[#020617]/80 p-4 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="text-right">
              <p className="text-sm font-black text-white">ملف Excel</p>
              <p className="mt-1 text-xs text-slate-400">معاينة قبل الاستيراد</p>
            </div>

            <span className="shrink-0 rounded-full bg-green-500/15 px-3 py-2 text-xs font-black text-green-300 sm:px-4 sm:text-sm">
              جاهز
            </span>
          </div>

          <div className="space-y-3 md:hidden">
            <ExcelMobileCard
              unit="A-101"
              tenant="محمد سالم"
              contract="سنوي"
              rent="24,000"
            />
            <ExcelMobileCard
              unit="A-102"
              tenant="عبدالعزيز"
              contract="شهري"
              rent="18,000"
            />
            <ExcelMobileCard
              unit="B-201"
              tenant="خالد"
              contract="ربع سنوي"
              rent="30,000"
            />
          </div>

          <div className="hidden md:block">
            <div className="space-y-3">
              <ExcelRow
                cols={["الوحدة", "المستأجر", "العقد", "الإيجار"]}
                header
              />
              <ExcelRow cols={["A-101", "محمد سالم", "سنوي", "24,000"]} />
              <ExcelRow cols={["A-102", "عبدالعزيز", "شهري", "18,000"]} />
              <ExcelRow cols={["B-201", "خالد", "ربع سنوي", "30,000"]} />
              <ExcelRow cols={["B-202", "شاغرة", "- ", "-"]} />
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-blue-400/20 bg-blue-600/15">
            <div className="h-1.5 w-3/4 rounded-full bg-blue-400" />
            <div className="flex items-center justify-between gap-3 px-4 py-4">
              <span className="text-sm font-bold text-blue-100">
                جاري تجهيز البيانات
              </span>
              <span className="text-sm font-black text-white">75%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <section id="screenshots" className="py-14 sm:py-16">
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-sm font-bold text-blue-300">صور من التطبيق</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((shot, index) => (
              <div
                key={shot}
                className={`shine-card rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-blue-950/20 ${
                  index % 2 === 1 ? "lg:mt-12" : ""
                }`}
              >
                <PhoneMockup src={shot} />
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold text-blue-300">المنصات</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              مُلاك معك اليوم
              <br />
              ويتوسع قريبًا
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <PlatformCard
              icon=""
              title="App Store"
              status="متوفر الآن"
              desc="لأجهزة iPhone و iPad"
              active
            />

            <PlatformCard
              icon="▶"
              title="Google Play"
              status="قريبًا"
              desc="لأجهزة Android"
            />

            <PlatformCard
              icon="⌘"
              title="نسخة المتصفح"
              status="قريبًا"
              desc="لإدارة أملاكك من الكمبيوتر"
            />
          </div>
        </section>

        <section
          id="download"
          className="my-12 rounded-[2rem] bg-blue-600 p-7 text-center shadow-2xl shadow-blue-900/30 sm:rounded-[2.5rem] sm:p-8 md:p-16"
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full bg-white/10 px-5 py-3">
            <Image
              src="/images/logo.png"
              alt="شعار مُلاك"
              width={34}
              height={34}
              className="rounded-xl bg-white"
            />
            <span className="font-bold">مُلاك | Mulak</span>
          </div>

          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            ابدأ إدارة أملاكك بذكاء
          </h2>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-base font-black text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50 sm:px-9 sm:text-lg"
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <span>تحميل من App Store</span>
            </span>
          </a>
        </section>

        <footer className="flex flex-col items-center gap-6 border-t border-white/10 py-10 text-center text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:text-right">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="شعار مُلاك"
              width={36}
              height={36}
              className="rounded-xl bg-white"
            />

            <div>
              <p className="font-bold text-white">مُلاك | Mulak</p>
              <p>© 2026 جميع الحقوق محفوظة.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 md:justify-end">
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              الخصوصية
            </a>

            <a
              href={TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              الشروط
            </a>

            <a href="mailto:support@mulak.app" className="hover:text-white">
              الدعم
            </a>

            <a
              href="https://x.com/MulakApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              @MulakApp
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}

function PhoneMockup({
  src,
  main = false,
}: {
  src: string;
  main?: boolean;
}) {
  return (
    <div
      className={`rounded-[2.1rem] border border-white/15 bg-slate-950 p-1.5 shadow-2xl sm:rounded-[2.4rem] sm:p-2 ${
        main ? "shadow-blue-950/70" : "shadow-black/30"
      }`}
    >
      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black sm:rounded-[2rem]">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black sm:h-5 sm:w-24" />
        <Image
          src={src}
          alt="لقطة من تطبيق مُلاك"
          width={900}
          height={1800}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function MiniPoint({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold transition hover:bg-white/[0.08]">
      ✓ {text}
    </div>
  );
}
function ExcelMobileCard({
  unit,
  tenant,
  contract,
  rent,
}: {
  unit: string;
  tenant: string;
  contract: string;
  rent: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs font-bold text-slate-400">الوحدة</span>
        <span className="rounded-full bg-blue-500/15 px-3 py-1 text-sm font-black text-blue-200">
          {unit}
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-400">المستأجر</span>
          <span className="font-bold text-white">{tenant}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-400">العقد</span>
          <span className="font-bold text-white">{contract}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-400">الإيجار</span>
          <span className="font-black text-white">{rent}</span>
        </div>
      </div>
    </div>
  );
}

function ExcelRow({
  cols,
  header = false,
}: {
  cols: string[];
  header?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-4 gap-2 rounded-xl px-3 py-3 text-center text-xs md:text-sm ${
        header
          ? "bg-white/10 font-black text-white"
          : "bg-white/[0.04] text-slate-300"
      }`}
    >
      {cols.map((col) => (
        <span key={col}>{col}</span>
      ))}
    </div>
  );
}

function PlatformCard({
  icon,
  title,
  status,
  desc,
  active = false,
}: {
  icon: string;
  title: string;
  status: string;
  desc: string;
  active?: boolean;
}) {
  return (
    <div
      className={`shine-card rounded-[2rem] border p-7 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/20 sm:p-8 ${
        active
          ? "border-blue-400/30 bg-blue-600/15"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <div
        className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl text-3xl font-black ${
          active ? "bg-blue-600 text-white" : "bg-white/10 text-slate-300"
        }`}
      >
        {icon}
      </div>

      <h3 className="text-2xl font-black">{title}</h3>

      <p
        className={`mt-3 text-sm font-black ${
          active ? "text-blue-200" : "text-slate-400"
        }`}
      >
        {status}
      </p>

      <p className="mt-4 text-slate-300">{desc}</p>
    </div>
  );
}