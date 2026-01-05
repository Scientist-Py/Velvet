import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, QrCode, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import QRCode from "qrcode";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [qrCodeDataURL, setQrCodeDataURL] = useState<string>("");

  const { total, service, details } = location.state || {
    total: 0,
    service: "Consultation",
    details: "",
  };

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const upiId = "ayushiraoo@ybl";
        const upiString = `upi://pay?pa=${upiId}&am=${total}&cu=INR&tn=Content Payment`;
        const qrCodeDataURL = await QRCode.toDataURL(upiString, {
          width: 512,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeDataURL(qrCodeDataURL);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    if (total > 0) {
      generateQRCode();
    }
  }, [total]);

  const handlePayment = () => {
    if (agreedToTerms) {
      const currentRevenue = parseInt(localStorage.getItem("anushka_revenue") || "0");
      localStorage.setItem("anushka_revenue", (currentRevenue + total).toString());
      navigate("/verification");
    }
  };

  const detailParts = details.split(' • ');

  return (
    <div className="min-h-screen bg-background p-4 py-12">
      <div className="max-w-5xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-secondary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">✓</span>
            <span className="text-sm font-black uppercase tracking-widest text-green-600">Configuration Saved</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Complete Your Order</h1>
          <p className="text-xl text-muted-foreground">Finalize the payment to get instant access to your session.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Summary & Guidelines */}
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Order Summary
              </h2>
              <div className="glass-card rounded-3xl overflow-hidden border-2 border-primary/5">
                <div className="p-6 bg-primary/5 border-b border-primary/10">
                  <span className="text-xs font-black uppercase tracking-widest text-primary/60">Service</span>
                  <p className="text-2xl font-black text-primary">{service}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Details</span>
                      <p className="font-bold text-sm">{detailParts[1] || 'Standard'}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Platform / Type</span>
                      <p className="font-bold text-sm truncate">{detailParts[0] || 'In-App'}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-dashed space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Outfit Selected</span>
                    <p className="font-bold">{detailParts[2] || 'Not Specified'}</p>
                  </div>
                  {details.includes('4K quality') && (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-bold text-green-700">Bonus: 40 4K Images Included</span>
                    </div>
                  )}
                </div>
                <div className="p-6 bg-secondary/30 flex justify-between items-center">
                  <p className="font-bold text-lg">Total Amount</p>
                  <p className="text-3xl font-black text-primary">₹{total}</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold">Important Guidelines</h2>
              <div className="grid gap-4">
                <div className="p-4 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1 uppercase tracking-tight">No Recording No Refund</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">If we find you recording the call or video, your session will be terminated instantly without any refund.</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-accent/50 border border-border flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm mb-1 uppercase tracking-tight">Privacy Guaranteed</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Your details are 100% anonymous. We use SSL secure processing for all connections.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side: Payment Card */}
          <div className="lg:sticky lg:top-8">
            <div className="glass-card rounded-[2.5rem] p-8 border-2 border-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-primary/40"></div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-[10px] font-black border border-green-500/20 uppercase tracking-widest mb-4">
                  <ShieldCheck className="w-3 h-3" /> Secure UPI Gateway
                </div>
                <h3 className="text-2xl font-black tracking-tight">Pay with Any UPI App</h3>
                <p className="text-sm text-muted-foreground mt-1">Scan the QR code below using Google Pay, PhonePe, or Paytm</p>
              </div>

              <div className="relative group mx-auto mb-8 max-w-[280px]">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary via-purple-500 to-primary/20 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative p-6 bg-white rounded-[2rem] shadow-xl border-2 border-black/5 flex items-center justify-center aspect-square">
                  {qrCodeDataURL ? (
                    <img src={qrCodeDataURL} alt="UPI QR" className="w-full h-full object-contain" />
                  ) : (
                    <div className="animate-pulse flex flex-col items-center">
                      <QrCode className="w-16 h-16 text-muted-foreground/30 mb-2" />
                      <p className="text-[10px] text-muted-foreground">Generating...</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-4 text-center border border-primary/10 mb-8 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">Payable Amount</span>
                <p className="text-4xl font-black text-primary leading-none">₹{total}</p>
                <p className="text-[11px] font-medium text-muted-foreground tracking-wide mt-2">UPI ID: <span className="text-black font-bold">ayushiraoo@ybl</span></p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-2xl border border-border">
                  <Checkbox
                    id="terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-xs leading-relaxed font-medium cursor-pointer">
                    I confirm I am 18+ and I have read and agree to all the <span className="text-primary font-bold">Privacy Guidelines</span> and the <span className="text-primary font-bold">No-Recording Policy</span>.
                  </label>
                </div>

                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full text-lg h-16 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
                  onClick={handlePayment}
                  disabled={!agreedToTerms}
                >
                  I Have Paid
                </Button>
                <p className="text-center text-[10px] text-muted-foreground font-medium uppercase tracking-widest italic">
                  Tap only after payment is complete
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-8 opacity-40">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black">SSL</span>
                <Lock className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black">AUTO</span>
                <QrCode className="w-3 h-3" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black">256-BIT</span>
                <ShieldCheck className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
