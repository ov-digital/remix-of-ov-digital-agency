import previewImage from "@/assets/case-transagro-desktop.jpg";

const TransAgroPreview = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img 
        src={previewImage} 
        alt="TransAgro - поставщик минеральных удобрений"
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default TransAgroPreview;