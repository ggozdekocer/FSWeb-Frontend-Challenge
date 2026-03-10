import data from "../data/data";
import { useSelector } from "react-redux";

export default function Profile() {
  const { lang } = useSelector((state) => state);
  const profileData = data[lang].profileData;
  const profile = data[lang].profile;
  const about = data[lang].about;

  return (
    <section className="max-w-7xl mx-auto px-10 py-10">
      <h2 className="text-3xl font-bold mb-10 dark:text-[#AEBCCF]">{profileData.title}</h2>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="flex flex-col gap-y-2">
            <h3 className="text-indigo-600 dark:text-[#8F88FF] text-lg font-semibold mb-4">{profile.title}</h3>
            <div className="flex pb-1">
                <span className="w-1/3 font-semibold dark:text-white">{profileData.birthDate}</span>
                <span className="w-2/3 dark:text-white">{profile.birthDate}</span>
            </div>
            <div className="flex pb-1">
                <span className="w-1/3 font-semibold dark:text-white">{profileData.city}</span>
                <span className="w-2/3 dark:text-white">{profile.city}</span>
            </div>
            <div className="flex pb-1">
                <span className="w-1/3 font-semibold dark:text-white">{profileData.education}</span>
                <span className="w-2/3 dark:text-white">{profile.education}</span>
            </div>
            <div className="flex pb-1">
                <span className="w-1/3 font-semibold dark:text-white">{profileData.role}</span>
                <span className="w-2/3 dark:text-white">{profile.role}</span>
            </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-indigo-600 dark:text-[#8F88FF] text-lg font-semibold mb-4">{about.title}</h3>
          <p className="text-gray-600 dark:text-white">{about.description}</p>
          <p className="text-gray-600 dark:text-white mt-6">{about.description2}</p>
        </div>
      </div>
      <hr className="border-[#BAB2E7] dark:border-gray-700 mt-12"/>
    </section>
  );
}