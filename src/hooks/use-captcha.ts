import {useCallback, useMemo, useState} from "react";

const YANDEX_CLIENT_KEY = import.meta.env.VITE_YANDEX_CAPTCHA_CLIENT_KEY
export function useCaptcha() {
    const [captchaToken, setCaptchaToken] = useState<string>("");
    const [resetKey, setResetKey] = useState(0);

    const handleCaptchaSuccess = useCallback((token: string) => {
        setCaptchaToken(token);
    }, []);

    const resetCaptcha = useCallback(() => {
        setCaptchaToken("");
        setResetKey(prev => prev + 1);
    }, []);

    const captchaParams = useMemo(() => ({
        key: resetKey,
        sitekey: YANDEX_CLIENT_KEY,
        onSuccess: handleCaptchaSuccess,
    }), [resetKey, handleCaptchaSuccess]);

    return { captchaToken, resetCaptcha, captchaParams };
}