import { Controller, Get, Put, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  async getDashboardStats() {
    return this.adminService.getDashboardStats();
  }

  @Get('customers')
  async getCustomers() {
    return this.adminService.getCustomers();
  }

  @Put('customers/:id/status')
  async toggleCustomerStatus(@Param('id', ParseIntPipe) id: number, @Body() body: { status: 'active' | 'blocked' }) {
    return this.adminService.toggleCustomerStatus(id, body.status);
  }

  @Get('locks/access-codes')
  async getAccessCodes() {
    return this.adminService.getAccessCodes();
  }
}
