import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Users, 
  School, 
  Building, 
  Heart, 
  ChartBar, 
  GraduationCap,
  Sprout,
  Fish,
  Store
} from 'lucide-react';
import Navbar from './Navbar';
import VillageMap from './VillageMap';
import LoadingSpinner from './LoadingSpinner';

const InformasiPage = () => {
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
      
      {/* Hero Section - Menghilangkan mt-16 dan mengubah tinggi */}
      <div className="relative h-[200px] bg-blue-900 animate-fade-in">
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/api/placeholder/1920/400')`
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Informasi Desa
          </h1>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto py-8 px-4 -mt-10">
        <div className="grid gap-8">
          {/* Lokasi dan Geografis - Diubah menjadi layout responsif */}
          <section className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 order-1 lg:order-1">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Lokasi dan Geografis
                </h2>
              </div>

              <div className="space-y-6">
                {/* Informasi Wilayah */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Informasi Wilayah
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Luas Wilayah</span>
                      <span className="font-semibold text-blue-600">600 Hektar</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Ketinggian</span>
                      <span className="font-semibold text-blue-600">1.100 mdpl</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Koordinat</span>
                      <span className="font-semibold text-blue-600">7°15'S 112°45'E</span>
                    </li>
                  </ul>
                </div>

                {/* Batas Wilayah */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Batas Wilayah
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Utara</span>
                      <span className="font-semibold text-blue-600">Hutan Lindung</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Selatan</span>
                      <span className="font-semibold text-blue-600">Pekon Doh</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Barat</span>
                      <span className="font-semibold text-blue-600">Pantai Teluk Semangka</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-600">Timur</span>
                      <span className="font-semibold text-blue-600">Pekon Badak</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Peta - Diubah untuk responsif */}
            <div className="bg-white rounded-xl shadow-sm p-6 order-2 lg:order-2 h-[400px]">
              <VillageMap />
            </div>
          </section>

          {/* Data Demografi */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Data Demografi
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Jumlah Penduduk */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-center mb-6">
                  <ChartBar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Jumlah Penduduk
                  </h3>
                </div>
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-blue-600">1,249</p>
                  <p className="text-sm text-gray-600">Total Penduduk</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-500">663</p>
                    <p className="text-sm text-gray-600">Laki-laki</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-500">586</p>
                    <p className="text-sm text-gray-600">Perempuan</p>
                  </div>
                </div>
              </div>

              {/* Kelompok Umur */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
                  Kelompok Umur
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">0-14 tahun</span>
                      <span className="font-semibold text-blue-600">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">15-64 tahun</span>
                      <span className="font-semibold text-blue-600">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: '68%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">65+ tahun</span>
                      <span className="font-semibold text-blue-600">7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: '7%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pendidikan */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Tingkat Pendidikan
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">SD/Sederajat</span>
                      <span className="font-semibold text-blue-600">43.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: '43.2%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">SMP/Sederajat</span>
                      <span className="font-semibold text-blue-600">10.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: '10.8%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">SMA/Sederajat</span>
                      <span className="font-semibold text-blue-600">12.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: '12.5%' }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Universitas</span>
                      <span className="font-semibold text-blue-600">1.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: '1.1%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fasilitas Umum */}
          <section className="grid md:grid-cols-3 gap-6">
            {/* Fasilitas Pendidikan */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <School className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Fasilitas Pendidikan
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">PAUD/TK</span>
                  <span className="font-semibold text-blue-600">1 Unit</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">SD/MI</span>
                  <span className="font-semibold text-blue-600">1 Unit</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">TPA</span>
                  <span className="font-semibold text-blue-600">1 Unit</span>
                </li>
              </ul>
            </div>

            {/* Fasilitas Kesehatan */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Fasilitas Kesehatan
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Kantor Praktek Bidan</span>
                  <span className="font-semibold text-blue-600">1 Unit</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Posyandu</span>
                  <span className="font-semibold text-blue-600">1 Unit</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Apotek</span>
                  <span className="font-semibold text-blue-600">0 Unit</span>
                </li>
              </ul>
            </div>

            {/* Tempat Ibadah */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Tempat Ibadah
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Masjid</span>
                  <span className="font-semibold text-blue-600">1 Unit</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Musholla</span>
                  <span className="font-semibold text-blue-600">2 Unit</span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Gereja</span>
                  <span className="font-semibold text-blue-600">0 Unit</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Informasi Tambahan yang Diperbarui */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">
                Informasi Tambahan
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Sektor Perkebunan */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Sprout className="w-8 h-8 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sektor Perkebunan
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Pisang</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Jagung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span>Kakao</span>
                  </li>
                </ul>
              </div>

              {/* Sektor Perikanan */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Fish className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sektor Perikanan
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Ikan Asin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Budidaya Ikan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Pengolahan Hasil Laut</span>
                  </li>
                </ul>
              </div>

              {/* Sektor UMKM */}
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Store className="w-8 h-8 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Sektor UMKM
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>Suwito: Produksi Ikan Asin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>Budi Arista: Produksi Ikan Asin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span>Sofyan: Produksi Tempe</span>
                  </li>
                </ul>
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

        @keyframes progress-bar {
          from { width: 0; }
          to { width: var(--progress-width); }
        }

        .animate-progress {
          animation: progress-bar 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default InformasiPage;