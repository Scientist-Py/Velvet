import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RecordedVideo = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState("");
  const [dressType, setDressType] = useState("");

  const durationPrices: Record<string, number> = {
    "25": 579,
    "35": 789,
    "45": 999,
  };

  const dressTypePrices: Record<string, number> = {
    "Stripping Black Saree": 0,
    "Stripping Red Saree": 99,
    "Bikni Stipping ": 149,
    "Black Top Stipping": 199,
    "Custom": 349,
  };

  const calculateTotal = () => {
    const durationPrice = durationPrices[duration] || 0;
    const dressPrice = dressTypePrices[dressType] || 0;
    return durationPrice + dressPrice;
  };

  const total = calculateTotal();
  const canConfirm = duration !== "" && dressType !== "";
  const includes4KImages = duration === "45";

  const handleConfirm = () => {
    if (canConfirm) {
      navigate("/payment", {
        state: {
          total,
          service: "Recorded Video Session",
          details: `${duration} min video • ${dressType}${includes4KImages ? ' • 40 4K quality nude images Free' : ''}`
        }
      });
    }
  };

  const SelectionCard = ({
    selected,
    onClick,
    title,
    subtitle,
    price,
    badge,
    icon: Icon
  }: {
    selected: boolean;
    onClick: () => void;
    title: string;
    subtitle?: string;
    price?: string;
    badge?: string;
    icon?: any
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden group ${selected
        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
        : "border-border hover:border-primary/40 hover:bg-accent/50"
        }`}
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${selected ? "bg-primary text-white" : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            }`}>
            <Icon className="w-6 h-6" />
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-lg">{title}</span>
            {price && <span className={`font-bold ${selected ? "text-primary" : "text-muted-foreground"}`}>{price}</span>}
          </div>
          {badge && (
            <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider mb-2">
              {badge}
            </span>
          )}
          {subtitle && <p className="text-sm text-muted-foreground leading-snug">{subtitle}</p>}
        </div>
      </div>
      {selected && (
        <div className="absolute top-2 right-2">
          <CheckCircle className="w-5 h-5 text-primary fill-primary/10" />
        </div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-background p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-secondary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-[10px] font-black mb-4 border border-purple-500/20 uppercase tracking-widest">
            4K Quality 🔞
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Recorded Nude Content</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Watch me in Naked, <span className="text-purple-600 font-bold">nude recorded videos.</span> <br className="hidden md:block" />
            Extreme quality with <span className="italic">exclusive bonus nude photos.</span>
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-tighter">
            <span>📸 40+ Nude Photos FREE</span>
            <span>•</span>
            <span>🔥 Dildo Play</span>
            <span>•</span>
            <span>📺 4K UHD Quality</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Step 0: Quick Selection */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">⭐</span>
                  <h2 className="text-2xl font-bold">Recommended Packs</h2>
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">PRE-MAPPING</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    setDuration("25");
                    setDressType("Stripping Black Saree");
                  }}
                  className="p-5 rounded-3xl border-2 border-border hover:border-primary/50 transition-all text-center flex flex-col items-center gap-3 bg-card hover:bg-accent/50 group"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl group-hover:scale-110 transition-transform">📸</div>
                  <div className="space-y-1">
                    <h3 className="font-bold">Mini Tease</h3>
                    <p className="text-[10px] text-muted-foreground uppercase font-black">25 Min • Saree</p>
                  </div>
                  <div className="text-xl font-black text-primary mt-auto">₹579</div>
                </button>

                <button
                  onClick={() => {
                    setDuration("35");
                    setDressType("Stripping Red Saree");
                  }}
                  className="p-5 rounded-3xl border-2 border-primary bg-primary/5 transition-all text-center flex flex-col items-center gap-3 relative overflow-hidden group scale-105 shadow-xl shadow-primary/10"
                >
                  <div className="absolute top-0 right-0 bg-primary text-[8px] font-black text-white px-3 py-1 rounded-bl-xl uppercase tracking-tighter">Value</div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform text-white">🔥</div>
                  <div className="space-y-1">
                    <h3 className="font-bold">Hardcore Pack</h3>
                    <p className="text-[10px] text-primary/80 uppercase font-black">35 Min • Dildo Play</p>
                  </div>
                  <div className="text-xl font-black text-primary mt-auto">₹888</div>
                </button>

                <button
                  onClick={() => {
                    setDuration("45");
                    setDressType("Custom");
                  }}
                  className="p-5 rounded-3xl border-2 border-border hover:border-primary/50 transition-all text-center flex flex-col items-center gap-3 bg-card hover:bg-accent/50 group"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl group-hover:scale-110 transition-transform">💎</div>
                  <div className="space-y-1">
                    <h3 className="font-bold">VIP Mega Pack</h3>
                    <p className="text-[10px] text-muted-foreground uppercase font-black">45 Min • 4K UHD</p>
                  </div>
                  <div className="text-xl font-black text-primary mt-auto">₹1348</div>
                </button>
              </div>
            </section>

            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-4 text-muted-foreground font-bold tracking-widest">Or Build Custom Video</span>
              </div>
            </div>

            {/* Step 1: Duration */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-secondary text-muted-foreground flex items-center justify-center font-bold">1</span>
                <h2 className="text-2xl font-bold">How long should the video be?</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectionCard
                  selected={duration === "25"}
                  onClick={() => setDuration("25")}
                  title="25 Minutes"
                  subtitle="Striping, Fingering and moaning 💋."
                  price="₹579"
                  icon={Camera}
                />
                <SelectionCard
                  selected={duration === "35"}
                  onClick={() => setDuration("35")}
                  title="35 Minutes"
                  subtitle="Eating My Cum and Playing With dildo💦💋. "
                  price="₹789"
                  icon={Camera}
                />
                <SelectionCard
                  selected={duration === "45"}
                  onClick={() => setDuration("45")}
                  title="45 Minutes + Bonus"
                  subtitle="Full Video Cumming 7 Times In 4 Diffrent Dress💋💦."
                  price="₹999"
                  badge="Best Value"
                  icon={Camera}
                />
              </div>
            </section>

            {/* Step 2: Dress Type */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-secondary text-muted-foreground flex items-center justify-center font-bold">2</span>
                <h2 className="text-2xl font-bold">Choose the outfit</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(dressTypePrices).map(([name, price]) => (
                  <SelectionCard
                    key={name}
                    selected={dressType === name}
                    onClick={() => setDressType(name)}
                    title={name}
                    price={price === 0 ? "Included" : `+₹${price}`}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Summary Side Bar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="glass-card rounded-3xl p-8 border-2 border-primary/10 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />

                <h3 className="text-xl font-bold mb-6">Order Summary</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-medium text-right ml-4">Recorded Video</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{duration ? `${duration} mins` : "Not selected"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Outfit</span>
                    <span className="font-medium truncate ml-4 text-right">{dressType || "Not selected"}</span>
                  </div>
                  {includes4KImages && (
                    <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-xs flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="font-bold text-primary">Bonus: 40 4K Photos Included!</span>
                    </div>
                  )}
                  <div className="pt-4 border-t border-dashed">
                    <div className="flex justify-between items-end">
                      <span className="font-bold">Total Amount</span>
                      <span className="text-3xl font-black text-primary">₹{total}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full text-lg h-16 rounded-2xl shadow-lg shadow-primary/20"
                  onClick={handleConfirm}
                  disabled={!canConfirm}
                >
                  Confirm & Pay
                </Button>

                {!canConfirm && (
                  <p className="text-center text-xs text-muted-foreground mt-4 italic">
                    Complete selection to proceed
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecordedVideo;
