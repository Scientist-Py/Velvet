import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Globe, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const VideoCall = () => {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState("");
  const [duration, setDuration] = useState("");
  const [dressType, setDressType] = useState("");

  const durationPrices: Record<string, number> = {
    "10": 339,
    "15": 399,
    "25": 499,
    "30": 599,
    "45": 799,
  };

  const dressTypePrices: Record<string, number> = {
    "Stripping Black Saree": 0,
    "Stripping Red Saree": 99,
    "Bikni Stipping ": 149,
    "Black Top Stipping": 199,
    "Custom": 349,
  };

  const platformPrices: Record<string, number> = {
    "Website": 0,
    "Telegram": 0,
    "WhatsApp": 150,
  };

  const calculateTotal = () => {
    const durationPrice = durationPrices[duration] || 0;
    const dressPrice = dressTypePrices[dressType] || 0;
    const platformPrice = platformPrices[platform] || 0;
    return durationPrice + dressPrice + platformPrice;
  };

  const total = calculateTotal();
  const canConfirm = platform && duration && dressType;

  const handleConfirm = () => {
    if (canConfirm) {
      navigate("/payment", {
        state: {
          total,
          service: "Live Video Call",
          details: `${platform} • ${duration} min • ${dressType}`
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
    icon: Icon
  }: {
    selected: boolean;
    onClick: () => void;
    title: string;
    subtitle?: string;
    price?: string;
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
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">{title}</span>
            {price && <span className={`font-bold ${selected ? "text-primary" : "text-muted-foreground"}`}>{price}</span>}
          </div>
          {subtitle && <p className="text-sm text-muted-foreground mt-1 leading-snug">{subtitle}</p>}
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black mb-4 border border-primary/20 uppercase tracking-widest">
            Live 🔞
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Live Nude Video Call</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Full nude, explicit, and teasing sessions. <br className="hidden md:block" />
            <span className="text-primary italic font-medium">I will eat your whole cum my BADDIES. 💋</span>
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-tighter">
            <span>💦 Fingering Included</span>
            <span>•</span>
            <span>🔥 Moaning Included</span>
            <span>•</span>
            <span>🔞 Cumming Included</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Step 1: Platform */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</span>
                <h2 className="text-2xl font-bold">Where would you like to call?</h2>
              </div>
              <div className="grid gap-4">
                <SelectionCard
                  selected={platform === "Website"}
                  onClick={() => setPlatform("Website")}
                  title="Website Call"
                  subtitle="Most private — uses our secure in-browser video system."
                  price="₹0"
                  icon={Globe}
                />
                <SelectionCard
                  selected={platform === "Telegram"}
                  onClick={() => setPlatform("Telegram")}
                  title="Telegram"
                  subtitle="Convenient — calls via your Telegram username."
                  price="₹0"
                  icon={MessageCircle}
                />
                <SelectionCard
                  selected={platform === "WhatsApp"}
                  onClick={() => setPlatform("WhatsApp")}
                  title="WhatsApp"
                  subtitle="Direct — shares your phone number for the call."
                  price="+₹150"
                  icon={Phone}
                />
              </div>
            </section>

            {/* Step 2: Duration */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</span>
                <h2 className="text-2xl font-bold">How long should the session be?</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(durationPrices).map(([mins, price]) => (
                  <SelectionCard
                    key={mins}
                    selected={duration === mins}
                    onClick={() => setDuration(mins)}
                    title={`${mins} Minutes`}
                    price={`₹${price}`}
                  />
                ))}
              </div>
            </section>

            {/* Step 3: Dress Type */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</span>
                <h2 className="text-2xl font-bold">What should I wear?</h2>
              </div>
              <div className="grid gap-4">
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

                <h3 className="text-xl font-bold mb-6">Session Summary</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="font-medium">{platform || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{duration ? `${duration} mins` : "Not selected"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dress Type</span>
                    <span className="font-medium truncate ml-4 text-right">{dressType || "Not selected"}</span>
                  </div>
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
                    Please complete all steps to proceed
                  </p>
                )}
              </div>

              {platform === "WhatsApp" && (
                <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-4 flex gap-3">
                  <span className="text-xl">⚠️</span>
                  <p className="text-xs text-destructive-foreground/80 leading-relaxed">
                    WhatsApp calls share your phone number. Spamming results in an immediate permanent block.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
