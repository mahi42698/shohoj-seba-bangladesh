import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import FamilyCardForm from "@/components/FamilyCardForm";
import FamilyCardPreview from "@/components/FamilyCardPreview";
import ExportButtons from "@/components/ExportButtons";

export interface FamilyMember {
  name: string;
  relation: string;
  age: string;
  nid: string;
}

export interface FamilyCardData {
  applicantName: string;
  fatherName: string;
  motherName: string;
  nidNumber: string;
  mobile: string;
  birthDate: string;
  address: string;
  district: string;
  upazila: string;
  union: string;
  totalMembers: string;
  headName: string;
  headNid: string;
  headMobile: string;
  members: FamilyMember[];
}

const initialData: FamilyCardData = {
  applicantName: "",
  fatherName: "",
  motherName: "",
  nidNumber: "",
  mobile: "",
  birthDate: "",
  address: "",
  district: "",
  upazila: "",
  union: "",
  totalMembers: "",
  headName: "",
  headNid: "",
  headMobile: "",
  members: [],
};

const FamilyCardPage = () => {
  const [formData, setFormData] = useState<FamilyCardData>(initialData);
  const previewRef = useRef<HTMLDivElement>(null);
  const [showPreviewMobile, setShowPreviewMobile] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">
          📋 পারিবারিক কার্ড আবেদন ফরম
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className={`${showPreviewMobile ? "hidden lg:block" : "block"}`}>
            <FamilyCardForm formData={formData} setFormData={setFormData} />
          </div>

          {/* Preview */}
          <div className={`${showPreviewMobile ? "block" : "hidden lg:block"}`}>
            <div className="sticky top-20">
              <FamilyCardPreview formData={formData} ref={previewRef} />
              <ExportButtons previewRef={previewRef} />
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden fixed bottom-20 left-4 right-20 z-40">
          <button
            onClick={() => setShowPreviewMobile(!showPreviewMobile)}
            className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg"
          >
            {showPreviewMobile ? "📝 ফরম দেখুন" : "👁️ প্রিভিউ দেখুন"}
          </button>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default FamilyCardPage;
