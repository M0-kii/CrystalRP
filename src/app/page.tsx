import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Placeholder sections for the landing page */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">چرا کریستال آرپی؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="اقتصاد هوشمند"
              desc="سیستم اقتصادی دقیق و بالانس شده برای تجربه بهتر رول‌پلی."
            />
            <FeatureCard
              title="تیم مجرب"
              desc="ادمین‌های آموزش دیده و پاسخگو به صورت ۲۴ ساعته."
            />
            <FeatureCard
              title="امکانات اختصاصی"
              desc="اسکریپت‌ها و قابلیت‌های منحصر به فرد که در جای دیگر نمی‌بینید."
            />
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© 2026 CrystalRP. تمامی حقوق محفوظ است.</p>
      </footer>
    </main>
  );
}

const FeatureCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400">{desc}</p>
  </div>
);
