import previewImage from "@/assets/case-fishing-preview.webp";

const FishingWeekendPreview = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img 
        src={previewImage} 
        alt="Fishing Weekend - интернет-магазин рыболовных товаров"
        className="w-full h-full object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default FishingWeekendPreview;
