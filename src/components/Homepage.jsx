import React, { useState, useEffect } from 'react';
import { MapPin, Users, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import VillageMap from './VillageMap';
import LoadingSpinner from './LoadingSpinner';
const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading
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

  const statistikDesa = [
    {
      angka: "1,249",
      label: "Jumlah Penduduk",
      icon: Users,
      color: "bg-blue-500"
    },
    {
      angka: "332",
      label: "Kepala Keluarga",
      icon: Building,
      color: "bg-green-500"
    },
    {
      angka: "600",
      label: "Luas Wilayah (Ha)",
      icon: MapPin,
      color: "bg-yellow-500"
    },
    {
      angka: "3",
      label: "Dusun",
      icon: Building,
      color: "bg-purple-500"
    }
  ];

  const kegiatanTerbaru = [
    {
      id: 1,
      title: "Sosialisasi Stunting",
      date: "2025-01-07",
      image: "/image/stunting/s1.jpg",
      category: "Kesehatan",
      description: "Program pencegahan dan penanganan stunting untuk meningkatkan kesadaran masyarakat"
    },
    {
      id: 2,
      title: "Sosialisasi Pembuatan Abon Ikan",
      date: "2025-01-17",
      image: "/image/abon/a1.jpg",
      category: "Ekonomi",
      description: "Pelatihan pembuatan abon ikan untuk pemberdayaan ekonomi masyarakat"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section dengan Background Image */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/image/aa.jpg')`
          }}
        />
        {/* Overlay gelap untuk memastikan teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Selamat Datang di Desa Tanjung Jaya
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Kecamatan Limau, Kabupaten Tanggamus - 
                Menuju Desa yang Maju, Mandiri, dan Sejahtera
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/profil" 
                  className="px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  Tentang Desa
                </Link>
                <Link 
                  to="/aktivitas-desa" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Aktivitas Terbaru
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Statistik Desa Section */}
      <div className="bg-white py-16 -mt-20 relative z-10 rounded-t-3xl shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Statistik Desa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistikDesa.map((item, index) => (
              <div 
                key={index} 
                className={`${item.color} rounded-xl p-6 text-white transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <item.icon className="w-10 h-10" />
                  <span className="text-3xl font-bold">{item.angka}</span>
                </div>
                <p className="text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Peta dan Kegiatan Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Peta Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Lokasi Desa
                </h2>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4 h-[400px]">
                <VillageMap />
              </div>
            </div>

            {/* Kegiatan Terbaru Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  Kegiatan Terbaru
                </h2>
                <Link 
                  to="/aktivitas-desa"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  Lihat Semua
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              <div className="space-y-6">
                {kegiatanTerbaru.map((kegiatan) => (
                  <Link 
                    key={kegiatan.id}
                    to={`/berita/${kegiatan.id}`}
                    className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="sm:flex">
                      <div className="sm:w-48 h-48 sm:h-auto">
                        <img 
                          src={kegiatan.image}
                          alt={kegiatan.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex-1">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-2">
                          {kegiatan.category}
                        </span>
                        <h3 className="font-bold text-xl mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                          {kegiatan.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {kegiatan.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(kegiatan.date).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Unggulan Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Program Unggulan Desa
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pemberdayaan Ekonomi Masyarakat
            </h3>
            <p className="text-gray-600 mb-6">
              Program ini fokus pada pengembangan UMKM lokal dan peningkatan 
              keterampilan masyarakat melalui berbagai pelatihan dan 
              pendampingan usaha. Program ini bertujuan untuk meningkatkan kesejahteraan 
              masyarakat dan menciptakan kemandirian ekonomi desa.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Desa Tanjung Jaya</h4>
              <p>Alamat: Jl. Pramuka, Badak, Kec.Limau, Kabupaten Tanggamus</p>
              <p>Telp: 081379764127   </p>
              <p>Email: tanjungjayajaya01@gmail.com</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-blue-800">
            <p>© 2025 Desa Tanjung Jaya | KKN PPM Tanjung Jaya.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;