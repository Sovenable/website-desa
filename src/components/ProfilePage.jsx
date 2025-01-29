import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Building, Users, Target, Award } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[300px] bg-blue-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`,
            opacity: '0.3'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Profil Desa Tanjung Jaya
            </h1>
            <p className="text-xl text-blue-100">
              Menuju Desa yang Maju, Mandiri, dan Sejahtera
            </p>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto py-8 px-4 -mt-10">
        <div className="grid gap-8">
          {/* Sejarah Desa */}
          <section className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Sejarah Desa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
              Desa Tanjung Jaya merupakan desa yang terletak di Kecamatan Limau, Kabupaten Tanggamus. 
              Desa ini memiliki sejarah panjang yang bermula dari semangat masyarakat untuk membangun wilayah mandiri. 
              Usulan pemekaran desa pertama kali diajukan pada bulan Januari 2007 oleh masyarakat Pekon Badan. 
              Setelah melalui proses panjang, pemekaran desa ini akhirnya diresmikan pada tanggal 20 November 2011, dengan ditunjuknya Bapak Sadiwan sebagai Penjabat Kepala Pekon pertama.
              </p>
              <p className="text-gray-600 leading-relaxed">
              Masa jabatan Bapak Sadiwan berlangsung hingga tahun 2012, ketika desa mulai mempersiapkan sistem pemerintahan yang lebih matang.
              Pemilihan Kepala Pekon definitif pertama dilaksanakan pada tahun 2013, dan Bapak Fadhulloh terpilih untuk memimpin desa dari tahun 2013 hingga 2018. 
              Di bawah kepemimpinannya, Desa Tanjung Jaya mulai membangun fondasi penting dalam pemerintahan dan kesejahteraan masyarakat.
              </p>
              <p className="text-gray-600 leading-relaxed">
              Setelah masa jabatan Bapak Fadhulloh berakhir, Bapak Fathul Bahri, S.T. ditunjuk sebagai Penjabat Kepala Pekon pada tahun 2018.
              Masa transisi ini berlangsung hingga tahun 2021, di mana desa tetap melanjutkan program-program pembangunan.
              Pada tahun 2021, pemilihan Kepala Pekon kembali diadakan, dan Bapak Sadiwan terpilih kembali untuk memimpin desa. Hingga saat ini, di tahun 2029, beliau masih menjabat sebagai Kepala Pekon Tanjung Jaya.
              </p>
            </div>
          </section>

          {/* Visi & Misi */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Visi</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Melayani Masyarakat Pekon Tanjung Jaya Secara Menyeluruh Demi Terwujudnya 
                  Pekon Tanjung Jaya Yang Maju, Mandiri, Sehat Dan Sejahtera Secara Merata
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-800">Misi</h2>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <p>Masyarakat yang mampu menguasai ilmu pengetahuan dan teknologi, agar setara dengan pekon yang lainnya</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <p>Masyarakat yang mampu mewujudkan kehidupan yang mengandalkan pada kekuatan dan kemampuan sendiri</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <p>Masyarakat yang mampu mewujudkan kondisi lingkungan yang bersih sehingga tercapainya kesehatan</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <p>Masyarakat yang tercukupi kebutuhan pokok (sandang, pangan dan papan)</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">5.</span>
                  <p>Masyarakat yang merasa cukup serta berkeadilan</p>
                </li>
              </ul>
            </div>
          </section>

          {/* Struktur Pemerintahan */}
          <section className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
  <div className="flex items-center gap-4 mb-8">
    <Building className="w-8 h-8 text-blue-600" />
    <h2 className="text-3xl font-bold text-gray-800">
      Struktur Pemerintahan
    </h2>
  </div>
  
  <div className="flex justify-center">
    <div className="max-w-4xl w-full">
      <img 
        src="/image/stuktur.jpg" // Ganti dengan path foto struktur pemerintahan Anda
        alt="Struktur Pemerintahan Desa Tanjung Jaya"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

          {/* Profil Kepala Desa */}
          <section className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                Profil Kepala Desa
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/image/Ayu.JPG" 
                    alt="Foto Kepala Desa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Sadiwan</h3>
                  <p className="text-gray-600 italic">Kepala Desa Periode 2021-2029</p>
                </div>

                <div className="prose max-w-none text-gray-600">
                  <p>
                    Assalamualaikum Wr. Wb. dan salam sejahtera untuk kita semua.
                    Sebagai Kepala Desa Tanjung Jaya, saya berkomitmen untuk memajukan desa kita
                    bersama seluruh perangkat desa dan masyarakat. Mari bersama-sama kita
                    wujudkan visi dan misi desa untuk kesejahteraan bersama.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Pendidikan</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• SD Negeri 1 Pekon Ampai (1978-1984)</li>
                      <li>• SMP 28 Oktober (1984-1987)</li>
                      <li>• SMK YPT Pringsewu (1987-2090)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Pengalaman</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Kepala Bagian Perusahaan Pabrik Kemasan (1993-1997)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { 
            transform: translateY(20px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;