/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PriceHistoryService } from "../priceHistory.service";
import { PriceHistoryCreateInput } from "./PriceHistoryCreateInput";
import { PriceHistory } from "./PriceHistory";
import { PriceHistoryFindManyArgs } from "./PriceHistoryFindManyArgs";
import { PriceHistoryWhereUniqueInput } from "./PriceHistoryWhereUniqueInput";
import { PriceHistoryUpdateInput } from "./PriceHistoryUpdateInput";

export class PriceHistoryControllerBase {
  constructor(protected readonly service: PriceHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PriceHistory })
  async createPriceHistory(
    @common.Body() data: PriceHistoryCreateInput
  ): Promise<PriceHistory> {
    return await this.service.createPriceHistory({
      data: {
        ...data,

        crop: data.crop
          ? {
              connect: data.crop,
            }
          : undefined,

        market: data.market
          ? {
              connect: data.market,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        crop: {
          select: {
            id: true,
          },
        },

        date: true,
        id: true,

        market: {
          select: {
            id: true,
          },
        },

        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PriceHistory] })
  @ApiNestedQuery(PriceHistoryFindManyArgs)
  async priceHistories(
    @common.Req() request: Request
  ): Promise<PriceHistory[]> {
    const args = plainToClass(PriceHistoryFindManyArgs, request.query);
    return this.service.priceHistories({
      ...args,
      select: {
        createdAt: true,

        crop: {
          select: {
            id: true,
          },
        },

        date: true,
        id: true,

        market: {
          select: {
            id: true,
          },
        },

        price: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PriceHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async priceHistory(
    @common.Param() params: PriceHistoryWhereUniqueInput
  ): Promise<PriceHistory | null> {
    const result = await this.service.priceHistory({
      where: params,
      select: {
        createdAt: true,

        crop: {
          select: {
            id: true,
          },
        },

        date: true,
        id: true,

        market: {
          select: {
            id: true,
          },
        },

        price: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PriceHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePriceHistory(
    @common.Param() params: PriceHistoryWhereUniqueInput,
    @common.Body() data: PriceHistoryUpdateInput
  ): Promise<PriceHistory | null> {
    try {
      return await this.service.updatePriceHistory({
        where: params,
        data: {
          ...data,

          crop: data.crop
            ? {
                connect: data.crop,
              }
            : undefined,

          market: data.market
            ? {
                connect: data.market,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          crop: {
            select: {
              id: true,
            },
          },

          date: true,
          id: true,

          market: {
            select: {
              id: true,
            },
          },

          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PriceHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePriceHistory(
    @common.Param() params: PriceHistoryWhereUniqueInput
  ): Promise<PriceHistory | null> {
    try {
      return await this.service.deletePriceHistory({
        where: params,
        select: {
          createdAt: true,

          crop: {
            select: {
              id: true,
            },
          },

          date: true,
          id: true,

          market: {
            select: {
              id: true,
            },
          },

          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
