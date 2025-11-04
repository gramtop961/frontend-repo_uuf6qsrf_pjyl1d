import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RebateCalculator from './components/RebateCalculator';
import Footer from './components/Footer';

function Section({ id, title, children, muted = false }) {
  return (
    <section id={id} className={muted ? 'py-16 bg-slate-50' : 'py-16 bg-white'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <Section id="markets" title="Markets" muted>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Forex', desc: '60+ currency pairs with low spreads' },
              { name: 'Metals', desc: 'Gold, Silver and more' },
              { name: 'Indices', desc: 'Global indices with deep liquidity' },
              { name: 'Crypto', desc: 'Top crypto pairs 24/7' },
            ].map((m) => (
              <div key={m.name} className="rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm transition-shadow">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500" />
                <h3 className="mt-4 font-semibold">{m.name}</h3>
                <p className="text-sm text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <RebateCalculator />

        <Section id="partners" title="Partner Program" muted>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-lg">Why partner with us?</h3>
              <ul className="mt-4 list-disc pl-5 text-slate-600 space-y-2">
                <li>Tiered rebates with lifetime earnings</li>
                <li>Real-time tracking and transparent reporting</li>
                <li>Dedicated partner success team</li>
              </ul>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget).entries());
                alert(`Partner application submitted!\nName: ${data.name}\nEmail: ${data.email}`);
                e.currentTarget.reset();
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-semibold text-lg">Partner Application</h3>
              <div className="mt-4 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Full Name</span>
                  <input name="name" required className="rounded-lg border border-slate-300 px-3 py-2" placeholder="John Doe" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Email</span>
                  <input name="email" type="email" required className="rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm text-slate-600">Region</span>
                    <input name="region" className="rounded-lg border border-slate-300 px-3 py-2" placeholder="e.g. SEA" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm text-slate-600">Monthly Traffic</span>
                    <select name="traffic" className="rounded-lg border border-slate-300 px-3 py-2">
                      <option>0 - 1k</option>
                      <option>1k - 10k</option>
                      <option>10k - 50k</option>
                      <option>50k+</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Message</span>
                  <textarea name="message" rows={4} className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Tell us about your audience" />
                </label>
                <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Submit Application</button>
              </div>
            </form>
          </div>
        </Section>

        <Section id="copytrading" title="Copy Trading">
          <div className="grid md:grid-cols-3 gap-6">
            {['Discover top strategy providers', 'Risk controls per follower', 'Transparent performance metrics'].map((t) => (
              <div key={t} className="rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="font-medium">{t}</h4>
                <p className="text-sm text-slate-600 mt-2">Seamlessly allocate funds and follow pros with full control.</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" muted>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { t: 'Webinars', d: 'Weekly live sessions with analysts' },
              { t: 'Courses', d: 'From beginner to advanced trading' },
              { t: 'Playbooks', d: 'Setup guides and best practices' },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="font-medium">{x.t}</h4>
                <p className="text-sm text-slate-600 mt-2">{x.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="promotions" title="Promotions">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Welcome bonus', 'Zero-fee deposits', 'Seasonal contests'].map((p) => (
              <div key={p} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
                <h4 className="font-semibold">{p}</h4>
                <p className="text-sm text-slate-600 mt-2">Limited-time offers to boost your edge.</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pricing" title="Pricing" muted>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { plan: 'Standard', spread: 'from 1.0 pip', com: '$0 commission' },
              { plan: 'ECN', spread: 'from 0.0 pip', com: '$3.5 per lot' },
              { plan: 'VIP', spread: 'custom', com: 'lowest fees' },
            ].map((x) => (
              <div key={x.plan} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold">{x.plan}</h4>
                <p className="mt-2 text-sm text-slate-600">Spreads {x.spread}</p>
                <p className="text-sm text-slate-600">Commission {x.com}</p>
                <button className="mt-4 inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Get Started</button>
              </div>
            ))}
          </div>
        </Section>

        <Section id="support" title="Support">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-lg">Help Center</h3>
              <p className="text-sm text-slate-600 mt-2">Find quick answers in our knowledge base or contact us directly.</p>
              <ul className="mt-4 text-sm text-slate-600 space-y-1 list-disc pl-5">
                <li>Account & Verification</li>
                <li>Deposits & Withdrawals</li>
                <li>Trading Platforms</li>
              </ul>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget).entries());
                alert(`Support ticket submitted!\nSubject: ${data.subject}`);
                e.currentTarget.reset();
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-semibold text-lg">Contact Support</h3>
              <div className="mt-4 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Email</span>
                  <input name="email" type="email" required className="rounded-lg border border-slate-300 px-3 py-2" placeholder="you@example.com" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Subject</span>
                  <input name="subject" required className="rounded-lg border border-slate-300 px-3 py-2" placeholder="How can we help?" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm text-slate-600">Message</span>
                  <textarea name="message" rows={4} className="rounded-lg border border-slate-300 px-3 py-2" placeholder="Describe the issue" />
                </label>
                <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Send</button>
              </div>
            </form>
          </div>
        </Section>

        <Section id="about" title="About" muted>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-slate-600">FlamesTrade adalah platform trading dan rebate yang elegan untuk trader Indonesia. Fokus kami pada eksekusi cepat, biaya rendah, dan pengalaman pengguna yang modern. Nikmati rebate otomatis setiap lot, program kemitraan yang menarik, serta dukungan pelanggan yang responsif.</p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
