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
import { MarketService } from "../market.service";
import { MarketCreateInput } from "./MarketCreateInput";
import { Market } from "./Market";
import { MarketFindManyArgs } from "./MarketFindManyArgs";
import { MarketWhereUniqueInput } from "./MarketWhereUniqueInput";
import { MarketUpdateInput } from "./MarketUpdateInput";
import { LiveUpdateFindManyArgs } from "../../liveUpdate/base/LiveUpdateFindManyArgs";
import { LiveUpdate } from "../../liveUpdate/base/LiveUpdate";
import { LiveUpdateWhereUniqueInput } from "../../liveUpdate/base/LiveUpdateWhereUniqueInput";
import { PriceHistoryFindManyArgs } from "../../priceHistory/base/PriceHistoryFindManyArgs";
import { PriceHistory } from "../../priceHistory/base/PriceHistory";
import { PriceHistoryWhereUniqueInput } from "../../priceHistory/base/PriceHistoryWhereUniqueInput";

export class MarketControllerBase {
  constructor(protected readonly service: MarketService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Market })
  async createMarket(@common.Body() data: MarketCreateInput): Promise<Market> {
    return await this.service.createMarket({
      data: data,
      select: {
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Market] })
  @ApiNestedQuery(MarketFindManyArgs)
  async markets(@common.Req() request: Request): Promise<Market[]> {
    const args = plainToClass(MarketFindManyArgs, request.query);
    return this.service.markets({
      ...args,
      select: {
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Market })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async market(
    @common.Param() params: MarketWhereUniqueInput
  ): Promise<Market | null> {
    const result = await this.service.market({
      where: params,
      select: {
        createdAt: true,
        id: true,
        location: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Market })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMarket(
    @common.Param() params: MarketWhereUniqueInput,
    @common.Body() data: MarketUpdateInput
  ): Promise<Market | null> {
    try {
      return await this.service.updateMarket({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          location: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Market })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMarket(
    @common.Param() params: MarketWhereUniqueInput
  ): Promise<Market | null> {
    try {
      return await this.service.deleteMarket({
        where: params,
        select: {
          createdAt: true,
          id: true,
          location: true,
          name: true,
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

  @common.Get("/:id/liveUpdates")
  @ApiNestedQuery(LiveUpdateFindManyArgs)
  async findLiveUpdates(
    @common.Req() request: Request,
    @common.Param() params: MarketWhereUniqueInput
  ): Promise<LiveUpdate[]> {
    const query = plainToClass(LiveUpdateFindManyArgs, request.query);
    const results = await this.service.findLiveUpdates(params.id, {
      ...query,
      select: {
        createdAt: true,

        crop: {
          select: {
            id: true,
          },
        },

        id: true,

        market: {
          select: {
            id: true,
          },
        },

        time: true,
        updateMessage: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/liveUpdates")
  async connectLiveUpdates(
    @common.Param() params: MarketWhereUniqueInput,
    @common.Body() body: LiveUpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      liveUpdates: {
        connect: body,
      },
    };
    await this.service.updateMarket({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/liveUpdates")
  async updateLiveUpdates(
    @common.Param() params: MarketWhereUniqueInput,
    @common.Body() body: LiveUpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      liveUpdates: {
        set: body,
      },
    };
    await this.service.updateMarket({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/liveUpdates")
  async disconnectLiveUpdates(
    @common.Param() params: MarketWhereUniqueInput,
    @common.Body() body: LiveUpdateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      liveUpdates: {
        disconnect: body,
      },
    };
    await this.service.updateMarket({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/priceHistories")
  @ApiNestedQuery(PriceHistoryFindManyArgs)
  async findPriceHistories(
    @common.Req() request: Request,
    @common.Param() params: MarketWhereUniqueInput
  ): Promise<PriceHistory[]> {
    const query = plainToClass(PriceHistoryFindManyArgs, request.query);
    const results = await this.service.findPriceHistories(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/priceHistories")
  async connectPriceHistories(
    @common.Param() params: MarketWhereUniqueInput,
    @common.Body() body: PriceHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      priceHistories: {
        connect: body,
      },
    };
    await this.service.updateMarket({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/priceHistories")
  async updatePriceHistories(
    @common.Param() params: MarketWhereUniqueInput,
    @common.Body() body: PriceHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      priceHistories: {
        set: body,
      },
    };
    await this.service.updateMarket({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/priceHistories")
  async disconnectPriceHistories(
    @common.Param() params: MarketWhereUniqueInput,
    @common.Body() body: PriceHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      priceHistories: {
        disconnect: body,
      },
    };
    await this.service.updateMarket({
      where: params,
      data,
      select: { id: true },
    });
  }
}
