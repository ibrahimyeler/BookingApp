// src/types/express.d.ts
import { User } from '../types/user/User'; // Kullanıcı türünüzü burada tanımlayın

declare global {
  namespace Express {
    interface Request {
      user?: User; // Burada `User`'ı uygun şekilde tanımladığınızdan emin olun
    }
  }
}
