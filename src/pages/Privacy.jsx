import { useState } from "react";
import { FaShieldAlt, FaUserLock, FaHistory } from 'react-icons/fa';

const Privacy = () => {
    const [showMore, setShowMore] = useState(false);
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-base-light to-white">
            {/* Hero Section */}
            <div className="bg-green-primary text-white py-16">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <FaShieldAlt className="mx-auto text-5xl mb-4 text-white" />
                    <h1 className="text-4xl font-bold mb-4">นโยบายความเป็นส่วนตัว</h1>
                    <p className="text-xl text-green-bg">เราให้ความสำคัญกับการปกป้องข้อมูลส่วนบุคคลของคุณ</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-green-soft/20">
                    <div className="flex items-start space-x-4 mb-6">
                        <FaUserLock className="text-3xl text-green-secondary mt-1" />
                        <div>
                            <p className="text-lg text-green-secondary leading-relaxed">
                                นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีการที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคลของคุณเมื่อเข้าใช้งานเว็บไซต์ของเรา
                            </p>
                        </div>
                    </div>

                    <div className="border-l-4 border-accent-orange pl-6 mb-6">
                        <p className="text-lg text-green-secondary leading-relaxed">
                            เรามุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณ หากเราขอข้อมูลที่สามารถระบุตัวตนของคุณในการใช้งานเว็บไซต์นี้ เราจะใช้ข้อมูลดังกล่าวตามนโยบายความเป็นส่วนตัวนี้เท่านั้น
                        </p>
                    </div>
                    
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="bg-green-secondary text-white px-6 py-3 rounded-lg hover:bg-accent-orange-dark transition-all duration-300 flex items-center space-x-2 hover:scale-[1.02]"
                    >
                        <FaHistory />
                        <span>{showMore ? "แสดงน้อยลง" : "อ่านเพิ่มเติม"}</span>
                    </button>

                    {showMore && (
                        <div className="mt-8 space-y-6">
                            <div className="border-t border-green-soft/30 pt-6">
                                <h2 className="text-2xl font-semibold mb-4 text-green-primary flex items-center">
                                    <span className="bg-green-bg p-2 rounded-lg mr-3">
                                        <FaHistory className="text-green-primary" />
                                    </span>
                                    การเปลี่ยนแปลงนโยบาย
                                </h2>
                                <p className="text-lg text-green-secondary leading-relaxed pl-14">
                                    เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราวโดยการอัปเดตหน้านี้ ขอแนะนำให้คุณตรวจสอบหน้านี้เป็นระยะเพื่อให้แน่ใจว่าคุณพอใจกับการเปลี่ยนแปลงที่อาจเกิดขึ้น
                                </p>
                            </div>
                            
                            <div className="border-t border-green-soft/30 pt-6">
                                <h2 className="text-2xl font-semibold mb-4 text-green-primary">วันที่มีผลบังคับใช้</h2>
                                <p className="text-lg text-green-secondary leading-relaxed pl-14">
                                    นโยบายนี้มีผลบังคับใช้ตั้งแต่วันที่ 1 มกราคม 2567
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Privacy;