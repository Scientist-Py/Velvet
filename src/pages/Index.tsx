import { Link, useNavigate } from "react-router-dom";
import { Video, Film, CheckCircle, Users, Image, Lock, MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { initializeChats, formatTimeAgo, ChatMessage } from "@/lib/chatUtils";

const videoCallBg = "/kanika/video_call.jpg";
const recordedBg = "/kanika/recording.jpg";
import FAQSection from "@/components/FAQSection";
import NotificationModal from "@/components/NotificationModal";

const Index = () => {
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const proceedToPayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      const basePrice = 780;
      const gstRate = 0.12;
      const total = Math.round(basePrice * (1 + gstRate));

      navigate("/payment", {
        state: {
          total: total,
          service: "Premium VIP WhatsApp Group",
          details: "WhatsApp • 1 Month Validity • Daily Content",
          description: "Join my VIP WhatsApp group for 1 month. You will get daily 30+ tease and nude images and 3+ tease videos—enough to make you cum daily in my new dresses! 💋"
        }
      });
    }, 1500);
  };

  useEffect(() => {
    const currentVisitors = parseInt(localStorage.getItem("kanika_visitors") || "0");
    localStorage.setItem("kanika_visitors", (currentVisitors + 1).toString());

    const loadedChats = initializeChats();
    setChats(loadedChats);

    const interval = setInterval(() => {
      setChats([...initializeChats()]);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-white">
      <NotificationModal />

      {/* Hero Section with Floating Glows */}
      <div className="relative pt-20 pb-40 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-secondary/10 blur-[100px] rounded-full animate-glow-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 text-primary text-xs font-black mb-8 tracking-widest uppercase animate-fade-in shadow-lg shadow-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Official 18+ App
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none animate-fade-in">
            KANIKA <span className="text-neon bg-gradient-to-r from-[#ff0055] to-[#7000ff] bg-clip-text text-transparent">CHAUHAN</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in [animation-delay:200ms] font-medium leading-relaxed italic">
            "Your dirtiest fantasies are just a click away. <br /> Let's get naughty, privately." 💋
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Button
              variant="gradient"
              size="lg"
              className="h-16 px-10 rounded-full text-lg font-black naughty-gradient neon-glow hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE MY WORLD 🔥
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-16 px-10 rounded-full text-lg font-black border-2 border-white/10 hover:bg-white/5 transition-all duration-300"
              onClick={() => document.getElementById('album-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW PRIVATE ALBUM
            </Button>
          </div>
        </div>

        {/* Floating Hero Image */}
        <div className="mt-20 max-w-6xl mx-auto px-6 relative animate-fade-in [animation-delay:600ms]">
          <div className="relative group perspective-1000">
            <div className="w-full h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl transition-transform duration-700 group-hover:rotate-x-1 group-hover:rotate-y-1 group-hover:scale-[1.01]">
              <img
                src="/kanika/main.png"
                className="w-full h-full object-cover object-top"
                alt="Kanika Chauhan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            {/* Stats Badge */}
            <div className="absolute bottom-10 left-10 glass-card p-6 rounded-[2rem] border-primary/20 backdrop-blur-3xl animate-float">
              <div className="text-3xl font-black text-primary">5,000+</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic">Satisfied BADDIES</div>
            </div>

            <div className="absolute top-10 right-10 bg-green-500/20 text-green-500 border border-green-500/30 px-4 py-2 rounded-full font-black text-[10px] tracking-widest flex items-center gap-2 animate-pulse shadow-lg shadow-green-500/10">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              LIVE NOW
            </div>
          </div>
        </div>
      </div>

      {/* Main Categories */}
      <div id="plans" className="max-w-7xl mx-auto px-6 py-20 relative px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic tracking-tight">Choose Your Fantasy 🫦</h2>
          <div className="h-1.5 w-32 naughty-gradient rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Video Call Category */}
          <Link to="/video-call" className="group h-full">
            <div className="relative h-full glass-card rounded-[3.5rem] overflow-hidden border-white/10 p-2 transition-all duration-500 hover:border-primary/50 group-hover:shadow-[0_40px_100px_rgba(255,0,85,0.2)] transform hover:-translate-y-4">
              <div className="relative h-[450px] rounded-[2.8rem] overflow-hidden">
                <img src={videoCallBg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Video Call" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="naughty-gradient text-white text-[10px] font-black px-4 py-2 rounded-full tracking-widest uppercase shadow-xl animate-pulse">Live 🔞</span>
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-4xl font-black text-white mb-2 italic">Tease Video Call</h3>
                  <div className="flex items-center gap-3 text-xs font-bold text-primary italic uppercase tracking-wider mb-6">
                    <CheckCircle className="w-4 h-4 fill-primary/20" /> Fingering & Moaning Included 💦
                  </div>
                  <Button className="w-full h-16 rounded-3xl naughty-gradient text-white font-black text-xl shadow-2xl transition-all active:scale-95 group-hover:neon-glow" variant="gradient">
                    START PRIVATE SESSION
                  </Button>
                </div>
              </div>
            </div>
          </Link>

          {/* Recorded Content Category */}
          <Link to="/recorded-video" className="group h-full">
            <div className="relative h-full glass-card rounded-[3.5rem] overflow-hidden border-white/10 p-2 transition-all duration-500 hover:border-secondary/50 group-hover:shadow-[0_40px_100px_rgba(112,0,255,0.2)] transform hover:-translate-y-4">
              <div className="relative h-[450px] rounded-[2.8rem] overflow-hidden">
                <img src={recordedBg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Recorded Video" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute top-8 left-8">
                  <span className="bg-[#7000ff] text-white text-[10px] font-black px-4 py-2 rounded-full tracking-widest uppercase shadow-xl">4K Quality</span>
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-4xl font-black text-white mb-2 italic">Recorded Nudes</h3>
                  <div className="flex items-center gap-3 text-xs font-bold text-[#7000ff] italic uppercase tracking-wider mb-6">
                    <CheckCircle className="w-4 h-4 fill-purple-500/20" /> 40+ Bonus Nude Photos Free 📸
                  </div>
                  <Button className="w-full h-16 rounded-3xl bg-[#7000ff] text-white font-black text-xl shadow-2xl transition-all active:scale-95 group-hover:shadow-[0_0_40px_rgba(112,0,255,0.4)]" variant="secondary">
                    WATCH VIDEOS NOW
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Trust & Features Section */}
      <div className="py-20 bg-white/5 border-y border-white/5 relative overflow-hidden px-4">
        <div className="absolute top-0 right-[-10%] w-[30%] h-full bg-primary/5 blur-3xl rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Verified Profile", sub: "100% Genuine", icon: "💎" },
            { label: "Secure Payment", sub: "Fully Encrypted", icon: "🔒" },
            { label: "High Speed", sub: "No Buffering", icon: "⚡" },
            { label: "24/7 Support", sub: "Always Online", icon: "🔥" }
          ].map((item, i) => (
            <div key={i} className="text-center group italic">
              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:neon-glow">
                {item.icon}
              </div>
              <div className="font-black text-lg tracking-tight">{item.label}</div>
              <div className="text-xs text-muted-foreground font-bold italic uppercase tracking-tighter opacity-70">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div id="album-section" className="py-32 max-w-7xl mx-auto px-6 relative px-4">
        <div className="text-center mb-20 italic">
          <span className="text-primary font-black uppercase text-xs tracking-[0.5em] mb-4 block">Official Gallery</span>
          <h2 className="text-5xl font-black mb-4">LEAKED MOMENTS 😈</h2>
          <p className="text-muted-foreground font-medium italic">A sneak peek of what awaits you inside the premium section.</p>
        </div>

        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {[
            "/kanika/kanika_1.jpeg",
            "/kanika/kanika_2.jpeg",
            "/kanika/kanika_3.jpeg",
            "/kanika/kanika_4.jpeg",
            "/kanika/kanika_5.jpeg",
            "/kanika/kanika_6.jpeg"
          ].map((url, index) => (
            <div
              key={index}
              onClick={proceedToPayment}
              className="relative group overflow-hidden rounded-[2.5rem] glass-card border-white/10 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img src={url} alt={`Kanika ${index + 1}`} className="w-full transition-all duration-1000 group-hover:scale-125 group-hover:blur-sm" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Lock className="w-12 h-12 text-white fill-white/20 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto">
          <div className="glass-card rounded-[3.5rem] border-primary/30 p-12 text-center relative overflow-hidden group hover:neon-glow transition-all duration-700">
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

            <h3 className="text-4xl font-black mb-8 italic">PREMIUM VIP PASS 👑</h3>

            <ul className="text-left space-y-4 mb-10 max-w-sm mx-auto">
              {[
                "30+ Full Nude Photos Every Day 📸",
                "3+ Extreme Cumming Videos Daily 📽️",
                "Direct Private Chat with Me 🫦",
                "Chance for Private 1:1 Calls 🔞"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-bold italic">
                  <div className="w-6 h-6 rounded-full naughty-gradient flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mb-10 text-center border-t border-white/10 pt-8">
              <div className="text-5xl font-black text-white flex items-end justify-center gap-2">
                ₹780
                <span className="text-sm font-bold text-muted-foreground mb-2">/ month</span>
              </div>
            </div>

            <Button
              variant="gradient"
              size="lg"
              className="w-full h-18 rounded-3xl naughty-gradient text-white font-black text-2xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all neon-glow"
              onClick={proceedToPayment}
            >
              JOIN VIP CLUB NOW 🚀
            </Button>
            <p className="mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic opacity-50">Locked to 50 members only • Secure Access</p>
          </div>
        </div>
      </div>

      <FAQSection />

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 relative px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">KANIKA MIDNIGHT</h2>
          <p className="text-muted-foreground text-xs font-bold uppercase tracking-[0.4em] mb-4">Official Platform • 18+ Adult Destination</p>
          <div className="flex justify-center gap-6 mb-12">
            <Link to="/support" className="text-sm font-black italic hover:text-primary transition-colors underline-offset-8 hover:underline">Support</Link>
            <a href="#" className="text-sm font-black italic hover:text-primary transition-colors underline-offset-8 hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm font-black italic hover:text-primary transition-colors underline-offset-8 hover:underline">18+ Status</a>
          </div>
          <p className="text-muted-foreground text-[10px] font-bold opacity-30">© 2024 KANIKA CHAUHAN. ALL RIGHTS RESERVED. KEEP IT DIRTY, KEEP IT PRIVATE.</p>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-10 right-10 z-50 w-20 h-20 rounded-3xl group shadow-[0_20px_50px_rgba(255,0,85,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden border border-white/10"
      >
        <div className="absolute inset-0 naughty-gradient group-hover:rotate-180 transition-transform duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {isChatOpen ? <X className="w-10 h-10" /> : <MessageCircle className="w-10 h-10 animate-float" />}
        </div>
        <span className="absolute top-4 right-4 w-4 h-4 bg-green-500 border-4 border-black rounded-full animate-pulse shadow-lg"></span>
      </button>

      {/* Chat Popup - Naughty Redesign */}
      {isChatOpen && (
        <div className="fixed bottom-32 right-10 w-[400px] h-[600px] glass-card rounded-[3rem] border-primary/20 shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-50 flex flex-col overflow-hidden animate-slide-up origin-bottom-right">
          <div className="p-8 border-b border-white/5 flex items-center gap-4 bg-white/5">
            <div className="relative">
              <img src="/kanika/kanika_6.jpeg" className="w-14 h-14 rounded-2xl object-cover border-2 border-primary" alt="Kanika" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-black rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-black text-xl italic flex items-center gap-2">Kanika Chauhan <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500/20" /></h3>
              <p className="text-[10px] text-green-500 font-bold tracking-widest uppercase italic">Streaming Now 🫦</p>
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-6 flex flex-col-reverse bg-black/20">
            <div className="h-4"></div>
            {chats.slice(0, 15).map((chat) => (
              <div key={chat.id} className={`flex flex-col gap-2 ${chat.user === 'Admin' ? 'items-end' : 'items-start'} animate-fade-in`}>
                <span className={`text-[9px] font-black uppercase tracking-widest italic pt-1 px-1 ${chat.user === 'Admin' ? 'text-primary' : 'text-muted-foreground'}`}>
                  {chat.user === 'Admin' ? 'Admin 👑' : chat.user}
                </span>
                <div className={`max-w-[85%] rounded-[1.8rem] px-5 py-4 text-sm font-medium shadow-xl ${chat.user === 'Admin'
                  ? 'naughty-gradient text-white rounded-tr-none'
                  : 'glass-card border-white/10 text-white rounded-tl-none'}`}>
                  {chat.message}
                </div>
              </div>
            ))}
            <div className="text-center text-[10px] text-muted-foreground uppercase tracking-[0.4em] mb-10 opacity-30">Hot Conversations Today</div>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/5">
            <div className="relative">
              <input readOnly className="w-full h-16 bg-black/40 border-2 border-white/5 rounded-3xl px-8 text-sm focus:outline-none text-muted-foreground font-bold italic" placeholder="Only VIP members can talk..." />
              <div
                onClick={proceedToPayment}
                className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-[2px] rounded-3xl cursor-pointer group hover:bg-primary/30 transition-all duration-300"
              >
                <div className="naughty-gradient px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl group-hover:scale-110 transition-transform neon-glow">UNLOCK VIP CHAT 💸</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Secure Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black backdrop-blur-3xl flex flex-col items-center justify-center animate-fade-in">
          <div className="relative w-40 h-40 mb-10">
            <div className="absolute inset-0 border-[6px] border-primary/20 rounded-[2.5rem] animate-pulse"></div>
            <div className="absolute inset-0 border-[6px] border-t-primary rounded-[2.5rem] animate-spin"></div>
            <img src="/kanika/kanika_6.jpeg" className="absolute inset-4 rounded-[1.8rem] object-cover" alt="Loading" />
          </div>
          <h2 className="text-3xl font-black italic tracking-tighter text-neon text-white">ENTERING PRIVATE ZONE...</h2>
          <p className="text-primary text-xs font-black uppercase tracking-[0.5em] mt-4 animate-pulse">SSL Secure Channel Active</p>
        </div>
      )}
    </div>
  );
};

export default Index;
