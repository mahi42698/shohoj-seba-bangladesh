import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Download, Upload, Trash2 } from "lucide-react";
import html2canvas from "html2canvas";

const photoSizes = [
  { label: "পাসপোর্ট সাইজ (35×45 মিমি)", w: 35, h: 45 },
  { label: "স্ট্যাম্প সাইজ (25×30 মিমি)", w: 25, h: 30 },
  { label: "পোস্টকার্ড সাইজ (50×70 মিমি)", w: 50, h: 70 },
];

const PassportPhotoPage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState(0);
  const [copies, setCopies] = useState(4);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleImage = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: "#ffffff" });
    const link = document.createElement("a");
    link.download = "পাসপোর্ট-ছবি.jpg";
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
  };

  const size = photoSizes[selectedSize];
  const ratio = size.w / size.h;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">📷 পাসপোর্ট সাইজ ছবি তৈরি</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary">ছবি আপলোড</h2>
              <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-input rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                {image ? (
                  <img src={image} alt="আপলোড" className="max-h-44 object-contain rounded" />
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Upload className="w-10 h-10 mx-auto mb-2" />
                    <p>ছবি নির্বাচন করুন</p>
                  </div>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImage(e.target.files?.[0] || null)} />
              </label>
              {image && (
                <Button variant="outline" size="sm" className="mt-3" onClick={() => setImage(null)}>
                  <Trash2 className="w-4 h-4" /> মুছে ফেলুন
                </Button>
              )}
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary">সাইজ নির্বাচন</h2>
              <div className="space-y-3">
                {photoSizes.map((s, i) => (
                  <label key={i} className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${selectedSize === i ? "border-primary bg-accent" : "border-input"}`}>
                    <input type="radio" checked={selectedSize === i} onChange={() => setSelectedSize(i)} className="accent-primary w-5 h-5" />
                    <span className="text-base">{s.label}</span>
                  </label>
                ))}
              </div>

              <div className="mt-4">
                <label className="block text-base font-medium mb-1.5">কপির সংখ্যা</label>
                <select
                  value={copies}
                  onChange={(e) => setCopies(Number(e.target.value))}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground text-base"
                >
                  {[1, 2, 4, 6, 8].map((n) => (
                    <option key={n} value={n}>{n}টি</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="sticky top-20">
            <div ref={previewRef} className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h3 className="text-lg font-bold text-center mb-4">ছবি প্রিভিউ ({size.label})</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {Array.from({ length: copies }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-border rounded overflow-hidden bg-muted/30 flex items-center justify-center"
                    style={{ width: `${size.w * 2.5}px`, height: `${size.h * 2.5}px` }}
                  >
                    {image ? (
                      <img src={image} alt={`কপি ${i + 1}`} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-xs text-muted-foreground">ছবি</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              <Button variant="success" onClick={handleDownload} disabled={!image}>
                <Download className="w-5 h-5" /> JPG ডাউনলোড
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PassportPhotoPage;
