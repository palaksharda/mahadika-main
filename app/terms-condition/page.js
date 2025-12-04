"use client";
import React from "react";
import { Collapse, Typography } from "antd";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const TermsConditions = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>Syarat dan Ketentuan Umum</Title>
      <Paragraph>
        Selamat datang di mahadika.com! Dengan mengakses dan menggunakan situs
        ini, Anda menyetujui untuk mematuhi Syarat dan Ketentuan berikut. Mohon
        baca dengan seksama.
      </Paragraph>

      <Collapse accordion expandIconPosition="right">
        <Panel header="1. Akun Pengguna" key="1">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>
              Pengguna wajib mendaftarkan akun dengan informasi pribadi yang
              benar dan terbaru.
            </li>
            <li>
              Pengguna bertanggung jawab atas keamanan akun dan aktivitas yang
              terjadi di dalamnya.
            </li>
            <li>
              Dilarang menggunakan akun pihak lain atau memberikan akses ke
              pihak lain tanpa izin.
            </li>
          </ul>
        </Panel>
        <Panel header="2. Informasi Produk" key="2">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>
              Semua produk suplemen telah terdaftar atau dalam proses registrasi
              di BPOM (jika berlaku).
            </li>
            <li>
              Informasi produk berasal dari label resmi dan bukan saran medis.
            </li>
            <li>
              Konsultasikan dengan tenaga kesehatan sebelum konsumsi, terutama
              untuk ibu hamil/menyusui.
            </li>
          </ul>
        </Panel>
        <Panel header="3. Pembelian dan Pembayaran" key="3">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>
              Semua harga dalam Rupiah (IDR) dan sudah termasuk PPN jika
              berlaku.
            </li>
            <li>Pembayaran dilakukan melalui metode yang tersedia di situs.</li>
            <li>Pesanan diproses setelah pembayaran diverifikasi.</li>
          </ul>
        </Panel>
        <Panel header="4. Pengiriman dan Estimasi Waktu" key="4">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>
              Pengiriman oleh mitra logistik yang bekerja sama dengan kami.
            </li>
            <li>Estimasi tergantung lokasi dan layanan ekspedisi.</li>
            <li>
              Kami tidak bertanggung jawab atas keterlambatan dari pihak
              ekspedisi.
            </li>
          </ul>
        </Panel>
        <Panel header="5. Pengembalian dan Penukaran Produk" key="5">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>
              Produk hanya dapat dikembalikan jika rusak, salah kirim, atau
              segel rusak.
            </li>
            <li>
              Retur maksimal 3 hari setelah produk diterima, disertai bukti
              foto/video.
            </li>
            <li>
              Produk yang sudah dibuka/telah dikonsumsi tidak bisa dikembalikan.
            </li>
          </ul>
        </Panel>
        <Panel header="6. Disclaimer Kesehatan" key="6">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>
              Suplemen bukan pengganti makanan utama dan tidak untuk
              mendiagnosis atau menyembuhkan penyakit.
            </li>
            <li>Hasil bisa berbeda untuk tiap individu.</li>
            <li>
              Kami tidak bertanggung jawab atas reaksi alergi akibat konsumsi
              tanpa konsultasi.
            </li>
          </ul>
        </Panel>
        <Panel header="7. Kebijakan Privasi" key="7">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>
              Data pribadi aman dan hanya digunakan untuk transaksi dan
              pengiriman.
            </li>
            <li>
              Tidak dibagikan ke pihak ketiga tanpa persetujuan, kecuali
              diwajibkan hukum.
            </li>
          </ul>
        </Panel>
        <Panel header="8. Perubahan Syarat dan Ketentuan" key="8">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>Kami dapat mengubah ketentuan tanpa pemberitahuan.</li>
            <li>
              Penggunaan situs setelah perubahan dianggap sebagai persetujuan.
            </li>
          </ul>
        </Panel>
        <Panel header="9. Hukum yang Berlaku" key="9">
          <ul style={{ listStyleType: "disc", paddingLeft: "24px" }}>
            <li>Tunduk pada hukum Republik Indonesia.</li>
            <li>
              Sengketa diselesaikan secara musyawarah atau jalur hukum di
              Indonesia.
            </li>
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
};

export default TermsConditions;
