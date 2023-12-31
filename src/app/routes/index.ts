import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AdminRoutes } from '../modules/admins/admins.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { ServiceRoutes } from '../modules/services/services.route';
import { PaymentRoutes } from '../modules/Payment/payment.route';
import { BookingRoutes } from '../modules/booking/booking.route';
import { TimeSlotsRoutes } from '../modules/slots/slots.routes';
import { ReviewRoutes } from '../modules/review/review.route';

const router = express.Router();
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '/slots',
    route: TimeSlotsRoutes,
  },
  {
    path: '/payments',
    route: PaymentRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
