import bitrixLogo from "@/assets/bitrix-logo.svg";
import bitrixCertificate from "@/assets/bitrix-certificate.png";
import { ContactFormPopup } from "@/components/ContactFormPopup";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const BitrixPartnerSection = () => {
  const [showCert, setShowCert] = useState(false);

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={bitrixLogo} alt="Логотип 1С-Битрикс" className="h-10 w-10" loading="lazy" />
              <span className="text-sm font-medium bg-red-500/10 text-red-600 rounded-full px-3 py-1">
                Официальный партнёр
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Бизнес-партнёр 1С-Битрикс
            </h2>

            <p className="text-muted-foreground mb-6">
              OV Digital Agency — официальный партнёр компании 1С-Битрикс. 
              Продаём лицензии, разрабатываем и поддерживаем сайты на платформе «1С-Битрикс: Управление сайтом».
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Продажа лицензий 1С-Битрикс",
                "Разработка сайтов на 1С-Битрикс",
                "Техническая поддержка и обслуживание",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ContactFormPopup>
              <Button variant="default" className="rounded-full">
                Узнать подробнее
              </Button>
            </ContactFormPopup>
          </div>

          {/* Right: Certificate */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowCert(true)}
              className="rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-zoom-in max-w-md w-full"
            >
              <img
                src={bitrixCertificate}
                alt="Сертификат бизнес-партнёра 1С-Битрикс — OV Digital Agency"
                className="w-full h-auto"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen overlay */}
      {showCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setShowCert(false)}
        >
          <img
            src={bitrixCertificate}
            alt="Сертификат бизнес-партнёра 1С-Битрикс — OV Digital Agency"
            className="max-w-3xl w-full h-auto rounded-lg"
          />
        </div>
      )}
    </section>
  );
};
