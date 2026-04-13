export type Lang = 'en' | 'tr';

export interface Translations {
  nav: {
    about: string;
    missions: string;
    live: string;
    contact: string;
  };
  hero: {
    meta: string;
    online: string;
    role: string;
    description: string;
    chips: {
      base: string;
      role: string;
      status: string;
      stack: string;
      roleValue: string;
      statusValue: string;
    };
    scroll: string;
  };
  about: {
    label: string;
    headingA: string;
    headingB: string;
    headingC: string;
    p1: string;
    p2: string;
    location: string;
    imageCaption: string;
    expertise: Array<{ title: string; description: string }>;
  };
  projects: {
    label: string;
    heading: string;
    description: string;
    ui: {
      expand: string;
      collapse: string;
      capabilities: string;
      focus: string;
      viewProduct: string;
      reachForDetails: string;
    };
    items: Array<{
      subtitle: string;
      overview: string;
      capabilities: string[];
      focus: string[];
    }>;
  };
  ongoing: {
    label: string;
    liveTag: string;
    heading1: string;
    heading2: string;
    subtitle: string;
    overview: string;
    milestone: { label: string; text: string };
    freq: string;
    snr: string;
    phase: string;
    imageCaption: string;
    highlights: Array<{ title: string; description: string }>;
    inbot: {
      title: string;
      subtitle: string;
      status: string;
      description: string;
    };
  };
  contact: {
    label: string;
    heading: string;
    description: string;
    sendButton: string;
    quickInfo: Array<{ label: string; value: string }>;
    location: string;
  };
  footer: {
    signal: string;
  };
}

const en: Translations = {
  nav: {
    about: 'About',
    missions: 'Missions',
    live: 'Live',
    contact: 'Contact',
  },
  hero: {
    meta: 'Mission Dossier · 2026',
    online: 'online',
    role: 'Electronics Engineer',
    description:
      'I specialize in developing robust embedded solutions across diverse microcontroller architectures, from 8-bit AVR to high-performance 32-bit systems. My expertise bridges the gap between complex control theory and practical hardware implementation, with a focus on precision analog signal conditioning and power electronics.',
    chips: {
      base: 'Base',
      role: 'Role',
      status: 'Status',
      stack: 'Stack',
      roleValue: 'Full-Stack Embedded',
      statusValue: '● Available',
    },
    scroll: 'Scroll to Dossier',
  },
  about: {
    label: '§ 01 / Dossier',
    headingA: 'Bridging ',
    headingB: 'theory',
    headingC: 'and hardware.',
    p1: 'I design embedded systems where control theory meets the messy reality of sensor noise, EMI, and thermal drift. Satellite attitude hardware, reaction wheels, precision instrument front-ends.',
    p2: 'Full lifecycle ownership: circuit simulation, multi-layer PCB layout, firmware, telemetry, and the web dashboards that make it all observable from a browser.',
    location: '→ Based in Ankara · Working globally',
    imageCaption: '› Signal verification · Analog front-end debug',
    expertise: [
      {
        title: 'Multi-Architecture Firmware',
        description:
          'Deep firmware work across 8-bit AVR through 32-bit ARM Cortex-M. Bare-metal, RTOS, bootloaders, OTA.',
      },
      {
        title: 'High-Precision Control',
        description:
          'PID, fuzzy-logic, and state-space controllers validated on physical testbeds with real sensor noise.',
      },
      {
        title: 'Analog Front-End Design',
        description:
          'High-gain signal chains, Sallen-Key filters, multi-stage noise reduction for VLF and precision sensing.',
      },
      {
        title: 'Full-Stack Integration',
        description:
          'Telemetry dashboards, web-based control UIs, wireless firmware deployment, 3D orientation viewers.',
      },
    ],
  },
  projects: {
    label: '§ 02 / Selected Missions',
    heading: 'Missions flown.',
    description:
      'A selection of completed embedded systems — hardware, firmware, and telemetry, from schematic to field deployment.',
    ui: {
      expand: 'Expand datasheet',
      collapse: 'Collapse datasheet',
      capabilities: 'Capabilities',
      focus: 'Engineering Focus',
      viewProduct: 'View Product',
      reachForDetails: 'Reach for details',
    },
    items: [
      {
        subtitle: '3-Axis Satellite Control & Stabilization Testbed',
        overview:
          'The SACSTOR platform is a high-performance experimental unit for validating complex control theories and real-time telemetry systems. It integrates custom multi-layer PCB design with a seamless, web-based control infrastructure.',
        capabilities: [
          'Quad-BLDC Control: Synchronized PWM management of 4 motors via ESCON drivers.',
          'Inertial Sensing: High-fidelity 9-axis orientation tracking via BNO055 IMU.',
          'Integrated Web Interface: Zero-software setup; accessible via any browser over WiFi. Built with a custom C/C++ backend and a responsive HTML/JS/CSS frontend.',
          'Real-Time Visualization: Real-time STL viewer for 3D orientation tracking alongside dynamic telemetry graphs for motor RPM and sensor data.',
          'Wireless Firmware Management: Direct OTA flashing of .HEX files to the ATmega2560 control processor, including post-upload flash verification.',
          'Remote Debugging & Control: Bidirectional UART terminal over WiFi and a dedicated Service Screen for ESP32 maintenance (OTA updates and filesystem management).',
        ],
        focus: [
          'System Architecture: Dual-processor communication bridge (ESP32 → ATmega2560) for isolated control and telemetry tasks.',
          'User Experience: Plug-and-play research environment — no external software installation required for full system monitoring.',
          'Hardware: Optimized PCB layout for power integrity and EMI reduction in high-speed switching environments.',
        ],
      },
      {
        subtitle: 'Single-Axis ADCS Test Setup',
        overview:
          'A high-precision experimental setup designed to validate 1-axis stabilization algorithms, mimicking satellite attitude control via a reaction wheel. Specialized testbed for real-time PID tuning and orientation stability analysis.',
        capabilities: [
          'Integrated Control Architecture: Custom PCB with ATmega2560 for core control logic and ATmega16U2 for robust USB-to-TTL communication.',
          'Zero-Footprint Web Dashboard: Hosted entirely on ESP32 — browser-based interface for telemetry and control, no external software required.',
          'Real-Time Data Visualization: STL-based 3D viewer mirroring physical orientation with dynamic graphing for sensor fusion and motor performance.',
          'Wireless Development Workflow: OTA firmware flashing for ATmega2560 and bidirectional WiFi-UART terminal for remote debugging.',
          'Advanced Control Algorithms: Benchmarks PID and Fuzzy Logic controllers under varying torque and inertia conditions.',
        ],
        focus: [
          'Hardware Design: Multi-layer PCB integrating BNO055 IMU for 9-axis sensing and hall-effect sensors for precise motor feedback.',
          'Firmware Synergy: ESP32 handles high-bandwidth wireless telemetry (C++/JS/HTML) while ATmega2560 maintains the deterministic control loop.',
          'System Ownership: Full lifecycle responsibility — PCB layout, firmware development, and complete electrical system integration.',
        ],
      },
      {
        subtitle: 'Multi-Protocol Wireless Research Platform',
        overview:
          'A versatile handheld wireless research tool — a high-performance adaptation of the T-Embed architecture, re-engineered to support a wider range of wireless protocols. An all-in-one platform for frequency analysis, signal emulation, and hardware security research.',
        capabilities: [
          'Multi-Protocol Expansion: CC1101 (Sub-GHz), PN532 (NFC/RFID), and nRF24L01+ (2.4GHz) integrated onto a single custom PCB.',
          'Custom PCB Re-Engineering: Multi-layer layout for ESP32-S3 core with high-density component placement and signal integrity focus.',
          'Wireless Versatility: Seamless protocol testing across Sub-1GHz, 2.4GHz, and 13.56MHz NFC bands within a single device.',
          'Integrated Power Management: Dedicated power regulation and BMS for stable operation under peak RF transmission loads.',
          'Firmware & UI Synergy: Low-level drivers for multiplexing and simultaneous operation of diverse wireless interfaces.',
        ],
        focus: [
          'RF Signal Integrity: Optimized PCB layout to minimize EMI between closely packed wireless modules.',
          'System Optimization: Dual-core ESP32-S3 leveraged for real-time signal processing and a responsive UI simultaneously.',
          'Prototyping Excellence: Transformed a standard dev kit into a specialized, professional-grade research instrument.',
        ],
      },
    ],
  },
  ongoing: {
    label: '§ 03 / In Development',
    liveTag: 'Live Telemetry',
    heading1: 'VLF Metal',
    heading2: 'Detection System',
    subtitle: 'Advanced Analog Signal Conditioning · Target Discrimination',
    overview:
      'An ongoing R&D project focused on creating a high-performance Very Low Frequency (VLF) metal detector. The primary goal is to achieve extreme detection depth and precise target identification in highly mineralized soil conditions through advanced analog and digital processing techniques.',
    milestone: {
      label: 'Current Milestone',
      text: 'Optimizing the BMS for extended field use and fine-tuning the ADC sampling rate for improved resolution on weak return signals. Objective: transitioning from research prototype to a production-ready system with a high-resolution display and intuitive controls.',
    },
    freq: 'f = 18.75 kHz',
    snr: 'SNR ↑',
    phase: 'Δϕ live',
    imageCaption: '› STM32 · Custom Power Electronics · LVGL GUI',
    inbot: {
      title: 'Inbot',
      subtitle: 'AI-Powered Mobile Assistant',
      status: 'In Development',
      description:
        'An intelligent mobile assistant bringing natural language interaction to embedded systems monitoring and control. Designed to bridge complex hardware systems and intuitive user experience.',
    },
    highlights: [
      {
        title: 'Power Electronics',
        description:
          'Custom H-Bridge transmitter driver for high-current coil excitation with minimal losses and maximum EM field penetration.',
      },
      {
        title: 'Analog Front-End',
        description:
          'High-gain signal conditioning chain with Sallen-Key active filters for multi-stage noise reduction and precise extraction of weak return pulses.',
      },
      {
        title: 'Digital Signal Processing',
        description:
          'Real-time phase analysis on STM32 for ferrous / non-ferrous target discrimination while maintaining real-time responsiveness.',
      },
      {
        title: 'Ground Balance',
        description:
          'Adaptive ground balancing algorithms that filter soil mineralization effects for stable performance in challenging geological environments.',
      },
    ],
  },
  contact: {
    label: '§ 04 / Establish Comms',
    heading: "Let's build something flight-worthy.",
    description:
      'Currently at capacity with high-priority R&D missions. Open to selective networking for long-term strategic opportunities. Reach out to discuss how we can bridge the gap in the future.',
    sendButton: 'Send Transmission',
    quickInfo: [
      { label: 'Specialization', value: 'Embedded Systems & Hardware Engineering' },
      { label: 'Focus', value: 'Precision Control Systems · Analog Signal Conditioning' },
      { label: 'Status', value: 'Engaged in R&D Missions · Reach out for future availability' },
    ],
    location: '· Ankara, Turkey · UTC+3',
  },
  footer: {
    signal: 'signal nominal',
  },
};

const tr: Translations = {
  nav: {
    about: 'Hakkımda',
    missions: 'Projeler',
    live: 'Aktif',
    contact: 'İletişim',
  },
  hero: {
    meta: 'Görev Dosyası · 2026',
    online: 'çevrimiçi',
    role: 'Elektronik Mühendisi',
    description:
      'Mühendislik yaklaşımımın merkezinde, teorik modelleri fiziksel dünyanın gürültü, termal kayma ve EMI gibi zorlu gerçeklikleriyle buluşturmak yer alıyor. 8-bit AVR mimarilerinden yüksek performanslı 32-bit sistemlere uzanan geniş bir yelpazede, sadece firmware geliştirmekle kalmıyor; bu sistemlerin temelini oluşturan hassas şematik ve çok katmanlı (4-6 katman) PCB tasarımlarını da bizzat gerçekleştiriyorum. KiCad ortamında sinyal bütünlüğünü, diferansiyel çift yönlendirmesini ve termal yönetimi optimize ederek, hassas analog ön uç (front-end) tasarımları ile güç elektroniği katmanlarını içeren uçtan uca çözümler inşa ediyorum. Karmaşık kontrol algoritmalarını (PID, Fuzzy Logic) kağıt üzerindeki birer denklem olmaktan çıkarıp, tasarımı tamamen bana ait olan optimize edilmiş donanımlar üzerinde yaşayan kararlı sistemlere dönüştürme konusunda uzmanlaşıyorum.',
    chips: {
      base: 'Konum',
      role: 'Rol',
      status: 'Durum',
      stack: 'Stack',
      roleValue: 'Tam Yığın Gömülü',
      statusValue: '● İletişime Açık',
    },
    scroll: 'Dosyaya Geç',
  },
  about: {
    label: '§ 01 / Dosya',
    headingA: 'Teoriden ',
    headingB: 'Ürüne',
    headingC: '',
    p1: 'Bir sinyalin fiziksel dünyadan alınıp anlamlı bir veriye veya harekete dönüştüğü o kritik eşikte çalışıyorum. ATmega\'dan STM32 mimarisine uzanan geniş bir yelpazede firmware geliştirirken; uzmanlığımı sadece yazılımla kısıtlamıyor, analog devre tasarımı ve PCB mimarisiyle teorik kontrol algoritmaları arasında sağlam köprüler kuruyorum.',
    p2: 'Kontrol teorisinin; sensör gürültüsü, EMI ve termal kayma gibi zorlu saha gerçeklikleriyle çarpıştığı noktada gömülü sistemler tasarlıyorum. Uydu tutum donanımları, reaksiyon tekerlekleri ve hassas ölçüm ön uçları (analog front-end) geliştirirken, projeyi sadece bir devre değil, yaşayan bir sistem olarak ele alıyorum. Devre simülasyonundan çok katmanlı PCB tasarımına, firmware mimarisinden telemetri verilerini tarayıcıya taşıyan web arayüzlerine kadar sürecin her adımında \'tam sahiplik\' (end-to-end ownership) ilkesiyle çalışıyorum.',
    location: '→ Ankara merkezli · Küresel çalışma',
    imageCaption: '› Sinyal doğrulama · Analog ön uç geliştirme',
    expertise: [
      {
        title: 'Çok Mimarili Firmware',
        description:
          '8-bit AVR\'den 32-bit ARM Cortex-M\'e kadar derin firmware çalışması. Bare-metal, RTOS, bootloader, OTA.',
      },
      {
        title: 'Yüksek Hassasiyetli Kontrol',
        description:
          'Gerçek sensör gürültüsüyle fiziksel test düzeneklerinde doğrulanan PID, bulanık mantık ve durum uzayı denetleyicileri.',
      },
      {
        title: 'Analog Ön Uç Tasarımı',
        description:
          'VLF ve hassas algılama için yüksek kazançlı sinyal zincirleri, Sallen-Key filtreleri, çok aşamalı gürültü azaltma.',
      },
      {
        title: 'Tam Yığın Entegrasyon',
        description:
          'Telemetri arayüzleri, web tabanlı kontrol panelleri, kablosuz firmware güncelleme, 3D yönelim görüntüleyiciler.',
      },
    ],
  },
  projects: {
    label: '§ 02 / Seçili Projeler',
    heading: 'Tamamlanan projeler.',
    description:
      'Şematikten sahaya — donanım, firmware ve telemetriyi kapsayan tamamlanmış gömülü sistem projelerinden bir seçki.',
    ui: {
      expand: 'Detayları göster',
      collapse: 'Kapat',
      capabilities: 'Özellikler',
      focus: 'Mühendislik Odağı',
      viewProduct: 'Ürünü İncele',
      reachForDetails: 'Bilgi alın',
    },
    items: [
      {
        subtitle: '3 Eksenli Uydu Kontrol ve Dengeleme Test Düzeneği',
        overview:
          'SACSTOR platformu, karmaşık kontrol teorilerini ve gerçek zamanlı telemetri sistemlerini doğrulamak için geliştirilmiş yüksek performanslı bir deney ünitesidir. Özel çok katmanlı PCB tasarımını sorunsuz, tarayıcı tabanlı bir kontrol altyapısıyla bütünleştirir.',
        capabilities: [
          'Dörtlü-BLDC Kontrolü: ESCON sürücüleri aracılığıyla 4 motorun senkronize PWM yönetimi.',
          'Atalet Algılama: BNO055 IMU ile yüksek doğruluklu 9 eksenli yönelim takibi.',
          'Entegre Web Arayüzü: Sıfır yazılım kurulumu; WiFi üzerinden herhangi bir tarayıcıdan erişilebilir. Özel C/C++ backend ve HTML/JS/CSS frontend ile geliştirilmiştir.',
          'Gerçek Zamanlı Görselleştirme: Motor RPM ve sensör verileri için dinamik telemetri grafikleriyle birlikte 3D yönelim takibi için gerçek zamanlı STL görüntüleyici.',
          'Kablosuz Firmware Yönetimi: ATmega2560 kontrol işlemcisine .HEX dosyalarının doğrudan OTA aktarımı, yükleme sonrası flash doğrulama dahil.',
          'Uzaktan Hata Ayıklama ve Kontrol: Düşük seviyeli etkileşim için WiFi üzerinden çift yönlü UART terminali ve ESP32 bakımı için servis ekranı.',
        ],
        focus: [
          'Sistem Mimarisi: İzole kontrol ve telemetri görevleri için çift işlemcili iletişim köprüsü (ESP32 → ATmega2560).',
          'Kullanıcı Deneyimi: Tam sistem izleme için harici yazılım kurulumu gerektirmeyen tak-çalıştır araştırma ortamı.',
          'Donanım: Yüksek hızlı anahtarlama ortamlarında güç bütünlüğü ve EMI azaltma için optimize edilmiş PCB düzeni.',
        ],
      },
      {
        subtitle: 'Özgün Kontrol Kartı',
        overview:
          'Reaksiyon tekeri aracılığıyla uydu tutum kontrolünü taklit eden 1 eksenli dengeleme algoritmalarını doğrulamaya yönelik yüksek hassasiyetli deney düzeneği. Gerçek zamanlı PID ayarı ve yönelim kararlılığı analizi için özel test ortamı.',
        capabilities: [
          'Entegre Kontrol Mimarisi: Çekirdek kontrol mantığı için ATmega2560 ve güvenilir USB-TTL haberleşmesi için ATmega16U2 içeren özel PCB.',
          'Sıfır Ayak İzi Web Panosu: Tamamen ESP32 üzerinde barındırılan, harici yazılım gerektirmeyen tarayıcı tabanlı telemetri ve kontrol arayüzü.',
          'Gerçek Zamanlı Veri Görselleştirme: Sensör füzyonu ve motor performansı için dinamik grafiklerin yanında fiziksel yönelimi yansıtan STL tabanlı 3D görüntüleyici.',
          'Kablosuz Geliştirme İş Akışı: ATmega2560 için OTA firmware aktarımı ve uzaktan hata ayıklama için çift yönlü WiFi-UART terminali.',
          'Gelişmiş Kontrol Algoritmaları: Değişen tork ve atalet koşullarında PID ile Bulanık Mantık denetleyicilerini kıyaslar.',
        ],
        focus: [
          'Donanım Tasarımı: 9 eksenli algılama için BNO055 IMU ve hassas motor geri bildirimi için hall-effect sensörlerini entegre eden çok katmanlı PCB.',
          'Firmware Sinerjisi: ESP32 yüksek bant genişlikli kablosuz telemetriyi (C++/JS/HTML) yönetirken ATmega2560 deterministik kontrol döngüsünü korur.',
          'Sistem Sahipliği: PCB düzeni, firmware geliştirme ve tam elektrik sistemi entegrasyonu dahil tüm yaşam döngüsü sorumluluğu.',
        ],
      },
      {
        subtitle: 'Çok Protokollü Kablosuz Araştırma Platformu',
        overview:
          'T-Embed mimarisinin yüksek performanslı bir uyarlaması olarak tasarlanmış çok yönlü taşınabilir kablosuz araştırma aracı. Frekans analizi, sinyal emülasyonu ve donanım güvenliği araştırmaları için hepsi bir arada platform.',
        capabilities: [
          'Çoklu Protokol Genişlemesi: Tek bir özel PCB üzerine entegre edilmiş CC1101 (Sub-GHz), PN532 (NFC/RFID) ve nRF24L01+ (2.4GHz).',
          'Özel PCB Yeniden Tasarımı: Yüksek yoğunluklu bileşen yerleşimi ve sinyal bütünlüğüne odaklanan ESP32-S3 çekirdeği için çok katmanlı düzen.',
          'Kablosuz Çok Yönlülük: Tek cihazda Sub-1GHz, 2.4GHz ve 13.56MHz NFC bantlarında kesintisiz protokol testi.',
          'Entegre Güç Yönetimi: Birden fazla RF modülünden gelen pik iletim yüklerinde kararlı çalışma için güç regülasyonu ve BMS.',
          'Firmware ve Arayüz Sinerjisi: Çeşitli kablosuz arayüzlerin çoklama ve eşzamanlı çalışması için düşük seviyeli sürücüler.',
        ],
        focus: [
          'RF Sinyal Bütünlüğü: Birbirine yakın yerleştirilmiş kablosuz modüller arasındaki EMI\'yi en aza indirmek için optimize edilmiş PCB düzeni.',
          'Sistem Optimizasyonu: Gerçek zamanlı sinyal işleme ve duyarlı kullanıcı arayüzünü eş zamanlı yönetmek için çift çekirdekli ESP32-S3.',
          'Prototipleme Mükemmelliği: Standart geliştirme kartından özel, profesyonel düzeyde araştırma enstrümanına dönüşüm.',
        ],
      },
    ],
  },
  ongoing: {
    label: '§ 03 / Geliştirme Aşamasında',
    liveTag: 'Canlı Telemetri',
    heading1: 'VLF Metal',
    heading2: 'Dedektörü',
    subtitle: 'Gelişmiş Analog Sinyal Koşullandırma · Hedef Ayrıştırma',
    overview:
      'Yüksek performanslı bir Çok Düşük Frekanslı (VLF) metal dedektörü geliştirmeye odaklanan devam eden bir Ar-Ge projesi. Temel hedef, ileri düzey analog ve dijital işleme teknikleri aracılığıyla yoğun mineralli toprak koşullarında aşırı algılama derinliği ve hassas hedef tanımlaması sağlamaktır.',
    milestone: {
      label: 'Güncel Aşama',
      text: 'Uzun süreli saha kullanımı için BMS optimizasyonu ve zayıf dönüş sinyallerinde daha iyi çözünürlük için ADC örnekleme hızı ince ayarı. Hedef: araştırma prototipinden yüksek çözünürlüklü ekran ve sezgisel kontrollerle donatılmış üretime hazır sisteme geçiş.',
    },
    freq: 'f = 18,75 kHz',
    snr: 'SNR ↑',
    phase: 'Δϕ canlı',
    imageCaption: '› STM32 · Özel Güç Elektroniği · LVGL Arayüzü',
    inbot: {
      title: 'Inbot',
      subtitle: 'Yapay Zeka Destekli Mobil Asistan',
      status: 'Geliştirme Aşamasında',
      description:
        'Gömülü sistem izleme ve kontrolüne doğal dil etkileşimi getiren akıllı bir mobil asistan. Karmaşık donanım sistemleri ile sezgisel kullanıcı deneyimi arasında köprü kurmak üzere tasarlanıyor.',
    },
    highlights: [
      {
        title: 'Güç Elektroniği',
        description:
          'Minimum kayıpla yüksek akımlı bobin uyarımı ve maksimum EM alan penetrasyonu için özel H-Köprüsü verici sürücüsü.',
      },
      {
        title: 'Analog Ön Uç',
        description:
          'Çok aşamalı gürültü azaltma ve zayıf dönüş darbelerinin hassas çıkarımı için Sallen-Key aktif filtreli yüksek kazançlı sinyal koşullandırma zinciri.',
      },
      {
        title: 'Dijital Sinyal İşleme',
        description:
          'Gerçek zamanlı yanıt sürdürülürken demir ve demir dışı hedef ayrıştırması için STM32 üzerinde gerçek zamanlı faz analizi.',
      },
      {
        title: 'Zemin Dengesi',
        description:
          'Zorlu jeolojik ortamlarda kararlı performans için toprak mineralizasyon etkilerini filtreleyen uyarlanabilir zemin dengeleme algoritmaları.',
      },
    ],
  },
  contact: {
    label: '§ 04 / İletişim',
    heading: 'Birlikte ürünleştirelim.',
    description:
      'Yüksek öncelikli Ar-Ge süreçleri nedeniyle şu an yoğun bir takvimdeyim. Stratejik ve uzun vadeli fırsatlar için profesyonel ağımı genişletmeye devam ediyorum. Gelecek odaklı projeler için irtibatta kalalım.',
    sendButton: 'Mesaj Gönder',
    quickInfo: [
      { label: 'Uzmanlık', value: 'Gömülü Sistemler & Donanım Mühendisliği' },
      { label: 'Odak', value: 'Hassas Kontrol Sistemleri · Analog Sinyal Koşullandırma' },
      { label: 'Durum', value: 'Ar-Ge Süreçlerinde · Gelecek uygunluk için irtibata geçin' },
    ],
    location: '· Ankara, Türkiye · UTC+3',
  },
  footer: {
    signal: 'sinyal nominal',
  },
};

export const translations: Record<Lang, Translations> = { en, tr };
