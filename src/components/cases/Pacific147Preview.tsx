import previewImage from "@/assets/case-147pacific-hero.webp";

const Pacific147Preview = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img 
        src={previewImage} 
        alt="147Pacific - интернет-магазин автоаксессуаров"
        className="w-full h-full object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Pacific147Preview;
