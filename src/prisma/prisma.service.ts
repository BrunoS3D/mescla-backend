import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit() {
    this.$use(async (params, next) => {
      // Check incoming query type
      if (params.action == 'delete') {
        // Delete queries
        // Change action to an update
        params.action = 'update';
        params.args['data'] = { deletedAt: new Date() };
      }
      if (params.action == 'deleteMany') {
        // Delete many queries
        params.action = 'updateMany';
        if (params.args.data != undefined) {
          params.args.data['deletedAt'] = true;
        } else {
          params.args['data'] = { deletedAt: new Date() };
        }
      }

      if (params.action == 'findUnique') {
        // Change to findFirst - you cannot filter
        // by anything except ID / unique with findUnique
        params.action = 'findFirst';
        // Add 'deletedAt' filter
        // ID filter maintained
        params.args.where['deletedAt'] = null;
      }

      if (params.action == 'findMany') {
        // Find many queries
        if (params.args.where != undefined) {
          if (params.args.where.deletedAt == undefined) {
            // Exclude deleted records if they have not been expicitly requested
            params.args.where['deletedAt'] = null;
          }
        } else {
          params.args['where'] = { deletedAt: null };
        }
      }

      return next(params);
    });

    // optional and better for performance, because of prisma client lazy connect behavior
    // https://github.com/fivethree-team/nestjs-prisma-starter/issues/438
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
