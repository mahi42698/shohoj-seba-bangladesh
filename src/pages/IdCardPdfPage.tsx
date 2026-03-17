import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Download, Upload, Trash2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CardData {
  name: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  nid: string;
  address: string;
  bloodGroup: string;
  photo: string | null;
}

const initial: CardData = {
  name: "", fatherName: "", motherName: "", birthDate: "", nid: "", address: "", bloodGroup: "", photo: null,
};

const inputClass = "w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:outline-none";
const labelClass = "block text-base font-medium mb-1.5 text-foreground";

const IdCardPdfPage = () => {
  const [form, setForm] = useState<CardData>(initial);
  const previewRef = useRef<HTMLDivElement>(null);

  const u = (field: keyof CardData, val: string) => setForm({ ...form, [field]: val });

  const handlePhoto = (file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setForm({ ...form, photo: e.target?.result as string });
    reader.readAsDataURL(file);
  };

  const exportPDF = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: "#fff" });
    const pdf = new jsPDF("p", "mm", "a4");
    const w = pdf.internal.pageSize.getWidth();
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, (canvas.height * w) / canvas.width);
    pdf.save("আইডি-কার্ড.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">🪪 আইডি কার্ড PDF মেকার</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary border-b border-border pb-3">ব্যক্তিগত তথ্য</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2"><label className={labelClass}>নাম</label><input className={inputClass} value={form.name} onChange={e => u("name", e.target.value)} /></div>
                <div><label className={labelClass}>পিতার নাম</label><input className={inputClass} value={form.fatherName} onChange={e => u("fatherName", e.target.value)} /></div>
                <div><label className={labelClass}>মাতার নাম</label><input className={inputClass} value={form.motherName} onChange={e => u("motherName", e.target.value)} /></div>
                <div><label className={labelClass}>জন্ম তারিখ</label><input className={inputClass} type="date" value={form.birthDate} onChange={e => u("birthDate", e.target.value)} /></div>
                <div><label className={labelClass}>NID নম্বর</label><input className={inputClass} value={form.nid} onChange={e => u("nid", e.target.value)} /></div>
                <div><label className={labelClass}>রক্তের গ্রুপ</label>
                  <select className={inputClass} value={form.bloodGroup} onChange={e => u("bloodGroup", e.target.value)}>
                    <option value="">নির্বাচন করুন</option>
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2"><label className={labelClass}>ঠিকানা</label><input className={inputClass} value={form.address} onChange={e => u("address", e.target.value)} /></div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary">ছবি আপলোড</h2>
              <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-input rounded-lg cursor-pointer hover:bg-muted/50">
                {form.photo ? (
                  <img src={form.photo} alt="ছবি" className="max-h-36 object-contain rounded" />
                ) : (
                  <div className="text-center text-muted-foreground"><Upload className="w-8 h-8 mx-auto mb-2" /><p>ছবি নির্বাচন করুন</p></div>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={e => handlePhoto(e.target.files?.[0] || null)} />
              </label>
              {form.photo && <Button variant="outline" size="sm" className="mt-3" onClick={() => setForm({ ...form, photo: null })}><Trash2 className="w-4 h-4" /> মুছে ফেলুন</Button>}
            </div>
          </div>

          {/* Preview */}
          <div className="sticky top-20">
            <div ref={previewRef} className="bg-card rounded-xl shadow-lg border-2 border-primary/30 overflow-hidden">
              {/* Front */}
              <div className="p-6 border-b border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-primary">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h3>
                    <p className="text-xs text-muted-foreground">জাতীয় পরিচয়পত্র</p>
                  </div>
                  <div className="w-20 h-24 border border-border rounded flex items-center justify-center bg-muted/30 overflow-hidden">
                    {form.photo ? <img src={form.photo} alt="ছবি" className="w-full h-full object-cover" /> : <span className="text-xs text-muted-foreground">ছবি</span>}
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p>নাম: <b>{form.name || "..."}</b></p>
                  <p>পিতা: <b>{form.fatherName || "..."}</b></p>
                  <p>মাতা: <b>{form.motherName || "..."}</b></p>
                  <p>জন্ম তারিখ: <b>{form.birthDate || "..."}</b></p>
                  <p>আইডি নম্বর: <b>{form.nid || "..."}</b></p>
                </div>
              </div>
              {/* Back */}
              <div className="p-6 bg-muted/30">
                <h4 className="text-sm font-bold mb-2">পেছনের দিক</h4>
                <div className="space-y-1 text-sm">
                  <p>ঠিকানা: <b>{form.address || "..."}</b></p>
                  <p>রক্তের গ্রুপ: <b>{form.bloodGroup || "..."}</b></p>
                </div>
                <div className="mt-6 flex justify-between">
                  <div className="text-center"><div className="border-t border-foreground/40 pt-1 px-6 text-xs">কার্ডধারীর স্বাক্ষর</div></div>
                  <div className="text-center"><div className="border-t border-foreground/40 pt-1 px-6 text-xs">কর্তৃপক্ষের স্বাক্ষর</div></div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 justify-center">
              <Button variant="success" onClick={exportPDF}><Download className="w-5 h-5" /> PDF ডাউনলোড করুন</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default IdCardPdfPage;
