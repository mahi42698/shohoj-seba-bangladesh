import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Download, Printer, Image, Plus, Trash2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface BirthCertData {
  childName: string;
  birthDate: string;
  birthPlace: string;
  gender: string;
  fatherName: string;
  fatherNid: string;
  fatherNationality: string;
  motherName: string;
  motherNid: string;
  motherNationality: string;
  address: string;
  district: string;
  upazila: string;
  union: string;
}

const initial: BirthCertData = {
  childName: "", birthDate: "", birthPlace: "", gender: "",
  fatherName: "", fatherNid: "", fatherNationality: "বাংলাদেশী",
  motherName: "", motherNid: "", motherNationality: "বাংলাদেশী",
  address: "", district: "", upazila: "", union: "",
};

const inputClass = "w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:outline-none";
const labelClass = "block text-base font-medium mb-1.5 text-foreground";

const BirthCertPage = () => {
  const [form, setForm] = useState<BirthCertData>(initial);
  const previewRef = useRef<HTMLDivElement>(null);

  const u = (field: keyof BirthCertData, val: string) => setForm({ ...form, [field]: val });

  const exportPDF = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: "#fff" });
    const pdf = new jsPDF("p", "mm", "a4");
    const w = pdf.internal.pageSize.getWidth();
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, (canvas.height * w) / canvas.width);
    pdf.save("জন্ম-সনদ-আবেদন.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">👶 জন্ম সনদ আবেদন ফরম</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-6 text-primary border-b border-border pb-3">শিশুর তথ্য</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2"><label className={labelClass}>শিশুর নাম</label><input className={inputClass} value={form.childName} onChange={e => u("childName", e.target.value)} placeholder="পূর্ণ নাম" /></div>
                <div><label className={labelClass}>জন্ম তারিখ</label><input className={inputClass} type="date" value={form.birthDate} onChange={e => u("birthDate", e.target.value)} /></div>
                <div><label className={labelClass}>জন্মস্থান</label><input className={inputClass} value={form.birthPlace} onChange={e => u("birthPlace", e.target.value)} placeholder="হাসপাতাল / বাড়ি" /></div>
                <div>
                  <label className={labelClass}>লিঙ্গ</label>
                  <select className={inputClass} value={form.gender} onChange={e => u("gender", e.target.value)}>
                    <option value="">নির্বাচন করুন</option>
                    <option value="পুরুষ">পুরুষ</option>
                    <option value="মহিলা">মহিলা</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-6 text-primary border-b border-border pb-3">পিতা-মাতার তথ্য</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className={labelClass}>পিতার নাম</label><input className={inputClass} value={form.fatherName} onChange={e => u("fatherName", e.target.value)} /></div>
                <div><label className={labelClass}>পিতার NID</label><input className={inputClass} value={form.fatherNid} onChange={e => u("fatherNid", e.target.value)} /></div>
                <div><label className={labelClass}>পিতার জাতীয়তা</label><input className={inputClass} value={form.fatherNationality} onChange={e => u("fatherNationality", e.target.value)} /></div>
                <div><label className={labelClass}>মাতার নাম</label><input className={inputClass} value={form.motherName} onChange={e => u("motherName", e.target.value)} /></div>
                <div><label className={labelClass}>মাতার NID</label><input className={inputClass} value={form.motherNid} onChange={e => u("motherNid", e.target.value)} /></div>
                <div><label className={labelClass}>মাতার জাতীয়তা</label><input className={inputClass} value={form.motherNationality} onChange={e => u("motherNationality", e.target.value)} /></div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-6 text-primary border-b border-border pb-3">ঠিকানা</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2"><label className={labelClass}>বর্তমান ঠিকানা</label><input className={inputClass} value={form.address} onChange={e => u("address", e.target.value)} /></div>
                <div><label className={labelClass}>জেলা</label><input className={inputClass} value={form.district} onChange={e => u("district", e.target.value)} /></div>
                <div><label className={labelClass}>উপজেলা</label><input className={inputClass} value={form.upazila} onChange={e => u("upazila", e.target.value)} /></div>
                <div><label className={labelClass}>ইউনিয়ন / ওয়ার্ড</label><input className={inputClass} value={form.union} onChange={e => u("union", e.target.value)} /></div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="sticky top-20">
            <div className="a4-preview rounded-lg overflow-hidden">
              <div ref={previewRef} className="p-8 bg-card" style={{ fontFamily: "'Hind Siliguri', sans-serif", fontSize: "12px" }}>
                <div className="text-center mb-6 border-b-2 border-foreground/20 pb-4">
                  <h2 className="text-lg font-bold">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
                  <h3 className="text-base font-bold mt-1">জন্ম নিবন্ধন আবেদন ফরম</h3>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-sm mb-2 border-b border-foreground/10 pb-1">শিশুর তথ্য</h4>
                  <p>নাম: <b>{form.childName || "........................."}</b></p>
                  <p>জন্ম তারিখ: <b>{form.birthDate || "........................."}</b></p>
                  <p>জন্মস্থান: <b>{form.birthPlace || "........................."}</b></p>
                  <p>লিঙ্গ: <b>{form.gender || "........................."}</b></p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-sm mb-2 border-b border-foreground/10 pb-1">পিতার তথ্য</h4>
                  <p>নাম: <b>{form.fatherName || "........................."}</b> | NID: <b>{form.fatherNid || "............"}</b></p>
                  <p>জাতীয়তা: <b>{form.fatherNationality || "............"}</b></p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-sm mb-2 border-b border-foreground/10 pb-1">মাতার তথ্য</h4>
                  <p>নাম: <b>{form.motherName || "........................."}</b> | NID: <b>{form.motherNid || "............"}</b></p>
                  <p>জাতীয়তা: <b>{form.motherNationality || "............"}</b></p>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold text-sm mb-2 border-b border-foreground/10 pb-1">ঠিকানা</h4>
                  <p>{form.address || "........................."}</p>
                  <p>জেলা: {form.district || "............"} | উপজেলা: {form.upazila || "............"} | ইউনিয়ন: {form.union || "............"}</p>
                </div>
                <div className="mt-16 flex justify-between pt-4">
                  <div className="text-center"><div className="border-t border-foreground/40 pt-2 px-8">আবেদনকারীর স্বাক্ষর</div></div>
                  <div className="text-center"><div className="border-t border-foreground/40 pt-2 px-8">কর্তৃপক্ষের স্বাক্ষর</div></div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <Button variant="success" onClick={exportPDF}><Download className="w-5 h-5" /> PDF ডাউনলোড করুন</Button>
              <Button variant="outline" onClick={() => window.print()}><Printer className="w-5 h-5" /> প্রিন্ট করুন</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BirthCertPage;
