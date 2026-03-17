import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Download, Upload, Trash2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const NidScannerPage = () => {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleImage = (side: "front" | "back", file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (side === "front") setFrontImage(e.target?.result as string);
      else setBackImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handlePDF = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: "#ffffff" });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const w = pdf.internal.pageSize.getWidth();
    const h = (canvas.height * w) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, w, h);
    pdf.save("এনআইডি-কার্ড.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">💳 এনআইডি কার্ড স্ক্যানার</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary">কার্ডের সামনের দিক</h2>
              <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-input rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                {frontImage ? (
                  <img src={frontImage} alt="সামনের দিক" className="max-h-44 object-contain rounded" />
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Upload className="w-10 h-10 mx-auto mb-2" />
                    <p>ছবি আপলোড করুন</p>
                  </div>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImage("front", e.target.files?.[0] || null)} />
              </label>
              {frontImage && (
                <Button variant="outline" size="sm" className="mt-3" onClick={() => setFrontImage(null)}>
                  <Trash2 className="w-4 h-4" /> মুছে ফেলুন
                </Button>
              )}
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary">কার্ডের পেছনের দিক</h2>
              <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-input rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                {backImage ? (
                  <img src={backImage} alt="পেছনের দিক" className="max-h-44 object-contain rounded" />
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Upload className="w-10 h-10 mx-auto mb-2" />
                    <p>ছবি আপলোড করুন</p>
                  </div>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImage("back", e.target.files?.[0] || null)} />
              </label>
              {backImage && (
                <Button variant="outline" size="sm" className="mt-3" onClick={() => setBackImage(null)}>
                  <Trash2 className="w-4 h-4" /> মুছে ফেলুন
                </Button>
              )}
            </div>
          </div>

          {/* Preview */}
          <div className="sticky top-20">
            <div ref={previewRef} className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-6">
              <h3 className="text-lg font-bold text-center border-b border-border pb-3">এনআইডি কার্ড প্রিভিউ</h3>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 min-h-[180px] flex items-center justify-center bg-muted/30">
                  {frontImage ? (
                    <img src={frontImage} alt="সামনে" className="max-h-[200px] object-contain" />
                  ) : (
                    <p className="text-muted-foreground">সামনের দিকের ছবি</p>
                  )}
                </div>
                <div className="border border-border rounded-lg p-4 min-h-[180px] flex items-center justify-center bg-muted/30">
                  {backImage ? (
                    <img src={backImage} alt="পেছনে" className="max-h-[200px] object-contain" />
                  ) : (
                    <p className="text-muted-foreground">পেছনের দিকের ছবি</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              <Button variant="success" onClick={handlePDF} disabled={!frontImage && !backImage}>
                <Download className="w-5 h-5" /> PDF ডাউনলোড করুন
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

export default NidScannerPage;
