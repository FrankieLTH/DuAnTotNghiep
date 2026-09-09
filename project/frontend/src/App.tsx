import { useEffect, useState } from 'react';
import api from './services/api';
import './index.css';

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Đang kiểm tra kết nối...');

  useEffect(() => {
    // Kiểm tra kết nối tới Backend
    api.get('/')
      .then(() => setBackendStatus('Đã kết nối thành công tới NestJS Backend (Port 3000)'))
      .catch(() => setBackendStatus('Chưa kết nối Backend (Hãy bật Backend bằng npm run start:dev)'));
  }, []);

  return (
    <div>
      <span className="badge status-online">Homestay Automation System v1.0</span>
      <h1>Booking & Self Check-in Homestay System</h1>
      <p style={{ color: '#94a3b8' }}>
        Hệ thống tự động hoá từ Đặt phòng, Thanh toán PayOS, sinh Mật mã TTLock đến Check-in & Check-out.
      </p>

      <div className="card">
        <h2>Trạng thái Backend Service</h2>
        <p><strong>URL API:</strong> <code>http://localhost:3000</code></p>
        <p><strong>Trạng thái:</strong> {backendStatus}</p>
      </div>

      <div className="card" style={{ marginTop: '1rem', textAlign: 'left' }}>
        <h3>🚀 Hướng dẫn phát triển:</h3>
        <ul>
          <li><strong>Backend:</strong> <code>cd project/backend && npm run start:dev</code></li>
          <li><strong>Frontend:</strong> <code>cd project/frontend && npm run dev</code></li>
          <li><strong>Database & Redis:</strong> <code>docker compose up -d</code></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
