import React, { useEffect, useState } from 'react';
import { getPrivacyPolicy } from '../api';
import AppPromo from '../components/AppPromo';
import './PrivacyPolicy.css';

const DEFAULT_POLICY = {
    title: "Maxfiylik Siyosati",
    content: `Ushbu maxfiylik siyosati kvadrat.uz saytidan foydalanish shartlarini belgilaydi.
    
1. Biz sizning shaxsiy ma'lumotlaringizni himoya qilishga va ularni uchinchi shaxslarga bermaslikka majburiyat olamiz.
2. Saytda to'plangan ma'lumotlar faqat xizmat sifatini oshirish va siz bilan bog'lanish uchun ishlatiladi.
3. Biz cookie fayllaridan foydalanishimiz mumkin, bu saytning ishlashini yaxshilashga yordam beradi.
4. Agar sizda savollar bo'lsa, "Bog'lanish" sahifasi orqali bizga murojaat qilishingiz mumkin.`,
    updated_at: new Date().toISOString()
};

const PrivacyPolicy = () => {
    const [policy, setPolicy] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchPolicy = async () => {
            try {
                const response = await getPrivacyPolicy();
                if (response.data && response.data.length > 0) {
                    setPolicy(response.data[0]);
                } else {
                    setPolicy(DEFAULT_POLICY);
                }
            } catch (error) {
                console.error("Error fetching privacy policy:", error);
                setPolicy(DEFAULT_POLICY);
            }
        };
        fetchPolicy();
    }, []);

    return (
        <div className="privacy-page">
            <div className="privacy-container">

                <header className="privacy-header">
                    <h1 className="privacy-title">Maxfiylik Siyosati</h1>
                    <p className="privacy-subtitle">
                        Biz sizning shaxsiy ma'lumotlaringizni shaffof va kuchli maxfiylik<br />
                        amaliyoti bilan himoya qilishga sodiqmiz
                    </p>
                </header>

                <div className="privacy-content">

                    {policy ? (
                        <div className="privacy-section">
                            <h2>{policy.title}</h2>
                            <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{policy.content}</div>
                            <p className="last-updated">Oxirgi yangilanish: {new Date(policy.updated_at).toLocaleDateString()}</p>
                        </div>
                    ) : (
                        <p>Yuklanmoqda...</p>
                    )}

                </div>
            </div>
            <AppPromo />
        </div>
    );
};

export default PrivacyPolicy;
