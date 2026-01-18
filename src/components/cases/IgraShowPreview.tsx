import previewImage from "@/assets/case-igra-desktop.jpg";

const IgraShowPreview = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img 
        src={previewImage} 
        alt="Igra Show - концертное агентство Большая игра"
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
};

export default IgraShowPreview;